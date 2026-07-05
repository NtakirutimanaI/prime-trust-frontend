import { useState, useEffect, type FormEvent } from 'react';
import { loansApi } from '../services/api';
import type { Loan } from '../types';
import { CurrencyDollarIcon, PlusIcon, AcademicCapIcon, TruckIcon, HomeModernIcon, UserGroupIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const loanTypes = ['Personal Loan', 'Business Loan', 'Emergency Loan'];

const loanTypeKeys: Record<string, string> = {
  'Personal Loan': 'loans.personalLoan',
  'Business Loan': 'loans.businessLoan',
  'Emergency Loan': 'loans.emergencyLoan',
};

const loanProducts = [
  {
    key: 'personalLoan',
    i18nKey: 'loans.personalLoan',
    icon: UserGroupIcon,
    desc: 'Flexible financing for your personal needs with competitive rates and convenient repayment terms.',
    rate: 'From 9% APR',
    term: 'Up to 60 months',
    amount: 'Up to RWF 50M',
  },
  {
    key: 'vehicleLoan',
    i18nKey: 'nav.loansDropdown.vehicleLoan',
    icon: TruckIcon,
    desc: 'Get behind the wheel with affordable auto financing for new and used vehicles.',
    rate: 'From 7.5% APR',
    term: 'Up to 72 months',
    amount: 'Up to RWF 30M',
  },
  {
    key: 'homeEquityLOC',
    i18nKey: 'nav.loansDropdown.homeEquityLOC',
    icon: HomeModernIcon,
    desc: 'Access the equity in your home with a flexible line of credit for major expenses.',
    rate: 'From 6.5% APR',
    term: 'Revolving credit',
    amount: 'Up to 80% of home value',
  },
  {
    key: 'studentLOC',
    i18nKey: 'nav.loansDropdown.studentLOC',
    icon: AcademicCapIcon,
    desc: 'Invest in your education with a student line of credit designed for your future.',
    rate: 'From 5.5% APR',
    term: 'Up to 120 months',
    amount: 'Up to RWF 15M',
  },
];

export default function Loans() {
  const { t } = useTranslation();
  const [loans, setLoans] = useState<Loan[]>([]);
  const [loading, setLoading] = useState(true);
  const [showApply, setShowApply] = useState(false);
  const [formData, setFormData] = useState({
    loanType: 'Personal Loan',
    amount: '',
    purpose: '',
    term: '12',
    interestRate: '10',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    loansApi.getLoans()
      .then((res) => setLoans(res.data as Loan[]))
      .catch(() => setLoans([]))
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleApply = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      const res = await loansApi.applyForLoan({
        loanType: formData.loanType,
        amount: parseFloat(formData.amount),
        purpose: formData.purpose || undefined,
        term: parseInt(formData.term),
        interestRate: parseFloat(formData.interestRate),
      });
      setLoans((prev) => [res.data as Loan, ...prev]);
      setShowApply(false);
      setFormData({ loanType: 'Personal Loan', amount: '', purpose: '', term: '12', interestRate: '10' });
    } catch {
      setError(t('loans.error'));
    } finally {
      setSubmitting(false);
    }
  };

  const statusStyles: Record<string, string> = {
    pending: 'bg-yellow-50 text-yellow-700',
    approved: 'bg-green-50 text-green-700',
    rejected: 'bg-red-50 text-red-700',
    active: 'bg-blue-50 text-blue-700',
    completed: 'bg-gray-50 text-gray-700',
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80')"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t('loans.title')}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">{t('loans.subtitle')}</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-3">Our Loan Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Tailored lending solutions designed to meet your unique financial needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {loanProducts.map((product) => {
              const Icon = product.icon;
              return (
                <div key={product.key} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                  <div className="p-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-2">{t(product.i18nKey)}</h3>
                    <p className="text-sm text-gray-600 mb-4">{product.desc}</p>
                    <div className="space-y-2 mb-6 border-t border-gray-100 pt-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Interest Rate</span>
                        <span className="font-semibold text-accent">{product.rate}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Term</span>
                        <span className="font-semibold text-navy">{product.term}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Max Amount</span>
                        <span className="font-semibold text-navy">{product.amount}</span>
                      </div>
                    </div>
                    <button className="w-full px-4 py-2.5 border border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-white transition-colors cursor-pointer">
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-3">Eligibility Criteria</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Simple requirements to qualify for our loan products</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: 'Valid ID', desc: 'Government-issued national ID or passport' },
              { title: 'Proof of Income', desc: 'Recent pay slips or bank statements (last 3 months)' },
              { title: 'Age Requirement', desc: 'Must be between 18 and 65 years old' },
              { title: 'Credit History', desc: 'Good credit standing with no active defaults' },
              { title: 'Residency', desc: 'Must be a resident or citizen of Rwanda' },
              { title: 'Bank Account', desc: 'Active account with Prime Trust Finance' },
            ].map((item) => (
              <div key={item.title} className="flex items-start p-4 bg-light-gray rounded-lg">
                <CheckCircleIcon className="h-6 w-6 text-accent shrink-0 mt-0.5 mr-3" />
                <div>
                  <h4 className="font-semibold text-navy">{item.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-accent-light mb-2">50M+</p>
              <p className="text-blue-200">Loans Disbursed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent-light mb-2">98%</p>
              <p className="text-blue-200">Approval Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent-light mb-2">24hrs</p>
              <p className="text-blue-200">Average Approval Time</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Apply?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">Get the funds you need with a simple online application. Quick approval and fast disbursement.</p>
          <button
            onClick={() => setShowApply(!showApply)}
            className="inline-flex items-center px-8 py-4 bg-white text-accent font-bold rounded-lg hover:bg-light-gray transition-colors shadow-lg text-lg cursor-pointer"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            {t('loans.applyButton')}
          </button>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-navy">My Loan Applications</h2>
              <p className="text-gray-600 text-sm mt-1">Track and manage your loan applications</p>
            </div>
          </div>

          {showApply && (
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 mb-8">
              <h3 className="font-semibold text-navy mb-4">{t('loans.applyTitle')}</h3>
              {error && (
                <div className="bg-red-50 text-red-600 text-sm px-4 py-2 mb-4 rounded-lg">
                  {error}
                </div>
              )}
              <form onSubmit={handleApply} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('loans.loanType')}</label>
                    <select
                      value={formData.loanType}
                      onChange={handleChange('loanType')}
                      className="w-full border border-gray-300 px-3 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      {loanTypes.map((type) => (
                        <option key={type} value={type}>{t(loanTypeKeys[type])}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('loans.amount')}</label>
                    <input
                      type="number"
                      value={formData.amount}
                      onChange={handleChange('amount')}
                      placeholder={t('loans.amountPlaceholder')}
                      required
                      min="0"
                      className="w-full border border-gray-300 px-3 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('loans.interestRate')}</label>
                    <input
                      type="number"
                      value={formData.interestRate}
                      onChange={handleChange('interestRate')}
                      placeholder={t('loans.interestPlaceholder')}
                      required
                      min="0"
                      step="0.1"
                      className="w-full border border-gray-300 px-3 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('loans.term')}</label>
                    <select
                      value={formData.term}
                      onChange={handleChange('term')}
                      className="w-full border border-gray-300 px-3 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      {[6, 12, 18, 24, 36, 48, 60].map((m) => (
                        <option key={m} value={m}>{t('loans.termOption', { months: m })}</option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('loans.purpose')}</label>
                    <input
                      type="text"
                      value={formData.purpose}
                      onChange={handleChange('purpose')}
                      placeholder={t('loans.purposePlaceholder')}
                      required
                      className="w-full border border-gray-300 px-3 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-6 py-2 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    {submitting ? t('loans.submitting') : t('loans.submit')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowApply(false)}
                    className="px-4 py-2 border border-gray-300 text-gray-600 text-sm rounded-lg hover:bg-light-gray transition-colors cursor-pointer"
                  >
                    {t('loans.cancel')}
                  </button>
                </div>
              </form>
            </div>
          )}

          {loans.length > 0 ? (
            <div className="space-y-4">
              {loans.map((loan) => (
                <div
                  key={loan.id}
                  className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <CurrencyDollarIcon className="h-8 w-8 text-primary mr-3" />
                      <div>
                        <h3 className="font-semibold text-navy">{loan.loanType}</h3>
                        <p className="text-xs text-gray-500">{loan.purpose}</p>
                      </div>
                    </div>
                    <span
                      className={`px-2 py-0.5 text-xs font-medium rounded ${
                        statusStyles[loan.status] || 'bg-gray-50 text-gray-600'
                      }`}
                    >
                      {t('loans.' + loan.status)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm flex-wrap gap-2">
                    <div>
                      <p className="text-gray-500">{t('loans.amountLabel')}</p>
                      <p className="font-semibold text-navy">
                        {loan.amount.toLocaleString()} RWF
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500">{t('loans.termLabel')}</p>
                      <p className="font-semibold text-navy">{loan.term} months</p>
                    </div>
                    {loan.interestRate > 0 && (
                      <div className="text-right">
                        <p className="text-gray-500">{t('loans.interestLabel')}</p>
                        <p className="font-semibold text-navy">{loan.interestRate}%</p>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    {t('loans.applied')} {new Date(loan.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center border border-gray-100">
              <CurrencyDollarIcon className="h-12 w-12 mx-auto text-gray-300 mb-3" />
              <p className="text-gray-500">{t('loans.empty')}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
