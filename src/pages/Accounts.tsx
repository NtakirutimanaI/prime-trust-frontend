import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { accountsApi } from '../services/api';
import type { Account } from '../types';
import { PlusIcon, BanknotesIcon, ArrowRightOnRectangleIcon, DocumentTextIcon, CreditCardIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const accountTypes = ['Savings', 'Current', 'Fixed Deposit', 'Foreign Currency'];

const accountTypeLabels: Record<string, string> = {
  'Savings': 'accounts.savings',
  'Current': 'accounts.current',
  'Fixed Deposit': 'accounts.fixedDeposit',
  'Foreign Currency': 'accounts.foreignCurrency',
};

const quickActions = [
  { icon: ArrowRightOnRectangleIcon, label: 'Transfer', link: '/transfer', color: 'bg-blue-50 text-blue-600' },
  { icon: DocumentTextIcon, label: 'Pay Bills', link: '/bill-payments', color: 'bg-green-50 text-green-600' },
  { icon: CreditCardIcon, label: 'View Statements', link: '#', color: 'bg-purple-50 text-purple-600' },
  { icon: PlusIcon, label: 'New Account', link: '#', color: 'bg-orange-50 text-orange-600' },
];

export default function Accounts() {
  const { t } = useTranslation();
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [newAccountType, setNewAccountType] = useState('Savings');
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    accountsApi.getAccounts()
      .then((res) => setAccounts(res.data))
      .catch(() => setAccounts([]))
      .finally(() => setLoading(false));
  }, []);

  const handleCreate = async () => {
    setCreating(true);
    try {
      const res = await accountsApi.createAccount({ accountType: newAccountType });
      setAccounts((prev) => [...prev, res.data]);
      setShowCreate(false);
    } catch {
    } finally {
      setCreating(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);

  return (
    <div>
      <section className="relative min-h-[40vh] flex items-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80')"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">{t('accounts.title')}</h1>
              <p className="text-blue-200 text-lg">{t('accounts.subtitle')}</p>
            </div>
            <button
              onClick={() => setShowCreate(!showCreate)}
              className="flex items-center px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent/90 transition-colors shadow-lg cursor-pointer"
            >
              <PlusIcon className="h-4 w-4 mr-1.5" />
              {t('accounts.newAccount')}
            </button>
          </div>
          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <p className="text-sm text-blue-200 mb-1">Total Portfolio Balance</p>
            <p className="text-4xl font-bold text-white">{totalBalance.toLocaleString()} RWF</p>
          </div>
        </div>
      </section>

      {showCreate && (
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex flex-wrap gap-3 items-end">
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm text-gray-600 mb-1">{t('accounts.accountType')}</label>
                <select
                  value={newAccountType}
                  onChange={(e) => setNewAccountType(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {accountTypes.map((type) => (
                    <option key={type} value={type}>{t(accountTypeLabels[type])}</option>
                  ))}
                </select>
              </div>
              <button
                onClick={handleCreate}
                disabled={creating}
                className="px-6 py-2 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50 cursor-pointer"
              >
                {creating ? t('accounts.creating') : t('accounts.create')}
              </button>
              <button
                onClick={() => setShowCreate(false)}
                className="px-4 py-2 border border-gray-300 text-gray-600 text-sm rounded-lg hover:bg-light-gray transition-colors cursor-pointer"
              >
                {t('accounts.cancel')}
              </button>
            </div>
          </div>
        </div>
      )}

      {accounts.length > 0 ? (
        <div className="py-8 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {accounts.map((account) => (
                <Link
                  key={account.id}
                  to={`/accounts/${account.id}`}
                  className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <BanknotesIcon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="ml-3">
                          <h3 className="font-semibold text-navy">{account.accountType}</h3>
                          <p className="text-xs text-gray-500 font-mono">
                            **** {account.accountNumber.slice(-4)}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                          account.status === 'active'
                            ? 'bg-green-50 text-green-600'
                            : 'bg-gray-50 text-gray-500'
                        }`}
                      >
                        {account.status}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-navy mb-1">
                      {account.balance.toLocaleString()} RWF
                    </p>
                    <p className="text-xs text-gray-400">
                      {t('accounts.opened')} {new Date(account.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="py-16 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-sm p-12 text-center border border-gray-100">
              <BanknotesIcon className="h-16 w-16 mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg">{t('accounts.empty')}</p>
            </div>
          </div>
        </div>
      )}

      <div className="py-8 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.label}
                  to={action.link}
                  className="flex flex-col items-center p-6 bg-light-gray rounded-xl hover:shadow-md transition-shadow group"
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${action.color}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="text-sm font-medium text-navy">{action.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <section className="py-8 lg:py-12 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-accent-light mb-1">{accounts.length}</p>
              <p className="text-blue-200 text-sm">Active Accounts</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent-light mb-1">{totalBalance.toLocaleString()} RWF</p>
              <p className="text-blue-200 text-sm">Total Balance</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent-light mb-1">{accounts.filter(a => a.status === 'active').length}</p>
              <p className="text-blue-200 text-sm">Active Accounts</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent-light mb-1">24/7</p>
              <p className="text-blue-200 text-sm">Support Available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
