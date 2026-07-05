import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BanknotesIcon, ChartBarSquareIcon, ShieldCheckIcon, ClockIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

export default function Savings() {
  const { t } = useTranslation();

  const savingsProducts = [
    {
      icon: BanknotesIcon,
      title: t('savings.simple.title'),
      interestRate: t('savings.simple.rate'),
      features: [
        t('savings.simple.features.0'),
        t('savings.simple.features.1'),
        t('savings.simple.features.2'),
        t('savings.simple.features.3'),
        t('savings.simple.features.4'),
      ],
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&q=80',
    },
    {
      icon: BanknotesIcon,
      title: t('savings.auto.title'),
      interestRate: t('savings.auto.rate'),
      features: [
        t('savings.auto.features.0'),
        t('savings.auto.features.1'),
        t('savings.auto.features.2'),
        t('savings.auto.features.3'),
        t('savings.auto.features.4'),
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80',
    },
    {
      icon: BanknotesIcon,
      title: t('savings.fixed.title'),
      interestRate: t('savings.fixed.rate'),
      features: [
        t('savings.fixed.features.0'),
        t('savings.fixed.features.1'),
        t('savings.fixed.features.2'),
        t('savings.fixed.features.3'),
        t('savings.fixed.features.4'),
      ],
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&q=80',
    },
  ];

  const rateData = [
    { product: t('savings.simple.title'), rate: t('savings.simple.rate'), minBalance: 'No minimum', term: 'No fixed term', withdrawal: 'Anytime' },
    { product: t('savings.auto.title'), rate: t('savings.auto.rate'), minBalance: 'RWF 10,000', term: 'No fixed term', withdrawal: 'Anytime' },
    { product: t('savings.fixed.title'), rate: t('savings.fixed.rate'), minBalance: 'RWF 50,000', term: '6-60 months', withdrawal: 'Upon maturity' },
  ];

  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1600&q=80')"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t('savings.title')}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">{t('savings.subtitle')}</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-3">Choose Your Savings Account</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Find the right savings solution to help you reach your financial goals</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {savingsProducts.map((product) => (
              <div
                key={product.title}
                className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group border border-gray-100"
              >
                <div className="h-40 bg-cover bg-center relative" style={{backgroundImage: `url('${product.image}')`}}>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <product.icon className="h-8 w-8 text-accent-light" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-1">{product.title}</h3>
                  <p className="text-3xl font-bold text-accent mb-1">{product.interestRate}</p>
                  <p className="text-sm text-gray-500 mb-4">{t('savings.annualRate')}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="text-sm text-gray-600 flex items-start">
                        <span className="text-green-500 mr-2 mt-0.5">&#10003;</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/register"
                    className="block text-center w-full px-4 py-2.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                  >
                    {t('savings.openAccount')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-3">Rate Comparison</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Compare our savings account features side by side</p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-sm border border-gray-200">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-6 py-4 text-left font-semibold">Account Type</th>
                  <th className="px-6 py-4 text-left font-semibold">Interest Rate</th>
                  <th className="px-6 py-4 text-left font-semibold">Min. Balance</th>
                  <th className="px-6 py-4 text-left font-semibold">Term</th>
                  <th className="px-6 py-4 text-left font-semibold">Withdrawal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {rateData.map((row) => (
                  <tr key={row.product} className="hover:bg-light-gray/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-navy">{row.product}</td>
                    <td className="px-6 py-4">
                      <span className="text-accent font-bold text-lg">{row.rate}</span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{row.minBalance}</td>
                    <td className="px-6 py-4 text-gray-600">{row.term}</td>
                    <td className="px-6 py-4 text-gray-600">{row.withdrawal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-3">Why Save With Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Experience the benefits of banking with Prime Trust Finance</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: ChartBarSquareIcon, title: 'Competitive Rates', desc: 'Earn higher interest rates compared to traditional banks' },
              { icon: ShieldCheckIcon, title: 'Guaranteed Security', desc: 'Your deposits are insured and protected at all times' },
              { icon: ClockIcon, title: '24/7 Access', desc: 'Manage your savings anytime with online and mobile banking' },
              { icon: ArrowTrendingUpIcon, title: 'Goal Tracking', desc: 'Set savings goals and track your progress automatically' },
            ].map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center p-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-accent-light mb-2">15%</p>
              <p className="text-blue-200">Average Savings Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent-light mb-2">10,000+</p>
              <p className="text-blue-200">Active Savers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent-light mb-2">RWF 5B+</p>
              <p className="text-blue-200">Total Deposits</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent-light mb-2">99.9%</p>
              <p className="text-blue-200">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Start Saving Today</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">Open a savings account in minutes and start earning competitive interest rates on your deposits.</p>
          <Link
            to="/register"
            className="inline-flex items-center px-8 py-4 bg-white text-accent font-bold rounded-lg hover:bg-light-gray transition-colors shadow-lg text-lg"
          >
            Open an Account
            <ArrowTrendingUpIcon className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
