# AI-Assisted Playwright QA Framework

A portfolio-ready end-to-end test automation framework built with Playwright and TypeScript.

[![Playwright Tests](https://github.com/TuranAymis/ai-assisted-playwright-qa-framework/actions/workflows/playwright.yml/badge.svg?branch=master)](https://github.com/TuranAymis/ai-assisted-playwright-qa-framework/actions/workflows/playwright.yml)
![Playwright](https://img.shields.io/badge/Playwright-E2E%20Testing-2EAD33?logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-2088FF?logo=githubactions&logoColor=white)

This project is part of a QA and AI learning roadmap. Its goal is to demonstrate a clean, maintainable, and professional end-to-end test automation framework while applying real-world QA practices.

[Read the Turkish documentation](./README.tr.md)

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model
- Playwright Custom Fixtures
- GitHub Actions
- Playwright HTML Reporter

## Target Application

The automated tests run against [SauceDemo](https://www.saucedemo.com/), a demo e-commerce application commonly used for UI automation practice.

## AI-Assisted Development

AI was used throughout this project as a learning mentor, code review assistant, and problem-solving partner.

Instead of generating the entire framework at once, the project was developed incrementally. I wrote, ran, and validated the tests myself while using AI guidance to better understand Playwright, TypeScript, and test automation architecture.

AI assistance was used for:

- Planning the project in small development stages
- Explaining Playwright and TypeScript concepts
- Reviewing code and identifying syntax or type errors
- Investigating failed tests and terminal output
- Suggesting maintainable test and Page Object structures
- Separating test data from test logic
- Refactoring repeated setup into reusable helpers and custom fixtures
- Improving GitHub Actions configuration
- Improving project documentation and GitHub presentation

All suggested changes were reviewed, implemented, and tested manually. AI was used to support learning and productivity, not to replace technical understanding or engineering responsibility.

The test framework itself does not use an AI model or external AI API during test execution.

## Key Features

- End-to-end UI test automation with Playwright
- TypeScript-based test implementation
- Page Object Model architecture
- Feature-based test organization
- Reusable authentication and checkout helpers
- Custom Playwright fixtures
- Test data separated from test logic
- Cross-browser test execution
- Playwright HTML reporting
- Continuous integration with GitHub Actions
- English and Turkish documentation

## Current Test Coverage

### Smoke Tests

- Login page loads successfully
- Username input is visible
- Password input is visible
- Login button is visible

### Authentication Tests

- Successful login
- Invalid login validation
- Logout flow

### Inventory Tests

- Inventory page visibility
- Product list validation
- Product detail validation

### Cart Tests

- Add a product to the cart
- Remove a product from the cart
- Cart page validation

### Checkout Tests

- Successful checkout flow
- Checkout form validation errors
- Checkout overview validation
- Checkout completion validation

## Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── playwright.yml
├── fixtures/
│   └── pages.ts
├── pages/
│   ├── CartPage.ts
│   ├── CheckoutCompletePage.ts
│   ├── CheckoutOverviewPage.ts
│   ├── CheckoutPage.ts
│   ├── InventoryPage.ts
│   └── LoginPage.ts
├── test-data/
│   ├── checkoutUsers.ts
│   ├── products.ts
│   └── users.ts
├── tests/
│   ├── auth/
│   ├── cart/
│   ├── checkout/
│   ├── inventory/
│   └── smoke/
├── utils/
│   ├── auth.ts
│   └── checkout.ts
├── .gitignore
├── package-lock.json
├── package.json
├── playwright.config.ts
├── README.md
├── README.tr.md
└── tsconfig.json
```

## Installation

Clone the repository:

```bash
git clone https://github.com/TuranAymis/ai-assisted-playwright-qa-framework.git
```

Open the project directory:

```bash
cd ai-assisted-playwright-qa-framework
```

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

Run authentication tests:

```bash
npm run test:auth
```

Run tests on Chromium:

```bash
npm run test:chromium
```

Run tests on Firefox:

```bash
npm run test:firefox
```

Run tests on WebKit:

```bash
npm run test:webkit
```

Run tests in headed mode:

```bash
npm run test:headed
```

Run tests in debug mode:

```bash
npm run test:debug
```

Run the TypeScript check:

```bash
npm run typecheck
```

Individual feature folders can also be executed directly with Playwright:

```bash
npx playwright test tests/auth
npx playwright test tests/inventory
npx playwright test tests/cart
npx playwright test tests/checkout
npx playwright test tests/smoke
```

## Test Reports

Playwright generates an HTML report after each test execution.

### Live Report

The latest successful report from the `master` branch is published through GitHub Pages:

[View the latest Playwright HTML report](https://turanaymis.github.io/ai-assisted-playwright-qa-framework/)

### Local Report

Run the test suite:

```bash
npm test
```

Open the generated HTML report:

```bash
npm run test:report
```

### GitHub Actions Artifacts

Each CI run uploads its Playwright HTML report as a GitHub Actions artifact.

To access a report from a specific workflow run:

1. Open the repository's **Actions** tab.
2. Select a **Playwright Tests** workflow run.
3. Open the **Artifacts** section.
4. Download the `playwright-report` artifact.

Workflow artifacts are retained for 30 days.

## Continuous Integration

The project uses GitHub Actions to run the test suite automatically.

The workflow:

- Runs on pushes to the `master` branch
- Runs on pull requests targeting the `master` branch
- Can be started manually with `workflow_dispatch`
- Installs Node.js dependencies
- Installs Playwright browsers and system dependencies
- Executes the complete Playwright test suite
- Uploads the HTML report as a workflow artifact
- Publishes the latest successful HTML report to GitHub Pages

The live GitHub Pages report is updated after successful workflow runs on the `master` branch.

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
- Page Object Model architecture
- Stable and maintainable selectors
- Test data separation
- Reusable test setup
- Custom Playwright fixtures
- Cross-browser testing
- HTML reporting
- Continuous integration
- AI-assisted debugging and test design
- Professional QA project documentation

## Future Improvements

- Add dedicated NPM scripts for every feature suite
- Expand negative and edge-case coverage
- Add API testing support
- Add accessibility testing
- Add visual regression testing
- Add test result history
- Improve CI execution with test sharding

## Author

**Turan Aymış**

Senior Software QA Engineer

[GitHub Profile](https://github.com/TuranAymis)
