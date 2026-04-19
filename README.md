## Webook Automation Testing Project
This repository contains automated end-to-end (E2E) tests for the Webook platform using Cypress. The primary goal is to ensure a seamless and bug-free user experience for core features.

## Test Cases Covered
User Authentication: Automated login flow verification using secure credentials.

UI Validation: Ensuring that critical elements of the Webook landing page and login portal are rendering correctly.

## Tech Stack
**Cypress:** The core framework for writing and executing E2E tests.

**JavaScript:** The programming language used for scripting.

**Environment Variables:** Implemented to manage sensitive data (email/password) securely.

## Setup & Installation
Clone the repository:
git clone https://github.com/your-username/webook-automation.git

## Install dependencies
npm install
## Environment Setup (Security):
This project uses a cypress.env.json file to store credentials. For security reasons, this file is not included in the repository. To run tests, create a cypress.env.json file in the root directory:
**JSON**
{
  "email": "your_email@example.com",
  "password": "your_password"
}
## Run the tests:
npx cypress open
