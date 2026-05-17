# FundStack-AI 

Moonshine Capital Partner Ecosystem

## Executive Summary

This repository contains the front-end marketplace, partner routing layer, and engineering-as-marketing tools for Moonshine Capital. The system is designed to equip affiliate partners and brokers with high-converting assets while Moonshine Capital retains control over qualification logic, backend mapping, tracking, and fulfillment.

## Core Philosophy: Engineering as Marketing

Instead of generic landing pages, this ecosystem relies on interactive tools (calculators, quizzes, pre-checks) to attract, segment, qualify, and route commercial borrowers based on data (FICO, revenue, time in business) rather than guesswork.

## Architecture Layers

- **Public Acquisition:** Vertical-specific funnels (e.g., Trucking, E-commerce, Medical).
- **Conversion & Tools:** Embedded widgets (Blue Collar Banker, Cost of Capital, Startup Pre-Check).
- **Backend Orchestration:** CRM capture via webhooks, automated partner attribution via URL parameters (?partner_id=), and Deal Desk routing.

## Protection Rules

- **No Backend Exposure:** Lender names (Credibly, Visio, etc.) are strictly stripped from all public-facing assets.
- **Partner Protection:** Leads generated through a partner's tracked asset link are permanently hardcoded to their partner_id.
- **Intelligent Routing:** We do not allow "Application Roulette." Every file must be pre-vetted via the matrix or interactive tools before Deal Desk submission.
