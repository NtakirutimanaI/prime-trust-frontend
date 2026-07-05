import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GiftIcon, CreditCardIcon, HomeModernIcon, ArrowTrendingUpIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';

const categories = [
  { key: 'accounts', icon: GiftIcon },
  { key: 'cards', icon: CreditCardIcon },
  { key: 'mortgages', icon: HomeModernIcon },
  { key: 'investments', icon: ArrowTrendingUpIcon },
];

const offers = [
  { titleKey: 'promotions.chequingOffer', descKey: 'promotions.chequingOfferDesc', category: 'accounts', img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80' },
  { titleKey: 'promotions.creditCardOffer', descKey: 'promotions.creditCardOfferDesc', category: 'cards', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80' },
  { titleKey: 'promotions.mortgageOffer', descKey: 'promotions.mortgageOfferDesc', category: 'mortgages', img: 'https://images.unsplash.com/photo-1560520031-8102f948c6b4?w=600&q=80' },
  { titleKey: 'promotions.newcomerOffer', descKey: 'promotions.newcomerOfferDesc', category: 'investments', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80' },
];

export default function Promotions() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filtered = activeCategory === 'all' ? offers : offers.filter(o => o.category === activeCategory);

  const stats = [
    { label: t('promotions.statOffers'), value: '12+' },
    { label: t('promotions.statMembers'), value: '50K+' },
    { label: t('promotions.statSavings'), value: '₣2M+' },
    { label: t('promotions.statPartners'), value: '30+' },
  ];

  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center bg-cover bg-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1532453285724-6b1c068f70ed?w=1600&q=80')"}}>
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t('promotions.heroTitle')}</h1>
          <p className="text-xl text-white/80 max-w-2xl">{t('promotions.heroDesc')}</p>
        </div>
      </section>

      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <button onClick={() => setActiveCategory('all')} className={`px-5 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${activeCategory === 'all' ? 'bg-navy text-white' : 'bg-white text-navy hover:bg-navy/10'}`}>
              {t('promotions.all')}
            </button>
            {categories.map(cat => (
              <button key={cat.key} onClick={() => setActiveCategory(cat.key)} className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${activeCategory === cat.key ? 'bg-navy text-white' : 'bg-white text-navy hover:bg-navy/10'}`}>
                <cat.icon className="h-4 w-4" />
                {t(`promotions.${cat.key}`)}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map((o, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="h-48 bg-cover bg-center relative" style={{backgroundImage: `url('${o.img}')`}}>
                  <div className="absolute top-3 left-3 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                    {t('promotions.limitedOffer')}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-navy text-lg mb-2">{t(o.titleKey)}</h3>
                  <p className="text-gray-600 text-sm mb-4">{t(o.descKey)}</p>
                  <div className="flex items-center text-xs text-gray-400 mb-4">
                    <CalendarDaysIcon className="h-4 w-4 mr-1 text-accent" />
                    {t('promotions.expires')}
                  </div>
                  <button className="w-full px-4 py-2.5 bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors rounded-lg cursor-pointer">
                    {t('promotions.applyNow')}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400 text-center mt-8">{t('promotions.terms')}</p>
        </div>
      </section>

      <section className="py-14 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">{t('promotions.ctaTitle')}</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">{t('promotions.ctaDesc')}</p>
          <button className="px-8 py-3 bg-accent text-white font-medium text-lg rounded-lg hover:bg-accent/90 transition-colors cursor-pointer">
            {t('promotions.applyNow')}
          </button>
        </div>
      </section>
    </div>
  );
}
