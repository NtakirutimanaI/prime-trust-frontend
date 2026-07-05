import { Link } from 'react-router-dom';
import { CreditCardIcon, StarIcon, ArrowTrendingUpIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const cardKeys = ['debit', 'credit', 'prepaid', 'business'];

const cardDetails: Record<string, { apr: string; fee: string; rewards: string; image: string }> = {
  debit: { apr: 'N/A', fee: 'Free', rewards: '1% cashback on purchases', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80' },
  credit: { apr: 'From 12.9%', fee: '$0 annual fee', rewards: 'Up to 2x rewards points', image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400&q=80' },
  prepaid: { apr: 'N/A', fee: 'No monthly fee', rewards: 'Budget tracking included', image: 'https://images.unsplash.com/photo-1556742077-0a6b6a4ef4d0?w=400&q=80' },
  business: { apr: 'From 10.9%', fee: '$99 annual fee', rewards: '3x on business expenses', image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=400&q=80' },
};

export default function Cards() {
  const { t } = useTranslation();
  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80')"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t('cards.title')}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">{t('cards.subtitle')}</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-3">Choose Your Card</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Find the perfect card for your lifestyle with our range of options</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {cardKeys.map((key) => {
              const detail = cardDetails[key];
              return (
                <div
                  key={key}
                  className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                >
                  <div className="h-40 bg-cover bg-center relative" style={{backgroundImage: `url('${detail.image}')`}}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <CreditCardIcon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy mb-3">{t('cards.' + key + '.title')}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">APR</span>
                        <span className="font-semibold text-navy">{detail.apr}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Annual Fee</span>
                        <span className="font-semibold text-navy">{detail.fee}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Rewards</span>
                        <span className="font-semibold text-accent">{detail.rewards}</span>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6 border-t border-gray-100 pt-4">
                      {(t('cards.' + key + '.features', { returnObjects: true }) as string[]).map((feature: string) => (
                        <li key={feature} className="text-sm text-gray-600 flex items-start">
                          <span className="text-accent mr-2 mt-0.5">&#10003;</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/register"
                      className="block text-center w-full px-4 py-2.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                    >
                      {t('cards.applyNow')}
                    </Link>
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
            <h2 className="text-3xl font-bold text-navy mb-3">Rewards Comparison</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Compare rewards across our card lineup</p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-sm border border-gray-200">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  {cardKeys.map((key) => (
                    <th key={key} className="px-6 py-4 text-left font-semibold">{t('cards.' + key + '.title')}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-light-gray/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-navy">Annual Fee</td>
                  {cardKeys.map((key) => (
                    <td key={key} className="px-6 py-4 text-gray-600">{cardDetails[key].fee}</td>
                  ))}
                </tr>
                <tr className="hover:bg-light-gray/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-navy">APR</td>
                  {cardKeys.map((key) => (
                    <td key={key} className="px-6 py-4 text-gray-600">{cardDetails[key].apr}</td>
                  ))}
                </tr>
                <tr className="hover:bg-light-gray/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-navy">Rewards</td>
                  {cardKeys.map((key) => (
                    <td key={key} className="px-6 py-4 text-gray-600">{cardDetails[key].rewards}</td>
                  ))}
                </tr>
                <tr className="hover:bg-light-gray/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-navy">Welcome Bonus</td>
                  {cardKeys.map((key) => (
                    <td key={key} className="px-6 py-4">
                      {key === 'credit' ? <span className="text-accent font-semibold">Up to 20,000 pts</span> :
                       key === 'business' ? <span className="text-accent font-semibold">Up to 30,000 pts</span> :
                       <span className="text-gray-400">N/A</span>}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <CreditCardIcon className="h-10 w-10 text-accent-light mx-auto mb-3" />
              <p className="text-3xl font-bold mb-1">50,000+</p>
              <p className="text-blue-200">Active Cards Issued</p>
            </div>
            <div>
              <StarIcon className="h-10 w-10 text-accent-light mx-auto mb-3" />
              <p className="text-3xl font-bold mb-1">4.8/5</p>
              <p className="text-blue-200">Customer Satisfaction</p>
            </div>
            <div>
              <ShieldCheckIcon className="h-10 w-10 text-accent-light mx-auto mb-3" />
              <p className="text-3xl font-bold mb-1">100%</p>
              <p className="text-blue-200">Fraud Protection</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">Apply for your preferred card today and enjoy exclusive benefits, rewards, and world-class service.</p>
          <Link
            to="/register"
            className="inline-flex items-center px-8 py-4 bg-white text-accent font-bold rounded-lg hover:bg-light-gray transition-colors shadow-lg text-lg"
          >
            Apply Now
            <ArrowTrendingUpIcon className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
