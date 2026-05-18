# AI-Assisted Playwright QA Framework

A portfolio-ready end-to-end test automation framework built with Playwright and TypeScript.

This project is part of a QA + AI learning roadmap. The goal is to build a modern QA automation framework step by step while applying real-world testing practices.

[Read the Turkish documentation](./README.tr.md)

## Tech Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions
- HTML Reporter

## Target Application

[SauceDemo](https://www.saucedemo.com/)

## Current Test Coverage

### Smoke Tests

- Login page loads successfully
- Username input is visible
- Password input is visible
- Login button is visible

### Auth Tests

- Valid login
- Invalid login
- Logout

## Project Structure

```text
.
├── pages/
│   ├── LoginPage.ts
│   └── InventoryPage.ts
├── test-data/
│   └── users.ts
├── tests/
│   ├── auth/
│   │   └── login.spec.ts
│   └── smoke/
│       └── login-page.smoke.spec.ts
├── playwright.config.ts
├── package.json
└── tsconfig.json
```

## Installation

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npm run install:browsers
```

## Running Tests

Run all tests:

```bash
npm test
```

Run auth tests:

```bash
npm run test:auth
```

Run only Chromium tests:

```bash
npm run test:chromium
```

Run only Firefox tests:

```bash
npm run test:firefox
```

Run only WebKit tests:

```bash
npm run test:webkit
```

Run tests in headed mode:

```bash
npm run test:headed
```

Debug tests:

```bash
npm run test:debug
```

Open HTML report:

```bash
npm run test:report
```

Run TypeScript check:

```bash
npm run typecheck
```

## Current NPM Scripts

```json
{
  "test": "playwright test",
  "test:auth": "playwright test tests/auth/login.spec.ts",
  "test:chromium": "playwright test --project=chromium",
  "test:firefox": "playwright test --project=firefox",
  "test:webkit": "playwright test --project=webkit",
  "test:headed": "playwright test --project=chromium --headed",
  "test:debug": "playwright test --project=chromium --debug",
  "test:report": "playwright show-report",
  "typecheck": "tsc --noEmit",
  "install:browsers": "playwright install"
}
```

## Learning Goals

This project focuses on:

- Playwright fundamentals
- TypeScript-based test automation
- Page Object Model
- Stable selectors
- Test data separation
- Cross-browser testing
- HTML reporting
- CI-ready test structure
- AI-assisted debugging and test design
