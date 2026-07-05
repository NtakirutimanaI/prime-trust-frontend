import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { accountsApi, transactionsApi } from '../services/api';
import type { Account, Transaction } from '../types';
import {
  BanknotesIcon,
  ArrowTrendingUpIcon,
  ArrowsRightLeftIcon,
  ReceiptPercentIcon,
  CreditCardIcon,
  HomeModernIcon,
  ChartBarSquareIcon,
} from '@heroicons/react/24/outline';

export default function Dashboard() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accountsRes = await accountsApi.getAccounts();
        const fetchedAccounts = accountsRes.data as Account[];
        setAccounts(fetchedAccounts);
        if (fetchedAccounts.length > 0) {
          const txRes = await transactionsApi.getAccountTransactions(fetchedAccounts[0].id);
          setTransactions((txRes.data as Transaction[]).slice(0, 5));
        }
      } catch {
        setAccounts([]);
        setTransactions([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);
  const activeAccounts = accounts.filter((acc) => acc.status === 'active').length;
  const monthlySpending = transactions.filter(tx => tx.type !== 'deposit').reduce((sum, tx) => sum + tx.amount, 0);

  const quickActions = [
    { to: '/transfer', icon: ArrowsRightLeftIcon, label: 'dashboard.transfer', color: 'bg-accent' },
    { to: '/bill-payments', icon: ReceiptPercentIcon, label: 'dashboard.payBills', color: 'bg-primary' },
    { to: '/cards', icon: CreditCardIcon, label: 'dashboard.cards', color: 'bg-navy' },
    { to: '/loans', icon: HomeModernIcon, label: 'dashboard.loans', color: 'bg-accent' },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[50vh] flex items-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80')"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
              {t('dashboard.welcome')}, {user?.firstName || 'User'}
            </h1>
            <p className="text-xl text-white/80">{t('dashboard.subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="-mt-16 relative z-10 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-500">{t('dashboard.totalBalance')}</span>
                <div className="p-2 bg-blue-50 rounded-lg">
                  <BanknotesIcon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <p className="text-3xl font-bold text-navy">{totalBalance.toLocaleString()} RWF</p>
              <p className="text-xs text-green-600 mt-1">{t('dashboard.allAccounts')}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-500">{t('dashboard.monthlySpending')}</span>
                <div className="p-2 bg-red-50 rounded-lg">
                  <ArrowTrendingUpIcon className="h-5 w-5 text-red-500" />
                </div>
              </div>
              <p className="text-3xl font-bold text-navy">{monthlySpending.toLocaleString()} RWF</p>
              <p className="text-xs text-gray-500 mt-1">{t('dashboard.thisMonth')}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-500">{t('dashboard.creditScore')}</span>
                <div className="p-2 bg-green-50 rounded-lg">
                  <ChartBarSquareIcon className="h-5 w-5 text-accent" />
                </div>
              </div>
              <p className="text-3xl font-bold text-navy">750</p>
              <p className="text-xs text-green-600 mt-1">{t('dashboard.excellent')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">{t('dashboard.accountBalances')}</h2>
              <div className="grid gap-4">
                {accounts.length > 0 ? accounts.slice(0, 3).map((acc) => (
                  <div key={acc.id} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 p-5 border border-gray-100 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-navy">{acc.accountType}</p>
                      <p className="text-xs text-gray-500">**** {acc.accountNumber.slice(-4)}</p>
                    </div>
                    <p className="text-lg font-bold text-navy">{acc.balance.toLocaleString()} RWF</p>
                  </div>
                )) : (
                  <div className="bg-white rounded-lg shadow-sm p-6 text-center text-gray-400">{t('dashboard.noAccounts')}</div>
                )}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">{t('dashboard.recentTransactions')}</h2>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                {transactions.length > 0 ? (
                  <table className="w-full border-collapse">
                    <thead className="bg-light-gray">
                      <tr>
                        <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">{t('dashboard.date')}</th>
                        <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">{t('dashboard.type')}</th>
                        <th className="text-right px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">{t('dashboard.amount')}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {transactions.map((tx) => (
                        <tr key={tx.id} className="hover:bg-light-gray/50 transition-colors">
                          <td className="px-4 py-3 text-sm text-gray-600">{new Date(tx.createdAt).toLocaleDateString()}</td>
                          <td className="px-4 py-3">
                            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${tx.type === 'deposit' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{tx.type}</span>
                          </td>
                          <td className={`px-4 py-3 text-sm text-right font-semibold ${tx.type === 'deposit' ? 'text-green-600' : 'text-red-600'}`}>
                            {tx.type === 'deposit' ? '+' : '-'}{tx.amount.toLocaleString()} RWF
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className="px-4 py-8 text-center text-gray-400">{t('dashboard.noTransactions')}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-6">{t('dashboard.quickActions')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action) => (
              <Link
                key={action.to}
                to={action.to}
                className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 text-center hover:-translate-y-1"
              >
                <div className={`inline-flex p-3 rounded-xl ${action.color} bg-opacity-10 mb-4`}>
                  <action.icon className={`h-8 w-8 ${action.color === 'bg-accent' ? 'text-accent' : action.color === 'bg-primary' ? 'text-primary' : 'text-navy'}`} />
                </div>
                <h3 className="text-lg font-semibold text-navy group-hover:text-primary transition-colors">{t(action.label)}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-accent-light">{accounts.length}</p>
              <p className="text-sm text-white/70 mt-1">{t('dashboard.activeAccounts')}</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-accent-light">{transactions.length}</p>
              <p className="text-sm text-white/70 mt-1">{t('dashboard.recentTransactions')}</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-accent-light">{user?.firstName ? 1 : 0}</p>
              <p className="text-sm text-white/70 mt-1">{t('dashboard.linkedCards')}</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-accent-light">{activeAccounts}</p>
              <p className="text-sm text-white/70 mt-1">{t('dashboard.activeLoans')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
