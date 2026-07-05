import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DocumentTextIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const sections = [
  { titleKey: 'terms.section1Title', contentKey: 'terms.section1' },
  { titleKey: 'terms.section2Title', contentKey: 'terms.section2' },
  { titleKey: 'terms.section3Title', contentKey: 'terms.section3' },
  { titleKey: 'terms.section4Title', contentKey: 'terms.section4' },
  { titleKey: 'terms.section5Title', contentKey: 'terms.section5' },
  { titleKey: 'terms.section6Title', contentKey: 'terms.section6' },
  { titleKey: 'terms.section7Title', contentKey: 'terms.section7' },
  { titleKey: 'terms.section8Title', contentKey: 'terms.section8' },
];

export default function Terms() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center bg-cover bg-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80')"}}>
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t('terms.title')}</h1>
          <p className="text-xl text-white/80 max-w-2xl">{t('terms.subtitle')}</p>
        </div>
      </section>

      <section className="py-16 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <DocumentTextIcon className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-navy">{t('terms.heroTitle')}</h2>
              <p className="text-gray-600 text-sm">{t('terms.heroDesc')}</p>
            </div>
          </div>

          <div className="space-y-3">
            {sections.map((section, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button onClick={() => toggle(i)} className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer">
                  <h3 className="text-lg font-semibold text-navy">{t(section.titleKey)}</h3>
                  <ChevronDownIcon className={`h-5 w-5 text-accent transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{t(section.contentKey)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent text-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">{t('terms.ctaTitle')}</h2>
          <p className="text-white/80 mb-6">{t('terms.ctaDesc')}</p>
          <button className="px-8 py-3 bg-white text-accent font-medium text-lg rounded-lg hover:bg-white/90 transition-colors cursor-pointer">
            {t('terms.contactUs')}
          </button>
        </div>
      </section>
    </div>
  );
}
