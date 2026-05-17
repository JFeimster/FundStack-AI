/*
  FundStack AI Shared JavaScript
  Static-first utility foundation for future page cleanup.
  Existing pages may still use inline scripts until migrated.
*/

(function () {
  const STORAGE_KEYS = {
    partnerId: "fundstack_partner_id",
    sourceUrl: "fundstack_source_url",
    utm: "fundstack_utm_params"
  };

  function getQueryParams() {
    return new URLSearchParams(window.location.search || "");
  }

  function captureAttribution() {
    const params = getQueryParams();
    const partnerId = params.get("partner_id") || params.get("partner") || params.get("ref");
    const utm = {};

    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach((key) => {
      const value = params.get(key);
      if (value) utm[key] = value;
    });

    if (partnerId) {
      localStorage.setItem(STORAGE_KEYS.partnerId, partnerId);
    }

    if (Object.keys(utm).length > 0) {
      localStorage.setItem(STORAGE_KEYS.utm, JSON.stringify(utm));
    }

    if (!localStorage.getItem(STORAGE_KEYS.sourceUrl)) {
      localStorage.setItem(STORAGE_KEYS.sourceUrl, window.location.href);
    }
  }

  function getAttribution() {
    let utm = {};

    try {
      utm = JSON.parse(localStorage.getItem(STORAGE_KEYS.utm) || "{}");
    } catch (error) {
      utm = {};
    }

    return {
      partnerId: localStorage.getItem(STORAGE_KEYS.partnerId) || "",
      sourceUrl: localStorage.getItem(STORAGE_KEYS.sourceUrl) || window.location.href,
      utm
    };
  }

  function appendAttributionToLinks(selector = "a[data-preserve-attribution]") {
    const attribution = getAttribution();

    if (!attribution.partnerId && Object.keys(attribution.utm || {}).length === 0) {
      return;
    }

    document.querySelectorAll(selector).forEach((link) => {
      try {
        const url = new URL(link.getAttribute("href"), window.location.href);

        if (attribution.partnerId && !url.searchParams.get("partner_id")) {
          url.searchParams.set("partner_id", attribution.partnerId);
        }

        Object.entries(attribution.utm || {}).forEach(([key, value]) => {
          if (value && !url.searchParams.get(key)) {
            url.searchParams.set(key, value);
          }
        });

        link.setAttribute("href", url.pathname + url.search + url.hash);
      } catch (error) {
        // Ignore non-URL links such as anchors, mailto, tel, etc.
      }
    });
  }

  function loadTallyEmbeds() {
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
        const targetSelector = button.getAttribute("data-copy-target");
        const target = document.querySelector(targetSelector);
        const text = target ? target.innerText || target.value : "";
        const success = await copyText(text.trim());

        const original = button.innerText;
        button.innerText = success ? "Copied" : "Copy failed";

        window.setTimeout(() => {
          button.innerText = original;
        }, 1400);
      });
    });
  }

  function formatCurrency(value) {
    const number = Number(value || 0);
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0
    }).format(number);
  }

  function initFundStack() {
    captureAttribution();
    appendAttributionToLinks();
    bindCopyButtons();
    loadTallyEmbeds();
  }

  window.FundStack = {
    captureAttribution,
    getAttribution,
    appendAttributionToLinks,
    loadTallyEmbeds,
    copyText,
    formatCurrency,
    init: initFundStack
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFundStack);
  } else {
    initFundStack();
  }
})();
