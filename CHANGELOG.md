# Changelog

All notable changes to 1mb.dev will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added

- MIT LICENSE file
- `.nvmrc` for Node.js version consistency
- CHANGELOG.md for release tracking
- CI pipeline with ESLint, Prettier, HTML/CSS validation
- humans.txt with project philosophy
- Counter API `/health` endpoint with Redis connectivity check
- Wrangler CLI setup for Counter API deployment

### Changed

- Refactored 404.html to use shared stylesheet (171 → 35 lines)
- Improved semantic markup: `<hr>` for separator, `<section>` for counter
- Added `meta author` tag and `type="button"` attributes
- Updated manifest description for consistency
- Added `site.webmanifest` to Service Worker cache
- Bumped Service Worker cache to v4

## [1.1.0] - 2025-01

### Added

- Context section: "Sometimes solo. Sometimes inside a team. Always accountable."
- Invitation line bridging manifesto and counter
- Community counter with anonymous voting
- Dark/light theme toggle with system preference detection
- Parallax effect on watermark (respects reduced motion)
- Service Worker for offline support
- PWA manifest for mobile installation

### Changed

- Refined copy to ownership mindset
- Updated og-image with current style and copy
- UI refresh: typography, spacing, visual depth
- Reorganized assets into proper folder structure

## [1.0.0] - 2024-12

### Added

- Initial landing page
- Brand assets and SEO markup
- GitHub Pages deployment with custom domain (1mb.dev)
- robots.txt and sitemap.xml
- Self-hosted fonts (Inter, Space Grotesk)
