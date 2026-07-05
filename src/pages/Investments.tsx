import { useTranslation } from 'react-i18next';
import { ChartBarIcon, ShieldCheckIcon, AcademicCapIcon, CurrencyDollarIcon, PresentationChartLineIcon, CalculatorIcon, HomeModernIcon } from '@heroicons/react/24/outline';

const products = [
  { titleKey: 'investments.tfsa', descKey: 'investments.tfsaDesc', icon: ShieldCheckIcon },
  { titleKey: 'investments.rrsp', descKey: 'investments.rrspDesc', icon: ChartBarIcon },
  { titleKey: 'investments.fhsa', descKey: 'investments.fhsaDesc', icon: HomeModernIcon },
  { titleKey: 'investments.resp', descKey: 'investments.respDesc', icon: AcademicCapIcon },
  { titleKey: 'investments.gics', descKey: 'investments.gicsDesc', icon: CurrencyDollarIcon },
  { titleKey: 'investments.mutualFunds', descKey: 'investments.mutualFundsDesc', icon: PresentationChartLineIcon },
];

const stats = [
  { value: '$4.2B+', labelKey: 'investments.statAum' },
  { value: '98%', labelKey: 'investments.statRetention' },
  { value: '50,000+', labelKey: 'investments.statInvestors' },
  { value: '100+', labelKey: 'investments.statFunds' },
];

export default function Investments() {
  const { t } = useTranslation();

  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=80')"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeIn">{t('investments.heroTitle')}</h1>
          <p className="text-lg text-white/80 max-w-2xl animate-fadeIn">{t('investments.heroDesc')}</p>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-4 text-center">{t('investments.products')}</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">{t('investments.heroDesc')}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                  <div className="h-1.5 bg-accent" />
                  <div className="p-6">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-semibold text-navy text-lg mb-2">{t(p.titleKey)}</h3>
                    <p className="text-gray-600 text-sm">{t(p.descKey)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-light-gray py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-4 text-center">{t('investments.calculator')}</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">{t('investments.heroDesc')}</p>
          <div className="bg-white rounded-lg shadow-sm p-8 text-center border border-gray-100 max-w-2xl mx-auto">
            <CalculatorIcon className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-navy mb-2">{t('investments.calculator')}</h3>
            <p className="text-gray-500 text-sm mb-6">{t('investments.heroDesc')}</p>
            <button className="px-6 py-2 bg-navy text-white text-sm font-medium rounded hover:bg-navy/90 transition-colors cursor-pointer">
              {t('investments.speakAdvisor')}
            </button>
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
          <h2 className="text-3xl font-bold text-white mb-4">{t('investments.getStarted')}</h2>
          <p className="text-white/80 mb-8">{t('investments.heroDesc')}</p>
          <button className="px-8 py-3 bg-white text-accent font-semibold rounded hover:bg-gray-100 transition-colors cursor-pointer">
            {t('investments.speakAdvisor')}
          </button>
        </div>
      </section>
    </div>
  );
}
