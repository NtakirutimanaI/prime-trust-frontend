import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronDownIcon, ChartBarIcon, ArrowsRightLeftIcon, CalculatorIcon, BanknotesIcon } from '@heroicons/react/24/outline';

const faqs = [
  { questionKey: 'faq.questions.q1', answerKey: 'faq.questions.q1Answer' },
  { questionKey: 'faq.questions.q2', answerKey: 'faq.questions.q2Answer' },
  { questionKey: 'faq.questions.q3', answerKey: 'faq.questions.q3Answer' },
  { questionKey: 'faq.questions.q4', answerKey: 'faq.questions.q4Answer' },
];

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-navy mb-2">
            {t('faq.title')}
          </h2>
          <div className="flex flex-col sm:flex-row justify-evenly gap-4 sm:gap-8 mb-10">
            <Link to="/rates" className="flex items-center gap-3 px-3 sm:px-5 py-3 sm:py-4 hover:bg-accent hover:text-white transition-colors group">
              <ChartBarIcon className="h-5 w-5 sm:h-6 sm:w-6 text-accent group-hover:text-white shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-navy group-hover:text-white underline decoration-blue-500 underline-offset-4 group-hover:decoration-white">{t('faq.links.rates')}</span>
            </Link>
            <Link to="/foreign-exchange" className="flex items-center gap-3 px-3 sm:px-5 py-3 sm:py-4 hover:bg-accent hover:text-white transition-colors group">
              <ArrowsRightLeftIcon className="h-5 w-5 sm:h-6 sm:w-6 text-accent group-hover:text-white shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-navy group-hover:text-white underline decoration-blue-500 underline-offset-4 group-hover:decoration-white">{t('faq.links.forex')}</span>
            </Link>
            <Link to="/mortgages" className="flex items-center gap-3 px-3 sm:px-5 py-3 sm:py-4 hover:bg-accent hover:text-white transition-colors group">
              <CalculatorIcon className="h-5 w-5 sm:h-6 sm:w-6 text-accent group-hover:text-white shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-navy group-hover:text-white underline decoration-blue-500 underline-offset-4 group-hover:decoration-white">{t('faq.links.mortgage')}</span>
            </Link>
            <Link to="/savings" className="flex items-center gap-3 px-3 sm:px-5 py-3 sm:py-4 hover:bg-accent hover:text-white transition-colors group">
              <BanknotesIcon className="h-5 w-5 sm:h-6 sm:w-6 text-accent group-hover:text-white shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-navy group-hover:text-white underline decoration-blue-500 underline-offset-4 group-hover:decoration-white">{t('faq.links.savings')}</span>
            </Link>
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-x-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-light-gray transition-colors cursor-pointer"
                >
                  <span className="font-medium text-navy text-sm">
                    {t(faq.questionKey)}
                  </span>
                  <ChevronDownIcon
                    className={`h-5 w-5 text-red-600 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t(faq.answerKey) }}>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
