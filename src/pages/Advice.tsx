import { useTranslation } from 'react-i18next';
import { LightBulbIcon, CurrencyDollarIcon, ChartBarIcon, BanknotesIcon, CreditCardIcon, NewspaperIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const articles = [
  { titleKey: 'advice.budgeting', descKey: 'advice.budgetingDesc', icon: CurrencyDollarIcon, image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80' },
  { titleKey: 'advice.saving', descKey: 'advice.savingDesc', icon: BanknotesIcon, image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80' },
  { titleKey: 'advice.investing', descKey: 'advice.investingDesc', icon: ChartBarIcon, image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&q=80' },
  { titleKey: 'advice.debtManagement', descKey: 'advice.debtManagementDesc', icon: CreditCardIcon, image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80' },
  { titleKey: 'advice.retirement', descKey: 'advice.retirementDesc', icon: LightBulbIcon, image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80' },
];

export default function Advice() {
  const { t } = useTranslation();

  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80')"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeIn">{t('advice.heroTitle')}</h1>
          <p className="text-lg text-white/80 max-w-2xl animate-fadeIn">{t('advice.heroDesc')}</p>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-lg overflow-hidden min-h-[40vh] bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80')"}}>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent" />
            <div className="relative p-8 md:p-12 flex flex-col justify-end min-h-[40vh]">
              <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-2">{t('advice.articles')}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{t('advice.budgeting')}</h2>
              <p className="text-white/70 max-w-xl mb-4">{t('advice.budgetingDesc')}</p>
              <button className="inline-flex items-center gap-2 text-white font-medium hover:underline cursor-pointer w-fit">
                {t('common.submit')} <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light-gray py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-4 text-center">{t('advice.articles')}</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">{t('advice.heroDesc')}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {articles.map((a, i) => {
              const Icon = a.icon;
              return (
                <div key={i} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-40 bg-cover bg-center" style={{backgroundImage: `url('${a.image}')`}} />
                  <div className="p-6">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <h3 className="font-semibold text-navy text-lg mb-2">{t(a.titleKey)}</h3>
                    <p className="text-gray-600 text-sm mb-4">{t(a.descKey)}</p>
                    <button className="inline-flex items-center gap-1 text-accent text-sm font-medium hover:underline cursor-pointer">
                      {t('common.submit')} <ArrowRightIcon className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-accent py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <NewspaperIcon className="w-12 h-12 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">{t('advice.talkExpert')}</h2>
          <p className="text-white/80 mb-8">{t('advice.heroDesc')}</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder={t('advice.heroTitle')} className="flex-1 px-4 py-3 rounded text-gray-800 placeholder-gray-400" />
            <button className="px-6 py-3 bg-navy text-white font-semibold rounded hover:bg-navy/90 transition-colors cursor-pointer whitespace-nowrap">
              {t('common.submit')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
