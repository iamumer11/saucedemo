# Saucedemo End-to-End Purchase Flow Automation
This repository contains an end-to-end automated test suite for the SauceDemo website using Cypress. The tests cover the entire purchasing journey from login to order confirmation. The goal of this automation suite is to ensure that all user interactions and order processes on SauceDemo are functioning correctly.

## Table of Contents
### Setup Instructions
### How to Run the Tests
### To Do

## Setup Instructions
To get started with this project, follow these steps:

Clone the repository:
git clone https://github.com/iamumer11/saucedemo.git
cd saucedemo

Install dependencies:
npm install

Set up test data:
You need to provide your SauceDemo test account credentials and product information in the cypress/fixtures/testData.json file.

Run Cypress tests:
npx cypress open
Select the test file you want to run (e.g., cypress/integration/purchaseFlow.spec.js).


## How to Run the Tests
Once the setup is complete, follow these steps to run the automated tests:

Open Cypress:
Execute npx cypress open in your terminal.

Navigate to the tests:
In the Cypress directory, navigate to the purchaseFlow.spec.js

Run the tests:
Go to terminal and write npx cypress run

View test results in the terminal

## To Do
If given more time, the following areas would be automated or enhanced:

Enhanced error handling and reporting:
Implement detailed error logging for failed assertions.

Cross-browser testing:
Test on additional browsers like Firefox and Edge to ensure compatibility.

Visual testing:
Integrate visual regression testing to monitor UI changes over time.
