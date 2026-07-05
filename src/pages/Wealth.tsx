import { useTranslation } from 'react-i18next';
import { ChartBarIcon, ScaleIcon, CurrencyDollarIcon, ShieldCheckIcon, HeartIcon, BuildingOffice2Icon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

const services = [
  { titleKey: 'wealth.portfolio', descKey: 'wealth.portfolioDesc', icon: ChartBarIcon },
  { titleKey: 'wealth.estate', descKey: 'wealth.estateDesc', icon: ScaleIcon },
  { titleKey: 'wealth.tax', descKey: 'wealth.taxDesc', icon: CurrencyDollarIcon },
  { titleKey: 'wealth.philanthropy', descKey: 'wealth.philanthropyDesc', icon: HeartIcon },
  { titleKey: 'wealth.trust', descKey: 'wealth.portfolioDesc', icon: ShieldCheckIcon },
  { titleKey: 'wealth.familyOffice', descKey: 'wealth.portfolioDesc', icon: BuildingOffice2Icon },
];

const stats = [
  { value: '$12B+', labelKey: 'wealth.statAum' },
  { value: '500+', labelKey: 'wealth.statFamilies' },
  { value: '20+', labelKey: 'wealth.statYears' },
  { value: '100+', labelKey: 'wealth.statProfessionals' },
];

export default function Wealth() {
  const { t } = useTranslation();

  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1560520031-8102f0e4d1c5?w=1600&q=80')"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeIn">{t('wealth.heroTitle')}</h1>
          <p className="text-lg text-white/80 max-w-2xl animate-fadeIn">{t('wealth.heroDesc')}</p>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-4 text-center">{t('wealth.services')}</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">{t('wealth.heroDesc')}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                  <div className="h-1.5 bg-accent" />
                  <div className="p-6">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-semibold text-navy text-lg mb-2">{t(s.titleKey)}</h3>
                    <p className="text-gray-600 text-sm">{t(s.descKey)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-light-gray py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{s.value}</div>
                <div className="text-navy/70 text-sm uppercase tracking-wider">{t(s.labelKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <ArrowTrendingUpIcon className="w-12 h-12 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">{t('wealth.scheduleMeeting')}</h2>
          <p className="text-white/80 mb-8">{t('wealth.heroDesc')}</p>
          <button className="px-8 py-3 bg-white text-accent font-semibold rounded hover:bg-gray-100 transition-colors cursor-pointer">
            {t('wealth.scheduleMeeting')}
          </button>
        </div>
      </section>
    </div>
  );
}
