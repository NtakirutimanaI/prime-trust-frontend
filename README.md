<p align="center">
  <img src="https://raw.githubusercontent.com/NtakirutimanaI/prime-trust-frontend/master/public/logo.png" alt="Prime Trust Finance" width="200" />
</p>

<h1 align="center">Prime Trust Finance — Frontend</h1>

<p align="center">
  Modern React banking platform with i18n support (English, French, Kinyarwanda).
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-blue" />
  <img src="https://img.shields.io/badge/TypeScript-6-orange" />
  <img src="https://img.shields.io/badge/Vite-8-purple" />
  <img src="https://img.shields.io/badge/Tailwind-4-cyan" />
  <img src="https://img.shields.io/badge/i18n-EN|FR|RW-green" />
  <img src="https://img.shields.io/badge/License-MIT-yellow" />
</p>

---

## Overview

Prime Trust Finance is a full-featured digital banking frontend built with React 19. It provides a responsive, accessible interface for retail and corporate banking with multi-language support across English, French, and Kinyarwanda.

## Tech Stack

- **Framework:** React 19 + TypeScript 6
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS 4
- **Routing:** React Router 7
- **i18n:** i18next + react-i18next
- **HTTP Client:** Axios
- **Icons:** @heroicons/react

## Features

- **35+ pages** covering all banking services
- **Multi-language** support (English, French, Kinyarwanda)
- **Responsive design** — mobile-first, fully responsive
- **Mega-menu navigation** with dropdowns, promos, and images
- **Dashboard** with account overview, transactions, and quick actions
- **Authentication** — login/register with JWT
- **Account management** — view balances, transaction history
- **Fund transfers** — between accounts and third parties
- **Bill payments** — manage payees and schedule payments
- **Loan applications** — personal, vehicle, student, and more
- **Foreign exchange** — live rates and currency conversion
- **Product pages** — Mortgages, Investments, Insurance, Cards, Savings
- **Business solutions** — Professional, Company, Diaspora, Farmer
- **Legal** — Privacy Policy, Terms of Service

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/login` / `/register` | Authentication |
| `/dashboard` | User dashboard |
| `/accounts` | Account summary & details |
| `/transfer` | Fund transfers |
| `/transactions` | Transaction history |
| `/loans` | Loan products & applications |
| `/cards` | Credit card offerings |
| `/bill-payments` | Pay bill management |
| `/mortgages` | Mortgage products |
| `/investments` | Investment products |
| `/insurance` | Insurance plans |
| `/savings` | Savings accounts |
| `/advice` | Financial advice articles |
| `/solutions/*` | Business segment pages |
| `/rates` | Interest & exchange rates |
| `/foreign-exchange` | Currency converter |
| `/about` / `/contact` / `/faq` | Company info |
| `/privacy` / `/terms` | Legal pages |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The frontend expects the backend API at `http://localhost:3001/api`. Update `src/services/api.ts` to change the backend URL.

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── Navbar.tsx        # Mega-menu navigation
│   ├── Footer.tsx        # Site footer
│   ├── Layout.tsx        # Page layout wrapper
│   ├── DashboardLayout.tsx  # Dashboard layout
│   ├── FAQ.tsx           # FAQ accordion
│   └── CurrencyCalculator.tsx
├── pages/          # 35+ page components
├── locales/        # i18n translation files (en, fr, rw)
├── context/        # Auth context & provider
├── services/       # API client (Axios)
├── types/          # TypeScript type definitions
├── i18n.ts         # i18next configuration
└── App.tsx         # Route definitions
```

## License

[MIT](LICENSE)
