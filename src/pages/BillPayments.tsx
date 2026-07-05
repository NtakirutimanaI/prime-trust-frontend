import { useState, type FormEvent } from 'react';
import { ReceiptPercentIcon, PlusCircleIcon, ClockIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const categories = [
  {
    name: 'Utilities',
    providers: ['RWASCO', 'REG', 'RURA'],
    icon: ReceiptPercentIcon,
  },
  {
    name: 'School Fees',
    providers: ['University of Rwanda', 'Rwanda Polytechnic', 'Private Schools'],
    icon: ReceiptPercentIcon,
  },
  {
    name: 'Government',
    providers: ['RRA Taxes', 'Rwanda Social Security', 'Rwanda Immigration'],
    icon: ReceiptPercentIcon,
  },
  {
    name: 'Insurance',
    providers: ['RADIANT', 'SANLAM', 'BRITAM', 'SONARWA'],
    icon: ReceiptPercentIcon,
  },
  {
    name: 'Telecom',
    providers: ['MTN Rwanda', 'Airtel Rwanda'],
    icon: ReceiptPercentIcon,
  },
];

const categoryKeys: Record<string, string> = {
  'Utilities': 'billPayments.utilities',
  'School Fees': 'billPayments.schoolFees',
  'Government': 'billPayments.government',
  'Insurance': 'billPayments.insurance',
  'Telecom': 'billPayments.telecom',
};

const scheduledPayments = [
  { id: 1, payee: 'REG', amount: 35000, nextDate: '2026-08-05', frequency: 'Monthly' },
  { id: 2, payee: 'MTN Rwanda', amount: 10000, nextDate: '2026-08-15', frequency: 'Monthly' },
];

const paymentHistory = [
  { id: 1, payee: 'REG', amount: 35000, date: '2026-07-05', status: 'completed' },
  { id: 2, payee: 'RRA Taxes', amount: 120000, date: '2026-06-30', status: 'completed' },
  { id: 3, payee: 'RADIANT', amount: 25000, date: '2026-06-28', status: 'completed' },
];

export default function BillPayments() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('');
  const [accountRef, setAccountRef] = useState('');
  const [amount, setAmount] = useState('');
  const [success, setSuccess] = useState('');

  const category = categories.find((c) => c.name === selectedCategory);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSuccess(t('billPayments.success', { amount, provider: selectedProvider }));
    setSelectedCategory('');
    setSelectedProvider('');
    setAccountRef('');
    setAmount('');
  };

  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80')"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-accent/20 rounded-full">
              <ReceiptPercentIcon className="h-10 w-10 text-accent-light" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t('billPayments.title')}</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">{t('billPayments.subtitle')}</p>
        </div>
      </section>

      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-2">{t('billPayments.categories')}</h2>
            <p className="text-gray-600">{t('billPayments.categoriesSubtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => { setSelectedCategory(cat.name); setSelectedProvider(''); }}
                className={`p-6 rounded-lg text-center transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat.name
                    ? 'bg-navy text-white shadow-xl scale-105'
                    : 'bg-white text-navy shadow-sm hover:shadow-xl border border-gray-100 hover:scale-[1.02]'
                }`}
              >
                <cat.icon className="h-10 w-10 mx-auto mb-3"/>
                <span className="text-sm font-semibold">{t(categoryKeys[cat.name])}</span>
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {selectedCategory && (
                <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="px-6 py-5 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <PlusCircleIcon className="h-6 w-6 text-accent" />
                      <h3 className="text-xl font-semibold text-navy">
                        {t('billPayments.payTitle', { category: t(categoryKeys[selectedCategory]) })}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    {success && (
                      <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-lg mb-6">{success}</div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('billPayments.provider')}</label>
                        <select
                          value={selectedProvider}
                          onChange={(e) => setSelectedProvider(e.target.value)}
                          required
                          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">{t('billPayments.selectProvider')}</option>
                          {category?.providers.map((p) => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                      </div>
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('billPayments.accountRef')}</label>
                          <input
                            type="text"
                            value={accountRef}
                            onChange={(e) => setAccountRef(e.target.value)}
                            placeholder={t('billPayments.accountRefPlaceholder')}
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('billPayments.amount')}</label>
                          <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder={t('billPayments.amountPlaceholder')}
                            min="0"
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full px-4 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-colors cursor-pointer text-base"
                      >
                        {t('billPayments.payNow')}
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-navy flex items-center gap-2">
                    <ClockIcon className="h-5 w-5 text-accent" />
                    {t('billPayments.scheduledPayments')}
                  </h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {scheduledPayments.map((sp) => (
                    <div key={sp.id} className="px-6 py-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-navy text-sm">{sp.payee}</span>
                        <span className="text-sm font-semibold text-accent">{sp.amount.toLocaleString()} RWF</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <CalendarDaysIcon className="h-3.5 w-3.5" />
                        <span>{t('billPayments.nextPayment')}: {sp.nextDate}</span>
                        <span className="ml-auto">{sp.frequency}</span>
                      </div>
                    </div>
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
              <h2 className="text-2xl font-bold text-navy">{t('billPayments.paymentHistory')}</h2>
              <p className="text-gray-500 text-sm">{t('billPayments.historySubtitle')}</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-light-gray">
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">{t('billPayments.payee')}</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">{t('billPayments.amount')}</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">{t('billPayments.date')}</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">{t('billPayments.status')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {paymentHistory.map((ph) => (
                  <tr key={ph.id} className="hover:bg-light-gray/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-navy font-medium">{ph.payee}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{ph.amount.toLocaleString()} RWF</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{ph.date}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">{ph.status}</span>
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
