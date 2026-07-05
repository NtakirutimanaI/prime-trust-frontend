import { useTranslation } from 'react-i18next';
import { BanknotesIcon, HomeModernIcon, CurrencyDollarIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const rateTypes = [
  {
    key: 'savings', icon: BanknotesIcon,
    rates: [
      { labelKey: 'rates.regularSavings', valueKey: 'rates.regularSavingsValue' },
      { labelKey: 'rates.highYieldSavings', valueKey: 'rates.highYieldSavingsValue' },
      { labelKey: 'rates.studentSavings', valueKey: 'rates.studentSavingsValue' },
    ],
  },
  {
    key: 'gic', icon: ChartBarIcon,
    rates: [
      { labelKey: 'rates.gic1Year', valueKey: 'rates.gic1YearValue' },
      { labelKey: 'rates.gic2Year', valueKey: 'rates.gic2YearValue' },
      { labelKey: 'rates.gic3Year', valueKey: 'rates.gic3YearValue' },
      { labelKey: 'rates.gic5Year', valueKey: 'rates.gic5YearValue' },
    ],
  },
  {
    key: 'mortgage', icon: HomeModernIcon,
    rates: [
      { labelKey: 'rates.mortgage1Year', valueKey: 'rates.mortgage1YearValue' },
      { labelKey: 'rates.mortgage3Year', valueKey: 'rates.mortgage3YearValue' },
      { labelKey: 'rates.mortgage5Year', valueKey: 'rates.mortgage5YearValue' },
      { labelKey: 'rates.mortgageVariable', valueKey: 'rates.mortgageVariableValue' },
    ],
  },
  {
    key: 'loan', icon: CurrencyDollarIcon,
    rates: [
      { labelKey: 'rates.personalLoan', valueKey: 'rates.personalLoanValue' },
      { labelKey: 'rates.carLoan', valueKey: 'rates.carLoanValue' },
      { labelKey: 'rates.educationLoan', valueKey: 'rates.educationLoanValue' },
      { labelKey: 'rates.businessLoan', valueKey: 'rates.businessLoanValue' },
    ],
  },
];

const stats = [
  { label: 'rates.statProducts', value: '50+' },
  { label: 'rates.statCustomers', value: '100K+' },
  { label: 'rates.statBranches', value: '25+' },
  { label: 'rates.statYears', value: '15+' },
];

export default function Rates() {
  const { t } = useTranslation();

  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center bg-cover bg-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80')"}}>
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t('rates.title')}</h1>
          <p className="text-xl text-white/80 max-w-2xl">{t('rates.subtitle')}</p>
        </div>
      </section>

      {rateTypes.map((group, gi) => (
        <section key={group.key} className={`py-16 ${gi % 2 === 0 ? 'bg-white' : 'bg-light-gray'}`}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <group.icon className="h-5 w-5 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-navy">{t(`rates.${group.key}Title`)}</h2>
            </div>
            <div className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold">{t('rates.product')}</th>
                    <th className="px-6 py-4 text-sm font-semibold text-right">{t('rates.rate')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {group.rates.map((rate, i) => (
                    <tr key={i} className="hover:bg-light-gray/50 transition-colors">
                      <td className="px-6 py-4 text-gray-700">{t(rate.labelKey)}</td>
                      <td className="px-6 py-4 text-right font-semibold text-primary">{t(rate.valueKey)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ))}

      <section className="py-14 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-sm text-white/70">{t(stat.label)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent text-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/80 text-sm mb-6">{t('rates.disclaimer')}</p>
          <p className="text-white/90">{t('rates.ctaText')}</p>
        </div>
      </section>
    </div>
  );
}
