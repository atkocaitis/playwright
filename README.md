# Playwright Test Example for Airalo

Welcome to the UI test example repository for Airalo! This repository demonstrates how to set up and run automated tests using Playwright.


## Introduction

This repository provides an example of UI testing for Airalo using Playwright. The tests are designed to be easy to manage and efficient to run.

## Installation

Before you can run the tests, you need to install the required dependencies. Use the following command:

```bash
npm install
```
## Running Tests

To execute the tests, simply run:

```bash
npx playwright test
```

## Features

* Data-Driven Testing: The tests utilize a JSON data object, making it easy to add, remove, or modify test cases.
* Parallel Execution: All tests run in parallel, significantly speeding up the test execution time.
* Cookie Management: The tests set a currency cookie before execution to ensure consistent results, avoiding flakiness due to varying locations and currencies.
* Stable Element Selection: All elements are located using data-testid attributes, ensuring that tests remain stable even if the DOM structure changes.

## Noted issues

* Performing a search on the main page for a specific country results in multiple 404 responses, which should not occur.