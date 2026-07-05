import { useTranslation } from 'react-i18next';
import { StarIcon, ArrowPathIcon, GiftIcon, CurrencyDollarIcon, CreditCardIcon, HomeModernIcon, DevicePhoneMobileIcon, TrophyIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

const steps = [
  { titleKey: 'rewards.earn', descKey: 'rewards.earnDesc', icon: StarIcon },
  { titleKey: 'rewards.redeem', descKey: 'rewards.redeemDesc', icon: ArrowPathIcon },
  { titleKey: 'rewards.bonus', descKey: 'rewards.bonusDesc', icon: GiftIcon },
];

const earningCategories = [
  { labelKey: 'rewards.chequing', icon: CurrencyDollarIcon },
  { labelKey: 'rewards.creditCard', icon: CreditCardIcon },
  { labelKey: 'rewards.mortgage', icon: HomeModernIcon },
  { labelKey: 'rewards.mobileBanking', icon: DevicePhoneMobileIcon },
];

const tiers = [
  { name: 'Silver', color: 'from-gray-300 to-gray-400', key: 'silver' },
  { name: 'Gold', color: 'from-yellow-400 to-yellow-600', key: 'gold' },
  { name: 'Platinum', color: 'from-blue-300 to-gray-400', key: 'platinum' },
];

const stats = [
  { label: 'rewards.statPoints', value: '500K+' },
  { label: 'rewards.statMembers', value: '25K+' },
  { label: 'rewards.statRedeemed', value: '₣1M+' },
  { label: 'rewards.statPartners', value: '100+' },
];

export default function Rewards() {
  const { t } = useTranslation();

  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center bg-cover bg-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b2da?w=1600&q=80')"}}>
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t('rewards.heroTitle')}</h1>
          <p className="text-xl text-white/80 max-w-2xl">{t('rewards.heroDesc')}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-10 text-center">{t('rewards.howItWorks')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <s.icon className="h-8 w-8" />
                </div>
                <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg -mt-10 ml-20 relative z-10">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-navy text-lg mb-2">{t(s.titleKey)}</h3>
                <p className="text-gray-600 text-sm">{t(s.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-10 text-center">{t('rewards.earningTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {earningCategories.map((cat, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 p-6 text-center">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <cat.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-semibold text-navy mb-2">{t(cat.labelKey)}</h3>
                <p className="text-xs text-gray-500">{t('rewards.pointsPerDollar')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-10 text-center">{t('rewards.tiersTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {tiers.map((tier, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                <div className={`bg-gradient-to-r ${tier.color} p-6 text-center`}>
                  <TrophyIcon className="h-10 w-10 mx-auto text-white mb-2" />
                  <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckBadgeIcon className="h-5 w-5 text-accent shrink-0" />
                    {t(`rewards.${tier.key}Benefit1`)}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckBadgeIcon className="h-5 w-5 text-accent shrink-0" />
                    {t(`rewards.${tier.key}Benefit2`)}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckBadgeIcon className="h-5 w-5 text-accent shrink-0" />
                    {t(`rewards.${tier.key}Benefit3`)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
          <h2 className="text-2xl font-bold mb-4">{t('rewards.joinNow')}</h2>
          <p className="text-white/80 mb-6">{t('rewards.ctaDesc')}</p>
          <button className="px-8 py-3 bg-white text-accent font-medium text-lg rounded-lg hover:bg-white/90 transition-colors cursor-pointer">
            {t('rewards.joinNow')}
          </button>
        </div>
      </section>
    </div>
  );
}
