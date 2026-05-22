---
name: modern-web-guidance-en-index
description: English index for the official Modern Web Guidance agent skill. Use when a team wants to understand, install, evaluate, or adapt Google's Modern Web Guidance skill for frontend coding agents.
---

# Modern Web Guidance English Index

This file is an English index and adoption wrapper for the official `modern-web-guidance` skill. It is not a full upstream mirror. Use the official npm package for the newest guide text.

## Purpose

Modern Web Guidance helps coding agents use current web platform APIs instead of stale or overly heavy patterns. It is useful at the start of HTML, CSS, and client-side JavaScript work, especially when the task touches UI, layout, performance, accessibility, modern browser APIs, security, privacy, passkeys, built-in browser AI, or WebMCP.

## Official Usage

Search first:

```sh
npx -y modern-web-guidance@latest search "<implementation goal>"
```

Retrieve the matched guide:

```sh
npx -y modern-web-guidance@latest retrieve "<guide-id>"
```

Browse all guides:

```sh
npx -y modern-web-guidance@latest list
```

## Skill Pack Classification

| Pack | Role | Use when |
| --- | --- | --- |
| `modern-web-guidance` | Modern web platform guidance | Building or reviewing web UI, HTML, CSS, client-side JavaScript, performance, accessibility, security, privacy, passkeys, built-in AI, or WebMCP patterns. |
| `chrome-extensions` | Chrome extension guidance | Building, debugging, or publishing Chrome Extensions with Manifest V3 and Chrome Web Store requirements. |

## Modern Web Guidance Categories

- Accessibility
- Built-in AI
- CSS
- CSS Layout
- Forms and UI
- HTML and DOM
- Passkeys
- Performance
- Privacy
- Security
- User Experience
- WebMCP

## Agent Operating Rule

Before implementing a web feature, search by intent, retrieve the relevant guide, and then adapt the recommendation to the project's framework, browser support policy, and product constraints. Do not treat a guide match as automatic permission to use a feature when the guide itself asks for feature detection or fallbacks.
