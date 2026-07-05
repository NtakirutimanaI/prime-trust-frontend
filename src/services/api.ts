import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authApi = {
  login: (email: string, password: string) => api.post('/auth/login', { email, password }),
  register: (data: Record<string, string>) => api.post('/auth/register', data),
  getProfile: () => api.get('/users/profile'),
};

export const accountsApi = {
  getAccounts: () => api.get('/accounts'),
  getAccount: (id: string) => api.get(`/accounts/${id}`),
  createAccount: (data: { accountType: string; currency?: string }) => api.post('/accounts', data),
};

export const transactionsApi = {
  getAccountTransactions: (accountId: string) => api.get('/transactions', { params: { accountId } }),
  deposit: (data: { accountId: string; amount: number; description?: string }) => api.post('/transactions/deposit', data),
  withdraw: (data: { accountId: string; amount: number; description?: string }) => api.post('/transactions/withdraw', data),
  transfer: (data: { fromAccountId: string; toAccountId: string; amount: number; description?: string }) => api.post('/transactions/transfer', data),
};

export const loansApi = {
  getLoans: () => api.get('/loans'),
  getLoan: (id: string) => api.get(`/loans/${id}`),
  applyForLoan: (data: { loanType: string; amount: number; interestRate: number; term: number; purpose?: string }) => api.post('/loans', data),
};

export const exchangeApi = {
  getRates: () => api.get('/exchange/rates'),
  calculate: (data: { fromCurrency: string; toCurrency: string; amount: number }) => api.post('/exchange/calculate', data),
};

export default api;
