# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 2.0.0 - 2026-08-26

### Breaking

- Removed `PocketShare` — Pocket was shut down by Mozilla in July 2025.
- Removed `WorkplaceShare` — Meta Workplace was discontinued in 2026.
- Removed `FacebookCount` — Facebook's engagement API requires a server-side app token, and the old implementation dangerously asked users to put their app secret in client-side code.
- Removed `RedditCount` — Reddit blocked unauthenticated JSON/JSONP access in 2023.
- Count components no longer accept `appId`/`appSecret` props.
- The CommonJS build moved from `dist/index.js` to `dist/index.cjs` and a proper `exports` map was added. This fixes the long-standing "index.js is treated as an ES module" crash (#16).

### Added

- `XShare` — the canonical X (formerly Twitter) button: X logo, opens `https://x.com/intent/post`. Props: `url`, `title`, `via`, `hashtags`, `related`.
- `BlueskyShare` — opens `https://bsky.app/intent/compose`. Props: `url`, `title`, `separator`.
- `ThreadsShare` — opens `https://www.threads.net/intent/post`. Props: `url`, `title`.
- `VKShare` export. The old `VKShareShare` misspelling remains as a deprecated alias.
- All standard button HTML props (`className`, `style`, `data-*`, `aria-*`, event handlers, etc.) are now forwarded to the underlying `<button>` — the buttons can finally be styled with CSS classes (#19). `disabled` now truly disables the button and applies `disabledStyle`; `iconStyle`/`iconFillColor` now work.
- TypeScript prop/param types are now exported from the package root.
- `'use client'` banner in the bundle — works when imported directly into Next.js App Router server components.
- React 19 support: the peer range is now `^17 || ^18 || ^19`, and `defaultProps` was removed internally — fixing buttons silently not opening under React 19 (#20) and the `defaultProps` deprecation warning.

### Changed

- `TwitterShare` is now a deprecated alias of `XShare` (X icon, `x.com/intent/post`).
- Endpoints refreshed: WhatsApp always uses `api.whatsapp.com/send`; Telegram uses `t.me/share/url`; LinkedIn uses `www.linkedin.com/sharing/share-offsite/`; Hatena, Instapaper and Weibo upgraded to https.
- Toolchain: rollup + `@rollup/plugin-typescript`, TypeScript 5.9, ESLint 9 flat config, sourcemaps shipped, no more minified-only output.

### Fixed

- Hatena link params are now properly URL-encoded.
- Popup windows opened with `blankTarget` now use `noopener,noreferrer` (security).
- Buttons render `type="button"` — no more accidental form submits.
- Buttons no longer strip the keyboard focus outline (a11y; react-share-lite #6 applied here too).
- Tumblr `tags` prop is now correctly typed as `string[]`.
- Email button: clicking navigates to the `mailto:` link; a custom `onClick` no longer breaks it.

## 1.1.0 - 2023-12-04

- Last v1 release.
