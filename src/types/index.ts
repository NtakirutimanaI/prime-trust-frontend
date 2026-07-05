export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Account {
  id: string;
  accountNumber: string;
  accountType: string;
  balance: number;
  currency: string;
  status: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Transaction {
  id: string;
  reference: string;
  type: string;
  amount: number;
  description: string;
  accountId: string;
  relatedAccountId: string | null;
  createdAt: string;
}

export interface Loan {
  id: string;
  loanType: string;
  amount: number;
  interestRate: number;
  term: number;
  status: string;
  purpose: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface ExchangeRate {
  id: string;
  fromCurrency: string;
  toCurrency: string;
  buyRate: number;
  sellRate: number;
  updatedAt: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}
