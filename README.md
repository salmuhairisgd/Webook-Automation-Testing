## Webook Automation Testing Project
This repository contains automated end-to-end (E2E) tests for the Webook platform using Cypress. The primary goal is to ensure a seamless and bug-free user experience for core features.

## Test Cases Covered

**End-to-End Purchase Flow:**
1- Successful Login: Verification of access using secure credentials.

2- End-to-End Purchase Flow

3- Event Selection: Navigating through available events and selecting a specific ticket.

4- Cart/Checkout Process: Simulating the steps of adding a ticket to the cart and proceeding to the payment summary.

5- UI & Navigation Validation

6- Element Visibility: Ensuring the Webook logo, search bar, and navigation menus are fully functional.

7- Search Functionality: Verifying that users can find specific events using the search tool.


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
