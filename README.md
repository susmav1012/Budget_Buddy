# Budget Buddy

Budget Buddy is a web application designed to help you manage your expenses effectively. With features like budget creation, expense tracking, and summary views, you can keep a close eye on your finances and make informed decisions.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Deployed Link](#deployed-link)

## Project Overview

Budget Buddy allows users to manage their expenses through a user-friendly interface. Users can sign up and log in using Clerk authentication, create and manage budgets, track individual expenses, and view a comprehensive summary of their financial activities.

## Features

- **Authentication:** User sign-in and sign-up are handled by Clerk.
- **Dashboard:** View a summary of all individual expenses.
- **Budgets:** Create, edit, and delete budgets.
- **Expenses:** Track and list expenses. Create expense lists for specific topics within a particular budget.
- **Design:** Pages designed using HyperUI. Elements like buttons and alert dialogs are from ShadCN.
- **Styling:** Tailwind CSS is used for styling.
- **Database:** Managed using Drizzle ORM.
- **Deployment:** Deployed using Vercel CLI.

## Technologies Used

- **Frontend:** React, Tailwind CSS
- **Authentication:** Clerk
- **UI Design:** HyperUI, ShadCN
- **Database:** Drizzle ORM
- **Deployment:** Vercel CLI

## Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/budget-buddy.git
   cd budget-buddy
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your environment variables for Clerk and any other services you use.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

## Usage

- **Sign Up / Sign In:**
  Click the "Get Started" button on the landing page to sign up or sign in using Clerk authentication.

- **Dashboard:**
  View a summary of all your individual expenses.

- **Budgets:**
  Create, edit, and delete budgets.

- **Expenses:**
  Track and list expenses. Create expense lists for specific topics within a particular budget.

## Deployment

To deploy the application using Vercel CLI, follow these steps:

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy the application:**
   ```bash
   vercel
   ```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Deployed Link
Click the deploy button
[![Vercel Deployment](https://vercel.com/button)](https://buget-buddy.vercel.app/)
(or)
https://buget-buddy.vercel.app/
