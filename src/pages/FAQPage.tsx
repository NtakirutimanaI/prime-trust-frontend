import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, MagnifyingGlassIcon, QuestionMarkCircleIcon, ChatBubbleLeftRightIcon, ChartBarIcon, ArrowsRightLeftIcon, CalculatorIcon, BanknotesIcon } from '@heroicons/react/24/outline';

const faqs = [
  { questionKey: 'faq.questions.q1', answerKey: 'faq.questions.q1Answer', category: 'accounts' },
  { questionKey: 'faq.questions.q2', answerKey: 'faq.questions.q2Answer', category: 'accounts' },
  { questionKey: 'faq.questions.q3', answerKey: 'faq.questions.q3Answer', category: 'cards' },
  { questionKey: 'faq.questions.q4', answerKey: 'faq.questions.q4Answer', category: 'loans' },
];

const categories = [
  { key: 'all', label: 'faqPage.all' },
  { key: 'accounts', label: 'faqPage.accounts' },
  { key: 'cards', label: 'faqPage.cards' },
  { key: 'loans', label: 'faqPage.loans' },
  { key: 'transfers', label: 'faqPage.transfers' },
  { key: 'bills', label: 'faqPage.bills' },
];

export default function FAQPage() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqs.filter((faq) => {
    if (activeCategory !== 'all' && faq.category !== activeCategory) return false;
    if (searchQuery && !t(faq.questionKey).toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[50vh] flex items-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80')"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-accent/20 rounded-lg">
                <QuestionMarkCircleIcon className="h-8 w-8 text-accent-light" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t('faqPage.title')}</h1>
            <p className="text-xl text-white/80 max-w-xl">{t('faqPage.subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-light-gray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-xl mx-auto mb-10">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('faqPage.searchPlaceholder')}
              className="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-navy text-white shadow-lg'
                    : 'bg-white text-navy border border-gray-200 hover:border-primary hover:text-primary'
                }`}
              >
                {t(cat.label)}
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-100 last:border-b-0">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-light-gray/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${openIndex === index ? 'bg-accent text-white' : 'bg-light-gray text-navy'}`}>
                        <QuestionMarkCircleIcon className="h-4 w-4" />
                      </div>
                      <span className="font-medium text-navy text-base">{t(faq.questionKey)}</span>
                    </div>
                    <ChevronDownIcon
                      className={`h-5 w-5 text-accent transition-transform duration-300 flex-shrink-0 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-5 pl-[3.25rem]">
                      <div className="text-sm text-gray-600 leading-relaxed bg-light-gray rounded-lg p-4" dangerouslySetInnerHTML={{ __html: t(faq.answerKey) }} />
                    </div>
                  )}
                </div>
              ))}
              {filteredFaqs.length === 0 && (
                <div className="px-6 py-12 text-center text-gray-500">
                  <QuestionMarkCircleIcon className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                  <p>{t('faqPage.noResults')}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-12">
            <Link to="/rates" className="flex items-center gap-3 px-6 py-4 rounded-xl bg-light-gray hover:bg-accent hover:text-white transition-all duration-300 group">
              <ChartBarIcon className="h-6 w-6 text-accent group-hover:text-white shrink-0" />
              <span className="text-sm font-medium text-navy group-hover:text-white">{t('faq.links.rates')}</span>
            </Link>
            <Link to="/foreign-exchange" className="flex items-center gap-3 px-6 py-4 rounded-xl bg-light-gray hover:bg-accent hover:text-white transition-all duration-300 group">
              <ArrowsRightLeftIcon className="h-6 w-6 text-accent group-hover:text-white shrink-0" />
              <span className="text-sm font-medium text-navy group-hover:text-white">{t('faq.links.forex')}</span>
            </Link>
            <Link to="/mortgages" className="flex items-center gap-3 px-6 py-4 rounded-xl bg-light-gray hover:bg-accent hover:text-white transition-all duration-300 group">
              <CalculatorIcon className="h-6 w-6 text-accent group-hover:text-white shrink-0" />
              <span className="text-sm font-medium text-navy group-hover:text-white">{t('faq.links.mortgage')}</span>
            </Link>
            <Link to="/savings" className="flex items-center gap-3 px-6 py-4 rounded-xl bg-light-gray hover:bg-accent hover:text-white transition-all duration-300 group">
              <BanknotesIcon className="h-6 w-6 text-accent group-hover:text-white shrink-0" />
              <span className="text-sm font-medium text-navy group-hover:text-white">{t('faq.links.savings')}</span>
            </Link>
          </div>

          <div className="bg-accent rounded-2xl p-8 md:p-12 text-center text-white">
            <ChatBubbleLeftRightIcon className="h-12 w-12 mx-auto mb-4 text-white/80" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3">{t('faqPage.stillLooking')}</h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">{t('faqPage.stillLookingDesc')}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-accent font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                {t('faqPage.contactUs')}
              </Link>
              <Link
                to="/support"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                {t('faqPage.visitSupport')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
