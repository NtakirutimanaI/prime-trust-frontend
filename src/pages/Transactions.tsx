import { useState, useEffect } from 'react';
import { accountsApi, transactionsApi } from '../services/api';
import type { Account, Transaction } from '../types';
import { ArrowPathIcon, FunnelIcon, MagnifyingGlassIcon, BanknotesIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

export default function Transactions() {
  const { t } = useTranslation();
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [selectedAccountId, setSelectedAccountId] = useState('');
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    accountsApi.getAccounts()
      .then((res) => {
        const fetchedAccounts = res.data as Account[];
        setAccounts(fetchedAccounts);
        if (fetchedAccounts.length > 0) {
          setSelectedAccountId(fetchedAccounts[0].id);
        }
      })
      .catch(() => setAccounts([]))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!selectedAccountId) return;
    setLoading(true);
    transactionsApi.getAccountTransactions(selectedAccountId)
      .then((res) => setTransactions(res.data as Transaction[]))
      .catch(() => setTransactions([]))
      .finally(() => setLoading(false));
  }, [selectedAccountId]);

  const filteredTransactions = transactions.filter((tx) => {
    if (filterType && tx.type !== filterType) return false;
    if (dateFrom && new Date(tx.createdAt) < new Date(dateFrom)) return false;
    if (dateTo && new Date(tx.createdAt) > new Date(dateTo)) return false;
    if (searchQuery && !tx.reference.toLowerCase().includes(searchQuery.toLowerCase()) && !tx.description?.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const totalCredits = filteredTransactions.filter(tx => tx.type === 'deposit').reduce((sum, tx) => sum + tx.amount, 0);
  const totalDebits = filteredTransactions.filter(tx => tx.type !== 'deposit').reduce((sum, tx) => sum + tx.amount, 0);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTransactions.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[50vh] flex items-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80')"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-accent/20 rounded-lg">
                <ArrowPathIcon className="h-8 w-8 text-accent-light" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t('transactions.title')}</h1>
            <p className="text-xl text-white/80 max-w-xl">{t('transactions.subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <p className="text-sm text-gray-500 mb-1">{t('transactions.totalCredits')}</p>
              <p className="text-2xl font-bold text-green-600">+{totalCredits.toLocaleString()} RWF</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <p className="text-sm text-gray-500 mb-1">{t('transactions.totalDebits')}</p>
              <p className="text-2xl font-bold text-red-600">-{totalDebits.toLocaleString()} RWF</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <p className="text-sm text-gray-500 mb-1">{t('transactions.netChange')}</p>
              <p className={`text-2xl font-bold ${totalCredits - totalDebits >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {(totalCredits - totalDebits) >= 0 ? '+' : ''}{(totalCredits - totalDebits).toLocaleString()} RWF
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
            <div className="px-6 py-4 border-b border-gray-100 bg-light-gray/50">
              <div className="flex flex-wrap gap-3 items-center">
                <div className="relative flex-1 min-w-[200px]">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                    placeholder={t('transactions.searchPlaceholder')}
                    className="w-full border border-gray-300 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <select
                  value={selectedAccountId}
                  onChange={(e) => setSelectedAccountId(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">{t('transactions.selectAccount')}</option>
                  {accounts.map((acc) => (
                    <option key={acc.id} value={acc.id}>
                      {acc.accountType} - **** {acc.accountNumber.slice(-4)}
                    </option>
                  ))}
                </select>
                <select
                  value={filterType}
                  onChange={(e) => { setFilterType(e.target.value); setCurrentPage(1); }}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">{t('transactions.allTypes')}</option>
                  <option value="deposit">{t('transactions.deposit')}</option>
                  <option value="withdrawal">{t('transactions.withdrawal')}</option>
                  <option value="transfer">{t('transactions.transfer')}</option>
                </select>
                <input
                  type="date"
                  value={dateFrom}
                  onChange={(e) => { setDateFrom(e.target.value); setCurrentPage(1); }}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <input
                  type="date"
                  value={dateTo}
                  onChange={(e) => { setDateTo(e.target.value); setCurrentPage(1); }}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <FunnelIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="overflow-x-auto">
              {currentItems.length > 0 ? (
                <table className="w-full border-collapse">
                  <thead className="bg-light-gray">
                    <tr>
                      <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">{t('transactions.date')}</th>
                      <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">{t('transactions.reference')}</th>
                      <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">{t('transactions.type')}</th>
                      <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">{t('transactions.description')}</th>
                      <th className="text-right px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">{t('transactions.amount')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {currentItems.map((tx) => (
                      <tr key={tx.id} className="hover:bg-light-gray/50 transition-colors">
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {new Date(tx.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 font-mono">{tx.reference}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                              tx.type === 'deposit'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {tx.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{tx.description}</td>
                        <td
                          className={`px-6 py-4 text-sm text-right font-semibold ${
                            tx.type === 'deposit' ? 'text-green-600' : 'text-red-600'
                          }`}
                        >
                          {tx.type === 'deposit' ? '+' : '-'}
                          {tx.amount.toLocaleString()} RWF
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="px-6 py-12 text-center text-gray-500">
                  <BanknotesIcon className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                  <p>{!selectedAccountId ? t('transactions.selectAccountPrompt') : t('transactions.noTransactions')}</p>
                </div>
              )}
            </div>

            {totalPages > 1 && (
              <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  {t('transactions.showing')} {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredTransactions.length)} {t('transactions.of')} {filteredTransactions.length}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-light-gray disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {t('transactions.previous')}
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-1.5 text-sm rounded-lg cursor-pointer ${
                        currentPage === page
                          ? 'bg-primary text-white'
                          : 'border border-gray-300 hover:bg-light-gray'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-light-gray disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {t('transactions.next')}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
