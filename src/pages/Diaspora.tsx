import { useTranslation } from 'react-i18next';
import { GlobeAltIcon, ArrowsRightLeftIcon, CurrencyDollarIcon, DevicePhoneMobileIcon, HomeModernIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function Diaspora() {
  const { t } = useTranslation();

  const services = [
    { icon: ArrowsRightLeftIcon, title: t('diaspora.benefits.0.title'), desc: t('diaspora.benefits.0.desc') },
    { icon: CurrencyDollarIcon, title: t('diaspora.benefits.1.title'), desc: t('diaspora.benefits.1.desc') },
    { icon: DevicePhoneMobileIcon, title: t('diaspora.benefits.2.title'), desc: t('diaspora.benefits.2.desc') },
    { icon: GlobeAltIcon, title: 'Investment Opportunities', desc: 'Explore curated investment opportunities in Rwanda designed specifically for the diaspora community.' },
    { icon: HomeModernIcon, title: 'Real Estate Financing', desc: 'Specialized mortgage and real estate financing solutions for diaspora members investing back home.' },
    { icon: ShieldCheckIcon, title: 'Travel Insurance', desc: 'Comprehensive travel insurance plans covering medical emergencies, trip cancellations, and lost baggage.' },
  ];

  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&q=80')"}}>
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
              <GlobeAltIcon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t('diaspora.title')}</h1>
            <p className="text-xl text-blue-200">{t('diaspora.subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-2">Services for the Diaspora</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Stay connected and manage your finances from anywhere in the world</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                <div className="h-1.5 bg-accent" />
                <div className="p-8">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <s.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-accent">10,000+</p>
              <p className="text-blue-200 mt-1">Diaspora Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent">RWF 75B+</p>
              <p className="text-blue-200 mt-1">Transfers Processed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent">50+</p>
              <p className="text-blue-200 mt-1">Countries Reached</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent">24h</p>
              <p className="text-blue-200 mt-1">Transfer Times</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Stay Connected from Anywhere</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">Open your diaspora account today and enjoy seamless banking across borders.</p>
          <button className="px-8 py-4 bg-white text-accent font-bold rounded-lg hover:bg-white/90 transition-colors cursor-pointer text-lg">
            Open a Diaspora Account
          </button>
        </div>
      </section>
    </div>
  );
}
