import { useTranslation } from 'react-i18next';
import { BriefcaseIcon, ChartBarIcon, ShieldCheckIcon, StarIcon, RocketLaunchIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function Professional() {
  const { t } = useTranslation();

  const benefits = [
    { icon: BriefcaseIcon, title: t('professional.benefits.0.title'), desc: t('professional.benefits.0.desc') },
    { icon: ChartBarIcon, title: t('professional.benefits.1.title'), desc: t('professional.benefits.1.desc') },
    { icon: ShieldCheckIcon, title: t('professional.benefits.2.title'), desc: t('professional.benefits.2.desc') },
    { icon: StarIcon, title: 'Exclusive Rates', desc: 'Access preferential interest rates on loans, mortgages, and savings accounts designed for professionals.' },
    { icon: RocketLaunchIcon, title: 'Priority Support', desc: 'Dedicated relationship manager and priority customer service for all your banking needs.' },
    { icon: SparklesIcon, title: 'Networking Events', desc: 'Invitations to exclusive professional networking events and financial seminars.' },
  ];

  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1523240799232-3179505f3cd2?w=1600&q=80')"}}>
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
              <BriefcaseIcon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t('professional.title')}</h1>
            <p className="text-xl text-blue-200">{t('professional.subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-2">Benefits of Banking with Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Exclusive solutions designed to help you achieve more</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                <div className="h-1.5 bg-accent" />
                <div className="p-8">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <b.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">{b.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{b.desc}</p>
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
              <p className="text-4xl font-bold text-accent">15,000+</p>
              <p className="text-blue-200 mt-1">Professional Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent">RWF 50B+</p>
              <p className="text-blue-200 mt-1">Portfolio Managed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent">4.9/5</p>
              <p className="text-blue-200 mt-1">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent">50+</p>
              <p className="text-blue-200 mt-1">Expert Advisors</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Elevate Your Banking Experience?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">Join thousands of professionals who trust us with their financial success.</p>
          <button className="px-8 py-4 bg-white text-accent font-bold rounded-lg hover:bg-white/90 transition-colors cursor-pointer text-lg">
            Open an Account
          </button>
        </div>
      </section>
    </div>
  );
}
