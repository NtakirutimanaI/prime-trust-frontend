import { useTranslation } from 'react-i18next';
import { HomeModernIcon, ArrowPathIcon, DocumentTextIcon, CurrencyDollarIcon, CalculatorIcon, ShieldCheckIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const rates = [
  { key: 'fixed1', termKey: 'mortgages.fixed1' },
  { key: 'fixed2', termKey: 'mortgages.fixed2' },
  { key: 'fixed3', termKey: 'mortgages.fixed3' },
  { key: 'fixed5', termKey: 'mortgages.fixed5' },
  { key: 'variable', termKey: 'mortgages.variable' },
];

const rateValues: Record<string, string> = {
  fixed1: '4.49%',
  fixed2: '4.79%',
  fixed3: '5.09%',
  fixed5: '4.99%',
  variable: '5.45%',
};

const products = [
  { titleKey: 'mortgages.homePurchase', descKey: 'mortgages.homePurchaseDesc', icon: HomeModernIcon },
  { titleKey: 'mortgages.refinance', descKey: 'mortgages.refinanceDesc', icon: ArrowPathIcon },
  { titleKey: 'mortgages.renewal', descKey: 'mortgages.renewalDesc', icon: DocumentTextIcon },
  { titleKey: 'mortgages.heloc', descKey: 'mortgages.helocDesc', icon: CurrencyDollarIcon },
  { titleKey: 'mortgages.preApproval', descKey: 'mortgages.preApprovalDesc', icon: ShieldCheckIcon },
];

const stats = [
  { value: '$2.5B+', labelKey: 'mortgages.statVolume' },
  { value: '15,000+', labelKey: 'mortgages.statClients' },
  { value: '98%', labelKey: 'mortgages.statSatisfaction' },
  { value: '25+', labelKey: 'mortgages.statYears' },
];

export default function Mortgages() {
  const { t } = useTranslation();

  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80')"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeIn">{t('mortgages.heroTitle')}</h1>
          <p className="text-lg text-white/80 max-w-2xl animate-fadeIn">{t('mortgages.heroDesc')}</p>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-8">{t('mortgages.rates')}</h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-light-gray text-left">
                  <th className="px-5 py-3 font-semibold text-navy">{t('mortgages.rateTerm')}</th>
                  <th className="px-5 py-3 font-semibold text-navy">{t('mortgages.rateRate')}</th>
                  <th className="px-5 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {rates.map((r) => (
                  <tr key={r.key} className="border-t border-gray-100 hover:bg-light-gray/50 transition-colors">
                    <td className="px-5 py-3 text-navy font-medium">{t(r.termKey)}</td>
                    <td className="px-5 py-3 text-accent font-semibold text-lg">{rateValues[r.key]}</td>
                    <td className="px-5 py-3 text-right">
                      <button className="px-4 py-1.5 bg-accent text-white text-xs font-medium rounded hover:bg-accent/90 transition-colors cursor-pointer">
                        {t('mortgages.applyNow')}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-light-gray py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-4 text-center">{t('mortgages.products')}</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">{t('mortgages.heroDesc')}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-1.5 bg-accent" />
                  <div className="p-6">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-semibold text-navy text-lg mb-2">{t(p.titleKey)}</h3>
                    <p className="text-gray-600 text-sm mb-4">{t(p.descKey)}</p>
                    <button className="text-accent text-sm font-medium hover:underline cursor-pointer">
                      {t('mortgages.learnMore')}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-4 text-center">{t('mortgages.tools')}</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">{t('mortgages.heroDesc')}</p>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 p-8 text-center border border-gray-100">
              <CalculatorIcon className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-navy mb-2">{t('mortgages.paymentCalc')}</h3>
              <p className="text-gray-500 text-sm mb-4">{t('mortgages.heroDesc')}</p>
              <button className="px-5 py-2 bg-navy text-white text-sm font-medium rounded hover:bg-navy/90 transition-colors cursor-pointer">
                {t('mortgages.learnMore')}
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 p-8 text-center border border-gray-100">
              <ChartBarIcon className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-navy mb-2">{t('mortgages.affordabilityCalc')}</h3>
              <p className="text-gray-500 text-sm mb-4">{t('mortgages.heroDesc')}</p>
              <button className="px-5 py-2 bg-navy text-white text-sm font-medium rounded hover:bg-navy/90 transition-colors cursor-pointer">
                {t('mortgages.learnMore')}
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 p-8 text-center border border-gray-100">
              <ShieldCheckIcon className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-navy mb-2">{t('mortgages.connectSpecialist')}</h3>
              <p className="text-gray-500 text-sm mb-4">{t('mortgages.heroDesc')}</p>
              <button className="px-5 py-2 bg-accent text-white text-sm font-medium rounded hover:bg-accent/90 transition-colors cursor-pointer">
                {t('mortgages.learnMore')}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{s.value}</div>
                <div className="text-white/70 text-sm uppercase tracking-wider">{t(s.labelKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">{t('mortgages.connectSpecialist')}</h2>
          <p className="text-white/80 mb-8">{t('mortgages.heroDesc')}</p>
          <button className="px-8 py-3 bg-white text-accent font-semibold rounded hover:bg-gray-100 transition-colors cursor-pointer">
            {t('mortgages.learnMore')}
          </button>
        </div>
      </section>
    </div>
  );
}
