import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { accountsApi, transactionsApi } from '../services/api';
import type { Account, Transaction } from '../types';
import { ArrowLeftIcon, BanknotesIcon, FunnelIcon, CalendarDaysIcon, ArrowTrendingUpIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

export default function AccountDetail() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const [account, setAccount] = useState<Account | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      try {
        const [accountRes, txRes] = await Promise.all([
          accountsApi.getAccount(id),
          transactionsApi.getAccountTransactions(id),
        ]);
        setAccount(accountRes.data);
        setTransactions(txRes.data);
      } catch {
        setAccount(null);
        setTransactions([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const filteredTransactions = transactions.filter((tx) => {
    if (filterType && tx.type !== filterType) return false;
    if (dateFrom && new Date(tx.createdAt) < new Date(dateFrom)) return false;
    if (dateTo && new Date(tx.createdAt) > new Date(dateTo)) return false;
    return true;
  });

  const totalIncome = transactions
    .filter((tx) => tx.type === 'deposit')
    .reduce((sum, tx) => sum + tx.amount, 0);

  const totalExpenses = transactions
    .filter((tx) => tx.type === 'withdrawal' || tx.type === 'transfer')
    .reduce((sum, tx) => sum + tx.amount, 0);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!account) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">{t('accountDetail.notFound')}</p>
        <Link to="/accounts" className="text-primary hover:text-accent mt-2 inline-block">{t('accountDetail.backToAccounts')}</Link>
      </div>
    );
  }

  return (
    <div>
      <section className="relative min-h-[35vh] flex items-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80')"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            to="/accounts"
            className="inline-flex items-center text-sm text-blue-200 hover:text-white transition-colors mb-4"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-1.5" />
            {t('accountDetail.back')}
          </Link>
          <div className="flex items-start justify-between">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-5">
                <BanknotesIcon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-white">{account.accountType} {t('accountDetail.account')}</h1>
                <p className="text-blue-200 font-mono mt-1">
                  **** {account.accountNumber.slice(-4)}
                </p>
                <p className="text-blue-300 text-xs mt-1">
                  {t('accountDetail.opened')} {new Date(account.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <span
              className={`px-3 py-1 text-xs font-medium rounded-full ${
                account.status === 'active'
                  ? 'bg-green-500/20 text-green-300'
                  : 'bg-gray-500/20 text-gray-300'
              }`}
            >
              {account.status}
            </span>
          </div>
          <p className="text-4xl lg:text-5xl font-bold text-white mt-6">
            {account.balance.toLocaleString()} RWF
          </p>
        </div>
      </section>

      <div className="py-6 bg-light-gray border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center text-accent mb-1">
                <ArrowTrendingUpIcon className="h-5 w-5 mr-2" />
                <span className="text-xs text-gray-500">Income This Month</span>
              </div>
              <p className="text-xl font-bold text-navy">+{totalIncome.toLocaleString()} RWF</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center text-red-500 mb-1">
                <CurrencyDollarIcon className="h-5 w-5 mr-2" />
                <span className="text-xs text-gray-500">Expenses This Month</span>
              </div>
              <p className="text-xl font-bold text-navy">-{totalExpenses.toLocaleString()} RWF</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center text-primary mb-1">
                <ArrowTrendingUpIcon className="h-5 w-5 mr-2" />
                <span className="text-xs text-gray-500">Total Transactions</span>
              </div>
              <p className="text-xl font-bold text-navy">{transactions.length}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center text-purple-500 mb-1">
                <BanknotesIcon className="h-5 w-5 mr-2" />
                <span className="text-xs text-gray-500">Account Age</span>
              </div>
              <p className="text-xl font-bold text-navy">
                {Math.floor((Date.now() - new Date(account.createdAt).getTime()) / (1000 * 60 * 60 * 24 * 30))} months
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-navy">{t('accountDetail.transactionHistory')}</h2>
            </div>

            <div className="px-6 py-4 border-b border-gray-100 bg-light-gray/50">
              <div className="flex flex-wrap gap-3 items-center">
                <FunnelIcon className="h-4 w-4 text-gray-400" />
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="border border-gray-300 px-3 py-1.5 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">{t('accountDetail.allTypes')}</option>
                  <option value="deposit">{t('accountDetail.deposits')}</option>
                  <option value="withdrawal">{t('accountDetail.withdrawals')}</option>
                  <option value="transfer">{t('accountDetail.transfers')}</option>
                </select>
                <div className="flex items-center">
                  <CalendarDaysIcon className="h-4 w-4 text-gray-400 mr-1" />
                  <input
                    type="date"
                    value={dateFrom}
                    onChange={(e) => setDateFrom(e.target.value)}
                    className="border border-gray-300 px-3 py-1.5 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder={t('accountDetail.from')}
                  />
                </div>
                <span className="text-gray-300">-</span>
                <input
                  type="date"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                  className="border border-gray-300 px-3 py-1.5 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder={t('accountDetail.to')}
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              {filteredTransactions.length > 0 ? (
                <table className="w-full border-collapse bg-white">
                  <thead>
                    <tr className="bg-light-gray">
                      <th className="text-left px-6 py-4 font-medium text-gray-600 text-sm">{t('accountDetail.date')}</th>
                      <th className="text-left px-6 py-4 font-medium text-gray-600 text-sm">{t('accountDetail.reference')}</th>
                      <th className="text-left px-6 py-4 font-medium text-gray-600 text-sm">{t('accountDetail.type')}</th>
                      <th className="text-left px-6 py-4 font-medium text-gray-600 text-sm">{t('accountDetail.description')}</th>
                      <th className="text-right px-6 py-4 font-medium text-gray-600 text-sm">{t('accountDetail.amount')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredTransactions.map((tx) => (
                      <tr key={tx.id} className="hover:bg-light-gray/50 transition-colors">
                        <td className="px-6 py-4 text-gray-600 text-sm">
                          {new Date(tx.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-gray-800 font-mono text-xs">
                          {tx.reference}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-block px-2.5 py-1 text-xs font-medium rounded-full ${
                              tx.type === 'deposit'
                                ? 'bg-green-50 text-green-600'
                                : tx.type === 'transfer'
                                ? 'bg-blue-50 text-blue-600'
                                : 'bg-red-50 text-red-600'
                            }`}
                          >
                            {tx.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-600 text-sm">{tx.description}</td>
                        <td
                          className={`px-6 py-4 text-right font-medium ${
                            tx.type === 'deposit' ? 'text-green-600' : 'text-red-600'
                          }`}
                        >
                          {tx.type === 'deposit' ? '+' : '-'}
                          {tx.amount.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="px-6 py-12 text-center text-gray-500">
                  {t('accountDetail.noTransactions')}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
