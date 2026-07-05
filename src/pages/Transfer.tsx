import { useState, useEffect, type FormEvent } from 'react';
import { accountsApi, transactionsApi } from '../services/api';
import type { Account } from '../types';
import { ArrowsRightLeftIcon, BanknotesIcon, UserGroupIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const quickTemplates = [
  { labelKey: 'transfer.quickTemplate1', amount: 50000 },
  { labelKey: 'transfer.quickTemplate2', amount: 100000 },
  { labelKey: 'transfer.quickTemplate3', amount: 250000 },
];

export default function Transfer() {
  const { t } = useTranslation();
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [fromAccountId, setFromAccountId] = useState('');
  const [toAccountId, setToAccountId] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    accountsApi.getAccounts()
      .then((res) => setAccounts(res.data))
      .catch(() => setAccounts([]));
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!fromAccountId || !toAccountId || !amount) {
      setError(t('transfer.validationError'));
      return;
    }

    setLoading(true);
    try {
      await transactionsApi.transfer({
        fromAccountId,
        toAccountId,
        amount: parseFloat(amount),
        description: description || undefined,
      });
      setSuccess(t('transfer.success'));
      setToAccountId('');
      setAmount('');
      setDescription('');
    } catch {
      setError(t('transfer.error'));
    } finally {
      setLoading(false);
    }
  };

  const recentTransfers = [
    { id: 1, to: 'Savings Account', amount: 50000, date: '2026-06-28', status: 'completed' },
    { id: 2, to: 'John Doe', amount: 25000, date: '2026-06-25', status: 'completed' },
    { id: 3, to: 'Utility Bill', amount: 15000, date: '2026-06-20', status: 'completed' },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[50vh] flex items-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80')"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-accent/20 rounded-lg">
                <ArrowsRightLeftIcon className="h-8 w-8 text-accent-light" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t('transfer.title')}</h1>
            <p className="text-xl text-white/80 max-w-xl">{t('transfer.subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-100">
                  <h2 className="text-xl font-semibold text-navy flex items-center gap-2">
                    <BanknotesIcon className="h-6 w-6 text-accent" />
                    {t('transfer.makeTransfer')}
                  </h2>
                </div>
                <div className="p-6">
                  {success && (
                    <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-lg mb-6">{success}</div>
                  )}
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg mb-6">{error}</div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('transfer.fromAccount')}</label>
                        <select
                          value={fromAccountId}
                          onChange={(e) => setFromAccountId(e.target.value)}
                          required
                          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">{t('transfer.selectAccount')}</option>
                          {accounts.map((acc) => (
                            <option key={acc.id} value={acc.id}>
                              {acc.accountType} - **** {acc.accountNumber.slice(-4)} ({acc.balance.toLocaleString()} RWF)
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('transfer.toAccount')}</label>
                        <select
                          value={toAccountId}
                          onChange={(e) => setToAccountId(e.target.value)}
                          required
                          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">{t('transfer.selectDestination')}</option>
                          {accounts
                            .filter((acc) => acc.id !== fromAccountId)
                            .map((acc) => (
                              <option key={acc.id} value={acc.id}>
                                {acc.accountType} - **** {acc.accountNumber.slice(-4)}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('transfer.amount')}</label>
                        <input
                          type="number"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          placeholder={t('transfer.amountPlaceholder')}
                          min="0"
                          step="0.01"
                          required
                          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('transfer.description')}</label>
                        <input
                          type="text"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          placeholder={t('transfer.descriptionPlaceholder')}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center bg-accent text-white py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors disabled:opacity-50 cursor-pointer text-base"
                    >
                      <ArrowsRightLeftIcon className="h-5 w-5 mr-2" />
                      {loading ? t('transfer.processing') : t('transfer.transfer')}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-navy flex items-center gap-2">
                    <DocumentTextIcon className="h-5 w-5 text-accent" />
                    {t('transfer.quickTemplates')}
                  </h3>
                </div>
                <div className="p-4 space-y-2">
                  {quickTemplates.map((tmpl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setAmount(tmpl.amount.toString())}
                      className="w-full text-left px-4 py-3 rounded-lg border border-gray-100 hover:border-accent hover:bg-green-50 transition-all cursor-pointer"
                    >
                      <span className="text-sm text-gray-600">{t(tmpl.labelKey)}</span>
                      <span className="block text-navy font-semibold">{tmpl.amount.toLocaleString()} RWF</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-navy">{t('transfer.recentTransfers')}</h2>
              <p className="text-gray-500 text-sm">{t('transfer.recentSubtitle')}</p>
            </div>
            <UserGroupIcon className="h-8 w-8 text-accent" />
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-light-gray">
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">{t('transfer.destination')}</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">{t('transfer.amount')}</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">{t('transfer.date')}</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">{t('transfer.status')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentTransfers.map((tx) => (
                  <tr key={tx.id} className="hover:bg-light-gray/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-navy font-medium">{tx.to}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{tx.amount.toLocaleString()} RWF</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{tx.date}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
