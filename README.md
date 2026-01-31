# Singlish to Sinhala Translator - Automated Testing

This project contains automated end-to-end tests for the [Swift Translator](https://www.swifttranslator.com/) web application, specifically testing Singlish to Sinhala translation functionality using Playwright.

## 📋 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Coverage](#test-coverage)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Test Reports](#test-reports)

## 🎯 Overview

This automated testing suite validates the Singlish to Sinhala translation functionality with comprehensive test cases covering:
- **Positive functional tests**: Valid Singlish inputs
- **Negative functional tests**: Invalid or edge-case inputs
- **UI tests**: Real-time translation updates

The tests use Playwright for browser automation to ensure the translation service works correctly across different scenarios.

## 📦 Prerequisites

Before setting up this project, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)

## 🚀 Installation

1. Clone or download this repository
2. Open a terminal in the project folder
3. Install dependencies:
   ```bash
   npm install
   ```
4. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## ▶️ Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in headed mode (see browser)
```bash
npx playwright test --headed
```

### Run specific test file
```bash
npx playwright test test/all-tests.spec.js
```

### Run tests in UI mode (interactive)
```bash
npx playwright test --ui
```

### Generate HTML report
```bash
npx playwright show-report
```

## ✅ Test Coverage

| Test Type | Count | Description |
|-----------|-------|-------------|
| **Positive Functional** | 24 | Valid Singlish sentences with expected successful translations |
| **Negative Functional** | 10 | Invalid inputs, special characters, edge cases |
| **UI Real-Time** | 1 | Verifies real-time translation updates |
| **Total** | **35** | Comprehensive test suite |

### Test Categories

#### Positive Functional Tests (Pos_Fun_XXXX)
- Standard Singlish sentences
- Complex sentences with mixed content
- Sentences with numbers and special formatting
- Common phrases and expressions

#### Negative Functional Tests (Neg_Fun_XXXX)
- Malformed input with excessive punctuation
- Special characters and symbols
- Emojis and hashtags
- English text (untranslatable content)
- Whitespace and formatting edge cases

#### UI Tests (Pos_UI_XXXX)
- Real-time translation behavior verification

## 📁 Project Structure

```
IT23296732-playwright/
├── test/
│   └── all-tests.spec.js          # All test cases
├── test-results/                  # Test execution results
│   └── test-all-tests-Neg-Fun-*/  # Individual test error contexts
├── playwright.config.js           # Playwright configuration
├── package.json                   # Project dependencies and scripts
└── README.md                      # This file
```

## ⚙️ Configuration

The test suite is configured via [playwright.config.js](playwright.config.js):

- **Timeout**: 30 seconds per test
- **Browser mode**: Non-headless (visible browser)
- **Viewport**: 1280x720
- **Action timeout**: 15 seconds
- **HTTPS errors**: Ignored

To modify these settings, edit the configuration file.

## 📊 Test Reports

Test results are stored in the `test-results/` folder:
- Each failed test generates an `error-context.md` file
- Screenshots and traces can be enabled in the configuration
- HTML reports can be generated with `npx playwright show-report`

## 🔧 Troubleshooting

### Tests are failing
- Ensure you have a stable internet connection
- Verify the target website (https://www.swifttranslator.com/) is accessible
- Check that Playwright browsers are installed: `npx playwright install`

### Slow test execution
- The tests include 2-second waits for translation processing
- This is intentional to ensure translations complete before verification

## 📝 License

ISC

## 👤 Author

IT23296732

---

**Note**: This project is for educational/testing purposes. Ensure you have permission to automate testing on the target website.
