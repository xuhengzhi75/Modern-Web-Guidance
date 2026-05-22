---
name: chrome-extensions-en-index
description: English index for the official Chrome Extensions agent skill. Use when a team wants to build, review, debug, or publish Chrome Extensions with Manifest V3.
---

# Chrome Extensions English Index

This file summarizes the official `chrome-extensions` skill for evaluation and adoption. Use the upstream skill for the latest full reference material.

## Purpose

The Chrome Extensions skill helps coding agents build production-quality Manifest V3 extensions and prepare Chrome Web Store submissions. It emphasizes issues that frequently break generated extensions: nonexistent icons, missing side-panel triggers, extension CSP, service worker persistence, permissions, messaging, content script performance, identity configuration, and review artifacts.

## Use When

- Building a Chrome or Chromium browser extension.
- Modifying `manifest.json`.
- Working with content scripts, side panels, popups, service workers, DevTools panels, omnibox, context menus, or `chrome.*` APIs.
- Drafting Web Store descriptions, permission justifications, privacy policies, or review checklists.

## Review Checklist

- Referenced icon files exist at the correct dimensions.
- Side panels have an explicit open trigger.
- Sandboxed or isolated execution is used when running dynamic code.
- Required permissions are declared and justified.
- Extension service worker state is persisted outside variables.
- Async message listeners keep the response channel open.
- Content scripts yield during large DOM operations.
- Store listing and privacy policy match actual behavior.
