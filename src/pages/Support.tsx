import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PhoneIcon, EnvelopeIcon, ChatBubbleLeftRightIcon, LifebuoyIcon, ClockIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Support() {
  const { t } = useTranslation();

  const supportOptions = [
    {
      icon: PhoneIcon,
      title: t('support.call.title'),
      description: t('support.call.desc'),
      details: t('support.call.detail'),
      action: t('support.call.action'),
      highlight: true,
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: t('support.chat.title'),
      description: t('support.chat.desc'),
      details: t('support.chat.detail'),
      action: t('support.chat.action'),
    },
    {
      icon: EnvelopeIcon,
      title: t('support.email.title'),
      description: t('support.email.desc'),
      details: t('support.email.detail'),
      action: t('support.email.action'),
    },
    {
      icon: LifebuoyIcon,
      title: t('support.branch.title'),
      description: t('support.branch.desc'),
      details: t('support.branch.detail'),
      action: t('support.branch.action'),
    },
  ];

  const faqHighlights = [
    { q: t('support.faq.q1'), link: '/faq' },
    { q: t('support.faq.q2'), link: '/faq' },
    { q: t('support.faq.q3'), link: '/faq' },
    { q: t('support.faq.q4'), link: '/faq' },
  ];

  const supportCategories = [
    { name: 'Accounts', icon: LifebuoyIcon },
    { name: 'Cards', icon: PhoneIcon },
    { name: 'Loans', icon: ChatBubbleLeftRightIcon },
    { name: 'Online Banking', icon: EnvelopeIcon },
    { name: 'Fraud Support', icon: ClockIcon },
    { name: 'Technical Help', icon: MagnifyingGlassIcon },
  ];

  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80')"}}>
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <LifebuoyIcon className="h-12 w-12 text-accent mb-4" />
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t('support.title')}</h1>
            <p className="text-xl text-blue-200 mb-8">
              {t('support.subtitle')}
            </p>
            <div className="relative max-w-xl">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search help articles, FAQs, topics..."
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-2">How can we help you?</h2>
            <p className="text-gray-600">Choose a support category or browse our options below</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {supportCategories.map((cat) => (
              <div key={cat.name} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                <div className="h-1.5 bg-accent" />
                <div className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <cat.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-navy">{cat.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">Get help with {cat.name.toLowerCase()} related issues</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option) => (
              <div
                key={option.title}
                className={`rounded-lg overflow-hidden transition-shadow duration-300 ${
                  option.highlight ? 'bg-accent text-white shadow-lg' : 'bg-white shadow-sm hover:shadow-xl'
                }`}
              >
                <div className="p-6 text-center">
                  <div className={`w-14 h-14 flex items-center justify-center mx-auto mb-4 rounded-full ${
                    option.highlight ? 'bg-white/20' : 'bg-accent/10'
                  }`}>
                    <option.icon className={`h-7 w-7 ${option.highlight ? 'text-white' : 'text-accent'}`} />
                  </div>
                  <h3 className={`text-lg font-bold mb-1 ${option.highlight ? 'text-white' : 'text-navy'}`}>{option.title}</h3>
                  <p className={`text-sm mb-3 ${option.highlight ? 'text-white/80' : 'text-gray-600'}`}>{option.description}</p>
                  <p className={`text-sm font-semibold mb-4 ${option.highlight ? 'text-white' : 'text-accent'}`}>{option.details}</p>
                  <button className={`px-4 py-2 text-sm font-semibold transition-colors cursor-pointer rounded-lg ${
                    option.highlight
                      ? 'bg-white text-accent hover:bg-white/90'
                      : 'bg-navy text-white hover:bg-navy/90'
                  }`}>
                    {option.action}
                  </button>
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
              <p className="text-4xl font-bold text-accent">50K+</p>
              <p className="text-blue-200 mt-1">Customers Served</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent">24/7</p>
              <p className="text-blue-200 mt-1">Support Available</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent">98%</p>
              <p className="text-blue-200 mt-1">Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent">15+</p>
              <p className="text-blue-200 mt-1">Branch Locations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">{t('support.faq.title')}</h2>
              <div className="space-y-3">
                {faqHighlights.map((item) => (
                  <Link
                    key={item.q}
                    to={item.link}
                    className="block bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                  >
                    <p className="text-sm font-medium text-navy">{item.q}</p>
                  </Link>
                ))}
              </div>
              <Link to="/faq" className="inline-flex items-center mt-4 text-accent text-sm font-semibold hover:text-accent/80 transition-colors">
                {t('support.faq.viewAll')} &rarr;
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <ClockIcon className="h-8 w-8 text-accent mb-4"/>
              <h2 className="text-2xl font-bold text-navy mb-4">{t('support.hours.title')}</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">{t('support.hours.mondayFriday')}</span>
                  <span className="font-semibold text-navy">{t('support.hours.weekdayHours')}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">{t('support.hours.saturday')}</span>
                  <span className="font-semibold text-navy">{t('support.hours.saturdayHours')}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">{t('support.hours.sunday')}</span>
                  <span className="font-semibold text-navy">{t('support.hours.closed')}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">{t('support.hours.liveChat')}</span>
                  <span className="font-semibold text-accent">{t('support.hours.liveChatHours')}</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                <p className="text-sm text-navy font-semibold">{t('support.emergency.title')}</p>
                <p className="text-xs text-gray-600 mt-1">{t('support.emergency.desc')}</p>
                <p className="text-sm font-bold text-accent mt-1">{t('support.emergency.phone')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still need help?</h2>
          <p className="text-lg text-white/80 mb-8">Our support team is ready to assist you with any questions or concerns.</p>
          <button className="px-8 py-4 bg-white text-accent font-bold rounded-lg hover:bg-white/90 transition-colors cursor-pointer text-lg">
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
}
