# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Nuxt 4 application for the New Taipei City Property Management Association (新北市華廈物業協會). The site is built with Vue 3, uses @nuxt/ui for UI components, and is configured with TypeScript support.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Generate static site
npm run generate
```

## Architecture

### Application Structure

- **app/app.vue**: Root component that wraps the entire application with `<UApp>` and renders `<NuxtLayout>`
- **app/layouts/default.vue**: Main layout containing the navigation header and footer, used across all pages
- **app/pages/**: File-based routing with pages for home, about, services, information, agent, engineering, invitation, contact, and dashboard
- **app/assets/css/main.css**: Global CSS styles

### UI Framework

The project uses @nuxt/ui (v4.4.0) which provides pre-built components. Components are prefixed with `U` (e.g., `<UApp>`).

### Navigation

The navigation structure is defined in `app/layouts/default.vue:9-18` with Chinese labels:
- 首頁 (Home) - /
- 關於我們 (About) - /about
- 服務項目 (Services) - /services
- 廠商資訊 (Information) - /information
- 工作媒介 (Agent) - /agent
- 社區工程服務 (Engineering) - /engineering
- 招商合作專區 (Invitation) - /invitation
- 聯絡我們 (Contact) - /contact

The layout implements responsive navigation using Headless UI components (`Disclosure`, `DisclosureButton`, `DisclosurePanel`) with a mobile menu toggle.

### Styling

- Tailwind CSS is used for styling (configured via @nuxt/ui)
- Custom CSS is in `app/assets/css/main.css`
- Logo is located at `/public/logo.png`

### Configuration

- **nuxt.config.ts**: Minimal configuration with devtools enabled and main.css imported
- **tsconfig.json**: Uses project references to auto-generated .nuxt TypeScript configs
- Types are automatically generated in `.nuxt/` directory after `npm install` (via postinstall hook)
