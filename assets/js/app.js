/*
  FundStack AI Shared JavaScript
  Static-first attribution and CTA routing layer.
*/

(function () {
  "use strict";

  const STORAGE_KEYS = {
    partnerId: "fundstack_partner_id",
    trackingLinkId: "fundstack_tracking_link_id",
    campaignId: "fundstack_campaign_id",
    widgetId: "fundstack_widget_id",
    sourceUrl: "fundstack_source_url",
    utm: "fundstack_utm_params"
  };

  const ATTRIBUTION_FIELDS = [
    "partner_id",
    "tracking_link_id",
    "campaign_id",
    "widget_id",
    "source_url",
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content"
  ];

  const ALLOWED_EXTERNAL_HOSTS = new Set([
    "am-i-fundable.vercel.app",
    "tally.so"
  ]);

  let activeRoute = null;

  function getQueryParams() {
    return new URLSearchParams(window.location.search || "");
  }

  function safeGet(key) {
    try {
      return window.localStorage.getItem(key) || "";
    } catch (error) {
      return "";
    }
  }

  function safeSet(key, value) {
    if (!value) return;
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      // Attribution should never block the page.
    }
  }

  function getStoredUtm() {
    try {
      return JSON.parse(safeGet(STORAGE_KEYS.utm) || "{}");
    } catch (error) {
      return {};
    }
  }

  function captureAttribution() {
    const params = getQueryParams();
    const partnerId = params.get("partner_id") || params.get("partner") || params.get("ref") || "";
    const trackingLinkId = params.get("tracking_link_id") || params.get("tracking") || "";
    const campaignId = params.get("campaign_id") || "";
    const widgetId = params.get("widget_id") || "";
    const utm = { ...getStoredUtm() };

    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach((key) => {
      const value = params.get(key);
      if (value) utm[key] = value;
    });

    safeSet(STORAGE_KEYS.partnerId, partnerId);
    safeSet(STORAGE_KEYS.trackingLinkId, trackingLinkId);
    safeSet(STORAGE_KEYS.campaignId, campaignId);
    safeSet(STORAGE_KEYS.widgetId, widgetId);

    if (Object.keys(utm).length > 0) safeSet(STORAGE_KEYS.utm, JSON.stringify(utm));
    if (!safeGet(STORAGE_KEYS.sourceUrl)) safeSet(STORAGE_KEYS.sourceUrl, window.location.href);
  }

  function getAttribution() {
    return {
      partner_id: safeGet(STORAGE_KEYS.partnerId),
      tracking_link_id: safeGet(STORAGE_KEYS.trackingLinkId),
      campaign_id: safeGet(STORAGE_KEYS.campaignId),
      widget_id: safeGet(STORAGE_KEYS.widgetId),
      source_url: safeGet(STORAGE_KEYS.sourceUrl) || window.location.href,
      ...getStoredUtm()
    };
  }

  function normalizePath(pathname) {
    const path = String(pathname || "/").split("?")[0].split("#")[0] || "/";
    if (path === "/index.html") return "/";
    if (path.endsWith("/index.html")) return path.slice(0, -"index.html".length);
    return path;
  }

  function findRoute(registry, pathname) {
    const normalized = normalizePath(pathname);
    return (registry.routes || []).find((route) => {
      if (normalizePath(route.canonical_path) === normalized) return true;
      return (route.aliases || []).some((alias) => normalizePath(alias) === normalized);
    }) || null;
  }

  function routeDefaults(route) {
    if (!route || !route.attribution) return {};
    return {
      source_asset: route.attribution.source_asset || "",
      utm_source: route.attribution.utm_source || "",
      utm_medium: route.attribution.utm_medium || "",
      utm_campaign: route.attribution.utm_campaign || ""
    };
  }

  function isSkippableHref(href) {
    return !href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:");
  }

  function buildAttributedUrl(href, route) {
    if (isSkippableHref(href)) return href;

    try {
      const url = new URL(href, window.location.href);
      const sameOrigin = url.origin === window.location.origin;
      const allowedExternal = ALLOWED_EXTERNAL_HOSTS.has(url.hostname);
      if (!sameOrigin && !allowedExternal) return href;

      const attribution = getAttribution();
      const defaults = routeDefaults(route);

      ATTRIBUTION_FIELDS.forEach((field) => {
        const value = attribution[field] || defaults[field] || "";
        if (value && !url.searchParams.has(field)) url.searchParams.set(field, value);
      });

      if (defaults.source_asset && !url.searchParams.has("source_asset")) {
        url.searchParams.set("source_asset", defaults.source_asset);
      }

      if (sameOrigin) return `${url.pathname}${url.search}${url.hash}`;
      return url.toString();
    } catch (error) {
      return href;
    }
  }

  function appendAttributionToLinks(selector = "a[href]") {
    document.querySelectorAll(selector).forEach((link) => {
      if (link.hasAttribute("data-no-attribution")) return;
      const href = link.getAttribute("href");
      const nextHref = buildAttributedUrl(href, activeRoute);
      if (nextHref && nextHref !== href) link.setAttribute("href", nextHref);
    });
  }

  function updateTallyEmbeds() {
    document.querySelectorAll("iframe[data-tally-src]").forEach((iframe) => {
      const routed = buildAttributedUrl(iframe.getAttribute("data-tally-src"), activeRoute);
      if (routed) iframe.setAttribute("data-tally-src", routed);
    });
  }

  function loadTallyEmbeds() {
    updateTallyEmbeds();
    const widgetUrl = "https://tally.so/widgets/embed.js";

    function hydrate() {
      if (typeof window.Tally !== "undefined") {
        window.Tally.loadEmbeds();
        return;
      }
      document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((iframe) => {
        iframe.src = iframe.dataset.tallySrc;
      });
    }

    if (typeof window.Tally !== "undefined") {
      hydrate();
      return;
    }

    if (!document.querySelector(`script[src="${widgetUrl}"]`)) {
      const script = document.createElement("script");
      script.src = widgetUrl;
      script.onload = hydrate;
      script.onerror = hydrate;
      document.body.appendChild(script);
    } else {
      hydrate();
    }
  }

  function ensureRoutingStyles() {
    if (document.querySelector("link[data-fundstack-routing-styles]")) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/assets/css/routing.css";
    link.setAttribute("data-fundstack-routing-styles", "true");
    document.head.appendChild(link);
  }

  function makeButton(label, destination, primary) {
    const link = document.createElement("a");
    link.className = `fs-button ${primary ? "fs-button-primary" : "fs-button-secondary"}`;
    link.textContent = label;
    link.href = buildAttributedUrl(destination, activeRoute);
    link.setAttribute("data-preserve-attribution", "true");
    return link;
  }

  function renderRouteCta(route) {
    if (!route || document.getElementById("fundstack-route-cta")) return;

    const section = document.createElement("section");
    section.id = "fundstack-route-cta";
    section.className = "fs-container fs-section fs-route-cta";
    section.setAttribute("aria-labelledby", "fundstack-route-cta-title");

    const panel = document.createElement("div");
    panel.className = "fs-panel fs-route-cta-panel";

    const copy = document.createElement("div");
    copy.className = "fs-route-cta-copy";

    const kicker = document.createElement("div");
    kicker.className = "fs-kicker";
    kicker.textContent = "Recommended next step";

    const title = document.createElement("h2");
    title.id = "fundstack-route-cta-title";
    title.className = "fs-display fs-route-cta-title";
    title.textContent = route.primary_cta.label;

    const problem = document.createElement("p");
    problem.className = "fs-muted fs-route-cta-problem";
    problem.textContent = route.problem;

    const meta = document.createElement("p");
    meta.className = "fs-route-cta-meta";
    meta.textContent = "Partner and campaign attribution is carried into the next approved workflow.";

    copy.append(kicker, title, problem, meta);

    const actions = document.createElement("div");
    actions.className = "fs-button-row fs-route-cta-actions";
    actions.append(
      makeButton(route.primary_cta.label, route.primary_cta.destination, true),
      makeButton(route.secondary_cta.label, route.secondary_cta.destination, false)
    );

    panel.append(copy, actions);
    section.appendChild(panel);

    const footer = document.querySelector("footer");
    const main = document.querySelector("main") || document.body;
    if (footer && footer.parentNode) footer.parentNode.insertBefore(section, footer);
    else main.appendChild(section);
  }

  function updateNavigation(route) {
    if (!route) return;
    const navButton = document.querySelector("nav .fs-button");
    if (!navButton) return;
    navButton.textContent = route.primary_cta.label;
    navButton.href = buildAttributedUrl(route.primary_cta.destination, route);
    navButton.setAttribute("data-preserve-attribution", "true");
  }

  async function loadRoutingRegistry() {
    try {
      const response = await fetch("/data/cta-routing.json");
      if (!response.ok) return null;
      return await response.json();
    } catch (error) {
      return null;
    }
  }

  async function applyRouting() {
    const registry = await loadRoutingRegistry();
    if (!registry) {
      appendAttributionToLinks();
      loadTallyEmbeds();
      return null;
    }

    activeRoute = findRoute(registry, window.location.pathname);
    if (!activeRoute) {
      appendAttributionToLinks();
      loadTallyEmbeds();
      return null;
    }

    document.documentElement.setAttribute("data-route-id", activeRoute.route_id);
    updateNavigation(activeRoute);
    renderRouteCta(activeRoute);
    appendAttributionToLinks();
    loadTallyEmbeds();
    return activeRoute;
  }

  async function copyText(text) {
    if (!text) return false;
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      const success = document.execCommand("copy");
      document.body.removeChild(textarea);
      return success;
    }
  }

  function bindCopyButtons() {
    document.querySelectorAll("[data-copy-target]").forEach((button) => {
      button.addEventListener("click", async () => {
        const target = document.querySelector(button.getAttribute("data-copy-target"));
        const text = target ? target.innerText || target.value : "";
        const success = await copyText(text.trim());
        const original = button.innerText;
        button.innerText = success ? "Copied" : "Copy failed";
        window.setTimeout(() => { button.innerText = original; }, 1400);
      });
    });
  }

  function formatCurrency(value) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0
    }).format(Number(value || 0));
  }

  function initFundStack() {
    ensureRoutingStyles();
    captureAttribution();
    bindCopyButtons();
    applyRouting();
  }

  window.FundStack = {
    captureAttribution,
    getAttribution,
    appendAttributionToLinks,
    buildAttributedUrl,
    loadTallyEmbeds,
    applyRouting,
    copyText,
    formatCurrency,
    init: initFundStack
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initFundStack);
  else initFundStack();
})();