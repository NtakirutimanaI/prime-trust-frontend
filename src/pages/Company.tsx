import { useTranslation } from 'react-i18next';
import { BuildingOfficeIcon, BanknotesIcon, UserGroupIcon, ShieldCheckIcon, GlobeAltIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function Company() {
  const { t } = useTranslation();

  const solutions = [
    { icon: BanknotesIcon, title: t('company.benefits.0.title'), desc: t('company.benefits.0.desc') },
    { icon: UserGroupIcon, title: t('company.benefits.1.title'), desc: t('company.benefits.1.desc') },
    { icon: ShieldCheckIcon, title: t('company.benefits.2.title'), desc: t('company.benefits.2.desc') },
    { icon: GlobeAltIcon, title: 'Trade Finance', desc: 'Comprehensive trade financing solutions including letters of credit and supply chain finance.' },
    { icon: ClockIcon, title: 'Cash Management', desc: 'Streamlined cash management services to optimize your companys liquidity and operations.' },
    { icon: BuildingOfficeIcon, title: 'Payroll Services', desc: 'End-to-end payroll management and employee payment solutions for businesses of all sizes.' },
  ];

  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80')"}}>
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
              <BuildingOfficeIcon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t('company.title')}</h1>
            <p className="text-xl text-blue-200">{t('company.subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-2">Corporate Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive banking services tailored for your business growth</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {solutions.map((s) => (
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

      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-accent">2,500+</p>
              <p className="text-gray-600 mt-1">Corporate Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent">RWF 200B+</p>
              <p className="text-gray-600 mt-1">Financing Provided</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent">15+</p>
              <p className="text-gray-600 mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent">100%</p>
              <p className="text-gray-600 mt-1">Dedicated Support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Partner with Us for Growth</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">Let our team of corporate banking experts help your business reach new heights.</p>
          <button className="px-8 py-4 bg-white text-accent font-bold rounded-lg hover:bg-white/90 transition-colors cursor-pointer text-lg">
            Speak with a Relationship Manager
          </button>
        </div>
      </section>
    </div>
  );
}
