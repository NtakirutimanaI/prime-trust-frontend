import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import CurrencyCalculator from '../components/CurrencyCalculator';
import FAQ from '../components/FAQ';
import {
  BanknotesIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  ReceiptPercentIcon,
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  UserIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  SunIcon,
  WifiIcon,
  StarIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

const services = [
  { icon: BanknotesIcon, titleKey: 'home.loanServices.businessLoans', descKey: 'home.loanServices.businessLoansDesc' },
  { icon: ShieldCheckIcon, titleKey: 'home.loanServices.emergencyLoans', descKey: 'home.loanServices.emergencyLoansDesc' },
  { icon: CreditCardIcon, titleKey: 'home.loanServices.salaryLoans', descKey: 'home.loanServices.salaryLoansDesc' },
  { icon: ReceiptPercentIcon, titleKey: 'home.loanServices.educationLoans', descKey: 'home.loanServices.educationLoansDesc' },
  { icon: CurrencyDollarIcon, titleKey: 'home.loanServices.investmentLoans', descKey: 'home.loanServices.investmentLoansDesc' },
  { icon: BuildingOfficeIcon, titleKey: 'home.loanServices.capitalLoans', descKey: 'home.loanServices.capitalLoansDesc' },
];

const slides = [
  { img: '/img.png' },
  { img: '/img1.png' },
  { img: '/img2.png' },
];

const digitalChannels = [
  { icon: ComputerDesktopIcon, titleKey: 'home.digitalBanking.internet', descKey: 'home.digitalBanking.internetDesc' },
  { icon: DevicePhoneMobileIcon, titleKey: 'home.digitalBanking.mobileApp', descKey: 'home.digitalBanking.mobileAppDesc' },
  { icon: WifiIcon, titleKey: 'home.digitalBanking.ussd', descKey: 'home.digitalBanking.ussdDesc' },
  { icon: BuildingOfficeIcon, titleKey: 'home.digitalBanking.agency', descKey: 'home.digitalBanking.agencyDesc' },
];

const testimonials = [
  { nameKey: 'home.testimonials.1.name', roleKey: 'home.testimonials.1.role', quoteKey: 'home.testimonials.1.quote' },
  { nameKey: 'home.testimonials.2.name', roleKey: 'home.testimonials.2.role', quoteKey: 'home.testimonials.2.quote' },
  { nameKey: 'home.testimonials.3.name', roleKey: 'home.testimonials.3.role', quoteKey: 'home.testimonials.3.quote' },
];

const savingsProducts = [
  { titleKey: 'home.savings.simple.title', rateKey: 'home.savings.simple.rate', featuresKeys: ['home.savings.simple.features.0', 'home.savings.simple.features.1', 'home.savings.simple.features.2'] },
  { titleKey: 'home.savings.auto.title', rateKey: 'home.savings.auto.rate', featuresKeys: ['home.savings.auto.features.0', 'home.savings.auto.features.1', 'home.savings.auto.features.2'] },
  { titleKey: 'home.savings.fixed.title', rateKey: 'home.savings.fixed.rate', featuresKeys: ['home.savings.fixed.features.0', 'home.savings.fixed.features.1', 'home.savings.fixed.features.2'] },
];

const solutions = [
  { icon: UserIcon, titleKey: 'home.solutions.professional', link: '/solutions/professional' },
  { icon: BuildingOfficeIcon, titleKey: 'home.solutions.company', link: '/solutions/company' },
  { icon: GlobeAltIcon, titleKey: 'home.solutions.diaspora', link: '/solutions/diaspora' },
  { icon: SunIcon, titleKey: 'home.solutions.farmer', link: '/solutions/farmer' },
];

function useTypewriter(texts: string[], typingSpeed = 60, deletingSpeed = 30, pauseDuration = 2000) {
  const [displayed, setDisplayed] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    let timeout: number;

    if (!isDeleting && displayed === current) {
      timeout = window.setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayed === '') {
      setIsDeleting(false);
      setTextIndex((i) => (i + 1) % texts.length);
    } else {
      timeout = window.setTimeout(
        () => {
          setDisplayed(
            isDeleting
              ? current.slice(0, displayed.length - 1)
              : current.slice(0, displayed.length + 1)
          );
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => window.clearTimeout(timeout);
  }, [displayed, textIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return { displayed, isDeleting };
}

export default function Home() {
  const { t } = useTranslation();
  const { user } = useAuth();

  const taglines = [
    t('home.hero.taglines.0'),
    t('home.hero.taglines.1'),
    t('home.hero.taglines.2'),
    t('home.hero.taglines.3'),
    t('home.hero.taglines.4'),
  ];

  const { displayed, isDeleting } = useTypewriter(taglines);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <section className="bg-navy text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            <div className="hidden lg:flex flex-col items-center justify-center pr-8">
              <div className="relative w-full max-w-2xl h-[500px] overflow-hidden">
                {slides.map((slide, i) => (
                  <img
                    key={slide.img}
                    src={slide.img}
                    alt={`Slide ${i + 1}`}
                    className={`w-full h-full object-contain transition-opacity duration-700 ease-in-out ${i === current ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
                  />
                ))}
              </div>
              <div className="flex gap-2 mt-4">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 transition-all duration-300 ${i === current ? 'bg-accent-light w-6' : 'bg-white/40 hover:bg-white/60'}`}
                  />
                ))}
              </div>
            </div>
            <div className="animate-fadeIn">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                {t('home.hero.title')} <span className="text-accent-light">{t('home.hero.highlight')}</span>
              </h1>
              <p className="text-xl text-blue-200 mb-2 min-h-8">
                <span>{displayed}</span>
                <span className={`inline-block w-0.5 h-6 bg-accent-light ml-1 align-middle ${isDeleting ? '' : 'animate-pulse'}`} />
              </p>
              <p className="text-blue-200/80 mb-6 max-w-lg">
                {t('home.hero.description')}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  to={user ? '/dashboard' : '/register'}
                  className="relative px-6 py-3 bg-accent text-white font-semibold hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/30 active:scale-95 overflow-hidden group"
                >
                  <span className="relative z-10">{user ? t('home.hero.dashboardButton') : t('home.hero.applyButton')}</span>
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
                <Link
                  to="/loans"
                  className="px-6 py-3 border-2 border-white text-white font-semibold hover:bg-white hover:text-navy transition-all duration-300 active:scale-95"
                >
                  {t('home.hero.learnMore')}
                </Link>
              </div>
              <div className="border-t border-white/20 pt-6" />
            </div>
          </div>
          <div className="hidden lg:flex absolute bottom-4 right-4 flex-col items-end gap-1">
            <p className="text-xs text-blue-200 font-medium flex items-center gap-1 mb-1">{t('home.hero.testimonials')} <ChevronRightIcon className="h-3 w-3" /></p>
            <div className="flex items-center gap-2">
              <img src="/img.png" alt="Testimonial" className="w-12 h-12 rounded-full object-cover border-[3px] border-white shadow-lg cursor-pointer hover:scale-110 transition-transform" />
              <img src="/img1.png" alt="Testimonial" className="w-12 h-12 rounded-full object-cover border-[3px] border-white shadow-lg cursor-pointer hover:scale-110 transition-transform" />
              <img src="/img2.png" alt="Testimonial" className="w-12 h-12 rounded-full object-cover border-[3px] border-white shadow-lg cursor-pointer hover:scale-110 transition-transform" />
              <img src="/img.png" alt="Testimonial" className="w-12 h-12 rounded-full object-cover border-[3px] border-white shadow-lg cursor-pointer hover:scale-110 transition-transform" />
              <img src="/img1.png" alt="Testimonial" className="w-12 h-12 rounded-full object-cover border-[3px] border-white shadow-lg cursor-pointer hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-gray-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[100px]">
          <div className="grid grid-cols-2 md:grid-cols-4 h-full">
            {solutions.map((item, i) => (
              <Link
                key={item.titleKey}
                to={item.link}
                className={`flex items-center justify-center gap-3 h-full group hover:bg-light-gray transition-colors duration-300 ${i < 3 ? 'md:border-r border-gray-200' : ''}`}
              >
                <item.icon className="h-6 w-6 text-accent group-hover:text-accent-dark transition-colors shrink-0" />
                <span className="text-sm font-medium text-navy group-hover:text-accent transition-colors">
                  {t(item.titleKey)}
                </span>
                <ChevronRightIcon className="h-4 w-4 text-gray-400 group-hover:text-accent transition-colors" />
              </Link>
            ))}
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('gallery-modal');
              if (el) el.classList.remove('hidden');
            }}
            className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-accent rounded-full items-center justify-center hover:bg-accent-dark transition-colors shadow-lg z-10 cursor-pointer border-[3px] border-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </section>

      <div id="gallery-modal" className="hidden fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={(e) => { if (e.target === e.currentTarget) e.currentTarget.classList.add('hidden'); }}>
        <div className="relative max-w-4xl w-full bg-white p-4">
          <button onClick={() => document.getElementById('gallery-modal')?.classList.add('hidden')} className="absolute -top-3 -right-3 w-8 h-8 bg-navy rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors cursor-pointer z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </button>
          <div className="grid md:grid-cols-3 gap-4">
            <img src="/img.png" alt="Activity 1" className="w-full h-48 object-cover" />
            <img src="/img1.png" alt="Activity 2" className="w-full h-48 object-cover" />
            <img src="/img2.png" alt="Activity 3" className="w-full h-48 object-cover" />
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-2">
              {t('home.loanServices.title')}
            </h2>
            <p className="text-gray-600">
              {t('home.loanServices.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.titleKey}
                className="bg-light-gray p-6 hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center shrink-0 mt-1 group-hover:bg-accent transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-accent transition-colors duration-300 border-b-2 border-transparent group-hover:border-accent inline-block">
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {t(service.descKey)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-2">{t('home.digitalBanking.title')}</h2>
            <p className="text-gray-600">{t('home.digitalBanking.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {digitalChannels.map((channel) => (
              <div key={channel.titleKey} className="bg-white p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <channel.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{t(channel.titleKey)}</h3>
                <p className="text-sm text-gray-600 mb-4">{t(channel.descKey)}</p>
                <Link
                  to="/register"
                  className="text-primary text-sm font-semibold hover:text-accent transition-colors"
                >
                  {t('home.digitalBanking.getStarted')} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-2">{t('home.testimonials.title')}</h2>
            <p className="text-gray-600">{t('home.testimonials.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.nameKey} className="bg-light-gray p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-accent" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4 italic">&ldquo;{t(testimonial.quoteKey)}&rdquo;</p>
                <div>
                  <p className="font-semibold text-navy text-sm">{t(testimonial.nameKey)}</p>
                  <p className="text-xs text-gray-500">{t(testimonial.roleKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">{t('home.savings.title')}</h2>
            <p className="text-xl text-blue-200">{t('home.savings.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {savingsProducts.map((product) => (
              <div key={product.titleKey} className="bg-white/10 backdrop-blur-sm p-6 text-center hover:bg-white/20 transition-colors">
                <h3 className="text-xl font-bold mb-1">{t(product.titleKey)}</h3>
                <p className="text-4xl font-bold text-accent mb-4">{t(product.rateKey)}</p>
                <p className="text-sm text-blue-200 mb-4">{t('home.savings.annualRate')}</p>
                <ul className="text-sm text-blue-100 space-y-1 mb-6">
                  {product.featuresKeys.map((fk) => (
                    <li key={fk}>{t(fk)}</li>
                  ))}
                </ul>
                <Link
                  to="/register"
                  className="inline-block px-6 py-2 bg-accent text-white font-semibold hover:bg-accent/90 transition-colors"
                >
                  {t('home.savings.openAccount')}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CurrencyCalculator />

      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">{t('home.quickPlus.title')}</h2>
            <p className="text-xl text-blue-200 mb-6 max-w-2xl mx-auto">
              {t('home.quickPlus.description')}
            </p>
            <Link
              to={user ? '/loans' : '/register'}
              className="inline-block px-8 py-3 bg-accent text-white font-semibold hover:bg-accent/90 transition-colors"
            >
              {t('home.quickPlus.learnMore')}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-4">
                {t('home.mobileApp.title')}
              </h2>
              <p className="text-gray-600 mb-6">
                {t('home.mobileApp.description')}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center px-5 py-3 bg-navy text-white hover:bg-primary transition-colors cursor-pointer">
                  <DevicePhoneMobileIcon className="h-5 w-5 mr-2" />
                  <span className="text-sm font-medium">{t('home.mobileApp.ios')}</span>
                </button>
                <button className="flex items-center px-5 py-3 bg-navy text-white hover:bg-primary transition-colors cursor-pointer">
                  <ComputerDesktopIcon className="h-5 w-5 mr-2" />
                  <span className="text-sm font-medium">{t('home.mobileApp.googlePlay')}</span>
                </button>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-64 h-64 bg-primary/10 flex items-center justify-center">
                <DevicePhoneMobileIcon className="h-24 w-24 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
}
