import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MagnifyingGlassIcon, MapPinIcon, QuestionMarkCircleIcon, ChevronDownIcon, XMarkIcon, BuildingOfficeIcon, CreditCardIcon, HomeIcon, TruckIcon, ChartBarIcon, GiftIcon, AcademicCapIcon, ArrowRightIcon, ArrowTrendingDownIcon, BanknotesIcon, BookOpenIcon, BriefcaseIcon, CalculatorIcon, CurrencyDollarIcon, DevicePhoneMobileIcon, DocumentTextIcon, GlobeAltIcon, PhoneIcon, ShieldCheckIcon, TagIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../context/AuthContext';

interface DropdownItem {
  label: string;
  path: string;
  key: string;
}

interface DropdownSection {
  title?: string;
  titleKey?: string;
  items: DropdownItem[];
  highlight?: string;
}

interface Promo {
  image: string;
  title: string;
  desc: string;
  link: string;
  linkText: string;
  titleKey: string;
  descKey: string;
  linkTextKey: string;
}

interface NavItem {
  label: string;
  labelKey: string;
  path?: string;
  dropdown?: DropdownSection[];
  promos?: Promo[];
}

const navItems: NavItem[] = [
  {
    label: 'Accounts',
    labelKey: 'nav.main.accounts',
    dropdown: [
      {
        title: 'Account Types',
        titleKey: 'nav.accountsDropdown.accountTypes',
        items: [
          { label: 'Accounts Overview', path: '/accounts', key: 'nav.accountsDropdown.overview' },
          { label: 'Chequing', path: '/accounts', key: 'nav.accountsDropdown.chequing' },
          { label: 'Savings', path: '/savings', key: 'nav.accountsDropdown.savings' },
          { label: 'Youth & Student', path: '/accounts', key: 'nav.accountsDropdown.youthStudent' },
          { label: 'U.S. Dollar Accounts', path: '/accounts', key: 'nav.accountsDropdown.usDollar' },
          { label: 'Explore All Offers', path: '/accounts', key: 'nav.accountsDropdown.exploreOffers' },
        ],
      },
      {
        title: 'Banking For',
        titleKey: 'nav.accountsDropdown.bankingFor',
        items: [
          { label: 'Newcomers', path: '/accounts', key: 'nav.accountsDropdown.newcomers' },
          { label: 'Youth & Parents', path: '/accounts', key: 'nav.accountsDropdown.youthParents' },
          { label: 'Students', path: '/accounts', key: 'nav.accountsDropdown.students' },
          { label: 'International Students', path: '/accounts', key: 'nav.accountsDropdown.internationalStudents' },
          { label: 'Post Grads', path: '/accounts', key: 'nav.accountsDropdown.postGrads' },
        ],
      },
      {
        title: 'Services',
        titleKey: 'nav.accountsDropdown.services',
        items: [
          { label: 'Overdraft Protection', path: '/accounts', key: 'nav.accountsDropdown.overdraftProtection' },
          { label: 'Global Transfer', path: '/accounts', key: 'nav.accountsDropdown.globalTransfer' },
          { label: 'Access Card', path: '/cards', key: 'nav.accountsDropdown.accessCard' },
          { label: 'Mobile Deposit', path: '/accounts', key: 'nav.accountsDropdown.mobileDeposit' },
          { label: 'Fraud Prevention', path: '/faq', key: 'nav.accountsDropdown.fraudPrevention' },
        ],
      },
    ],
    promos: [
      { image: '/promo-account.jpg', title: 'New to Chequing Offer', desc: 'Get up to $750 in value starting with an eligible Chequing Account. Conditions apply.', link: '/register', linkText: 'View offer details', titleKey: 'nav.accountsPromos.chequingTitle', descKey: 'nav.accountsPromos.chequingDesc', linkTextKey: 'nav.accountsPromos.chequingLink' },
      { image: '/promo-newcomer.jpg', title: 'New to Canada Banking Package', desc: 'Earn up to $1,790 in value when you bank with us as a Newcomer. Conditions apply.', link: '/register', linkText: 'View offer details', titleKey: 'nav.accountsPromos.newcomerTitle', descKey: 'nav.accountsPromos.newcomerDesc', linkTextKey: 'nav.accountsPromos.newcomerLink' },
    ],
  },
  {
    label: 'Credit Cards',
    labelKey: 'nav.main.creditCards',
    dropdown: [
      {
        title: 'Card Types',
        titleKey: 'nav.cardsDropdown.cardTypes',
        items: [
          { label: 'Explore All Credit Cards', path: '/cards', key: 'nav.cardsDropdown.exploreAll' },
          { label: 'Promotions & Offers', path: '/cards', key: 'nav.cardsDropdown.promotions' },
          { label: 'Travel Rewards', path: '/cards', key: 'nav.cardsDropdown.travelRewards' },
          { label: 'Cash Back', path: '/cards', key: 'nav.cardsDropdown.cashBack' },
          { label: 'No Annual Fee', path: '/cards', key: 'nav.cardsDropdown.noAnnualFee' },
          { label: 'Low Rate', path: '/cards', key: 'nav.cardsDropdown.lowRate' },
          { label: 'U.S. Dollar', path: '/cards', key: 'nav.cardsDropdown.usDollar' },
          { label: 'Business', path: '/cards', key: 'nav.cardsDropdown.business' },
        ],
      },
      {
        title: 'Credit Cards For',
        titleKey: 'nav.cardsDropdown.for',
        items: [
          { label: 'Students', path: '/cards', key: 'nav.cardsDropdown.students' },
          { label: 'Post Grads', path: '/cards', key: 'nav.cardsDropdown.postGrads' },
          { label: 'New to Canada', path: '/cards', key: 'nav.cardsDropdown.newToCanada' },
        ],
      },
      {
        title: 'Cardholder Services',
        titleKey: 'nav.cardsDropdown.cardholderServices',
        items: [
          { label: 'Getting Started', path: '/cards', key: 'nav.cardsDropdown.gettingStarted' },
          { label: 'Rewards Program', path: '/rewards', key: 'nav.cardsDropdown.rewardsProgram' },
          { label: 'Mobile Wallet', path: '/cards', key: 'nav.cardsDropdown.mobileWallet' },
          { label: 'Check Your Credit Score', path: '/cards', key: 'nav.cardsDropdown.checkCreditScore' },
        ],
      },
      {
        title: 'Learning Resources',
        titleKey: 'nav.cardsDropdown.learningResources',
        items: [
          { label: 'Basics of Credit Cards', path: '/cards', key: 'nav.cardsDropdown.basics' },
          { label: 'Introduction to Card Points', path: '/cards', key: 'nav.cardsDropdown.introPoints' },
          { label: 'Building Your Credit', path: '/cards', key: 'nav.cardsDropdown.buildingCredit' },
          { label: 'Learn More', path: '/cards', key: 'nav.cardsDropdown.learnMore' },
        ],
      },
    ],
    promos: [
      { image: '/promo-card.jpg', title: 'PRIME TRUST Rewards Visa Infinite', desc: 'Up to $1,350 in value including up to 40,000 rewards points. Conditions apply.', link: '/register', linkText: 'View offer', titleKey: 'nav.cardsPromos.rewardsTitle', descKey: 'nav.cardsPromos.rewardsDesc', linkTextKey: 'nav.cardsPromos.rewardsLink' },
      { image: '/promo-travel.jpg', title: 'PRIME TRUST First Class Travel Visa', desc: 'Earn up to $1,300 in value with up to 146,000 rewards points. Conditions apply.', link: '/register', linkText: 'View offer', titleKey: 'nav.cardsPromos.travelTitle', descKey: 'nav.cardsPromos.travelDesc', linkTextKey: 'nav.cardsPromos.travelLink' },
    ],
  },
  {
    label: 'Mortgages',
    labelKey: 'nav.main.mortgages',
    dropdown: [
      {
        title: 'Mortgages',
        titleKey: 'nav.mortgagesDropdown.mortgages',
        items: [
          { label: 'Explore All Mortgage Options', path: '/mortgages', key: 'nav.mortgagesDropdown.exploreAll' },
          { label: "Today's Mortgage Rates", path: '/mortgages', key: 'nav.mortgagesDropdown.todayRates' },
          { label: 'Home Equity Line of Credit', path: '/mortgages', key: 'nav.mortgagesDropdown.homeEquityLOC' },
          { label: 'Flexible Payment Features', path: '/mortgages', key: 'nav.mortgagesDropdown.flexiblePayment' },
          { label: 'Mortgage Offers', path: '/mortgages', key: 'nav.mortgagesDropdown.offers' },
          { label: 'Mortgage Protection', path: '/mortgages', key: 'nav.mortgagesDropdown.protection' },
        ],
      },
      {
        title: "What's Next for You?",
        titleKey: 'nav.mortgagesDropdown.whatsNext',
        items: [
          { label: 'Buy My First Home', path: '/mortgages', key: 'nav.mortgagesDropdown.buyFirstHome' },
          { label: 'Buy My Next Property', path: '/mortgages', key: 'nav.mortgagesDropdown.buyNextProperty' },
          { label: 'Renew My Mortgage', path: '/mortgages', key: 'nav.mortgagesDropdown.renew' },
          { label: 'Refinance My Mortgage', path: '/mortgages', key: 'nav.mortgagesDropdown.refinance' },
          { label: 'Move My Mortgage to Us', path: '/mortgages', key: 'nav.mortgagesDropdown.moveToUs' },
          { label: 'Newcomer to Canada', path: '/mortgages', key: 'nav.mortgagesDropdown.newcomer' },
        ],
      },
      {
        title: 'Tools & Resources',
        titleKey: 'nav.mortgagesDropdown.tools',
        items: [
          { label: 'All Mortgage Tools', path: '/mortgages', key: 'nav.mortgagesDropdown.allTools' },
          { label: 'Mortgage Payment Calculator', path: '/mortgages', key: 'nav.mortgagesDropdown.paymentCalculator' },
          { label: 'Mortgage Affordability Calculator', path: '/mortgages', key: 'nav.mortgagesDropdown.affordabilityCalculator' },
          { label: 'Mortgage Pre-Approval', path: '/mortgages', key: 'nav.mortgagesDropdown.preApproval' },
          { label: 'Connect with a Specialist', path: '/mortgages', key: 'nav.mortgagesDropdown.connectSpecialist' },
        ],
      },
    ],
    promos: [
      { image: '/promo-mortgage.jpg', title: 'Mortgage Direct', desc: "Answer a few questions and we'll call you to match you with a Mortgage Specialist.", link: '/mortgages', linkText: 'Request a call', titleKey: 'nav.mortgagesPromos.directTitle', descKey: 'nav.mortgagesPromos.directDesc', linkTextKey: 'nav.mortgagesPromos.directLink' },
      { image: '/promo-cashback.jpg', title: 'New Mortgage Cashback Offer', desc: 'Get up to $5,100 cashback with a new mortgage. Conditions apply.', link: '/mortgages', linkText: 'View offer details', titleKey: 'nav.mortgagesPromos.cashbackTitle', descKey: 'nav.mortgagesPromos.cashbackDesc', linkTextKey: 'nav.mortgagesPromos.cashbackLink' },
    ],
  },
  {
    label: 'Loans & Lines of Credit',
    labelKey: 'nav.main.loans',
    dropdown: [
      {
        title: 'Loans and Lines of Credit',
        titleKey: 'nav.loansDropdown.loansAndLOC',
        items: [
          { label: 'Explore All', path: '/loans', key: 'nav.loansDropdown.exploreAll' },
          { label: 'Personal Loan', path: '/loans', key: 'nav.loansDropdown.personalLoan' },
          { label: 'Vehicle Loan', path: '/loans', key: 'nav.loansDropdown.vehicleLoan' },
          { label: 'Personal Line of Credit', path: '/loans', key: 'nav.loansDropdown.personalLOC' },
          { label: 'Home Equity Line of Credit', path: '/loans', key: 'nav.loansDropdown.homeEquityLOC' },
        ],
      },
      {
        title: 'Student Borrowing',
        titleKey: 'nav.loansDropdown.studentBorrowing',
        items: [
          { label: 'Explore All', path: '/loans', key: 'nav.loansDropdown.exploreAll' },
          { label: 'Student Line of Credit', path: '/loans', key: 'nav.loansDropdown.studentLOC' },
          { label: 'Professional Student LOC', path: '/loans', key: 'nav.loansDropdown.professionalLOC' },
          { label: 'Healthcare Student LOC', path: '/loans', key: 'nav.loansDropdown.healthcareLOC' },
        ],
      },
      {
        title: 'Tools & Resources',
        titleKey: 'nav.loansDropdown.tools',
        items: [
          { label: 'Help Me Choose', path: '/loans', key: 'nav.loansDropdown.helpMeChoose' },
          { label: 'Check Your Credit Score', path: '/loans', key: 'nav.loansDropdown.checkCreditScore' },
          { label: 'Loan vs Line of Credit Calculator', path: '/loans', key: 'nav.loansDropdown.loanVsLOC' },
          { label: 'Help Me Manage Debt', path: '/loans', key: 'nav.loansDropdown.manageDebt' },
        ],
      },
    ],
    promos: [
      { image: '/promo-borrow.jpg', title: 'Borrowing Advice', desc: 'Get helpful insights and tips on how to borrow wisely and make informed financial decisions.', link: '/loans', linkText: 'Learn more', titleKey: 'nav.loansPromos.borrowingTitle', descKey: 'nav.loansPromos.borrowingDesc', linkTextKey: 'nav.loansPromos.borrowingLink' },
      { image: '/promo-student.jpg', title: 'Student Advice', desc: 'Get expert advice on building a student budget and other important financial topics.', link: '/loans', linkText: 'Learn more', titleKey: 'nav.loansPromos.studentTitle', descKey: 'nav.loansPromos.studentDesc', linkTextKey: 'nav.loansPromos.studentLink' },
    ],
  },
  {
    label: 'Personal Investing',
    labelKey: 'nav.main.investing',
    dropdown: [
      {
        title: 'Registered Accounts & Plans',
        titleKey: 'nav.investingDropdown.registeredAccounts',
        items: [
          { label: 'Investing Overview', path: '/investments', key: 'nav.investingDropdown.overview' },
          { label: 'Promotions & Offers', path: '/investments', key: 'nav.investingDropdown.promotions' },
          { label: 'Tax-Free Savings (TFSA)', path: '/investments', key: 'nav.investingDropdown.tfsa' },
          { label: 'Retirement Savings (RRSP)', path: '/investments', key: 'nav.investingDropdown.rrsp' },
          { label: 'First Home Savings (FHSA)', path: '/investments', key: 'nav.investingDropdown.fhsa' },
          { label: 'Education Savings (RESP)', path: '/investments', key: 'nav.investingDropdown.resp' },
        ],
      },
      {
        title: 'Investing Products',
        titleKey: 'nav.investingDropdown.products',
        items: [
          { label: 'Explore All Products', path: '/investments', key: 'nav.investingDropdown.exploreAll' },
          { label: 'GICs', path: '/investments', key: 'nav.investingDropdown.gics' },
          { label: 'Mutual Funds', path: '/investments', key: 'nav.investingDropdown.mutualFunds' },
          { label: 'Trade & Invest Yourself', path: '/investments', key: 'nav.investingDropdown.tradeYourself' },
          { label: 'Invest with an Advisor', path: '/investments', key: 'nav.investingDropdown.investAdvisor' },
        ],
      },
      {
        title: 'Tools & Resources',
        titleKey: 'nav.investingDropdown.tools',
        items: [
          { label: 'Compound Interest Calculator', path: '/investments', key: 'nav.investingDropdown.compoundCalc' },
          { label: 'TFSA Calculator', path: '/investments', key: 'nav.investingDropdown.tfsaCalc' },
          { label: 'RRSP Calculator', path: '/investments', key: 'nav.investingDropdown.rrspCalc' },
          { label: 'GIC Selector Tool', path: '/investments', key: 'nav.investingDropdown.gicSelector' },
          { label: 'Net Worth Calculator', path: '/investments', key: 'nav.investingDropdown.netWorthCalc' },
        ],
      },
    ],
    promos: [
      { image: '/promo-invest.jpg', title: 'Investor Education', desc: 'Find articles that will help you invest with confidence and make informed financial decisions.', link: '/investments', linkText: 'Learn about investing', titleKey: 'nav.investingPromos.educationTitle', descKey: 'nav.investingPromos.educationDesc', linkTextKey: 'nav.investingPromos.educationLink' },
    ],
  },
  {
    label: 'Insurance',
    labelKey: 'nav.main.insurance',
    dropdown: [
      {
        title: 'Credit Protection Plans',
        titleKey: 'nav.insuranceDropdown.creditProtection',
        items: [
          { label: 'Explore All Protection Plans', path: '/insurance', key: 'nav.insuranceDropdown.exploreAll' },
          { label: 'Mortgage Protection', path: '/insurance', key: 'nav.insuranceDropdown.mortgageProtection' },
          { label: 'Loan Protection', path: '/insurance', key: 'nav.insuranceDropdown.loanProtection' },
          { label: 'Credit Card Payment Protection', path: '/insurance', key: 'nav.insuranceDropdown.cardPaymentProtection' },
        ],
      },
      {
        title: 'Travel Insurance Plans',
        titleKey: 'nav.insuranceDropdown.travelInsurance',
        items: [
          { label: 'Explore All Travel Insurance', path: '/insurance', key: 'nav.insuranceDropdown.exploreAllTravel' },
          { label: 'Single Trip Plan', path: '/insurance', key: 'nav.insuranceDropdown.singleTrip' },
          { label: 'Annual Trip Plan', path: '/insurance', key: 'nav.insuranceDropdown.annualTrip' },
          { label: 'Trip Cancellation Insurance', path: '/insurance', key: 'nav.insuranceDropdown.tripCancellation' },
        ],
      },
      {
        title: 'Tools & Resources',
        titleKey: 'nav.insuranceDropdown.tools',
        items: [
          { label: 'Protection Plans Assessment', path: '/insurance', key: 'nav.insuranceDropdown.assessment' },
          { label: 'Credit Card Travel Insurance Check', path: '/insurance', key: 'nav.insuranceDropdown.travelCheck' },
        ],
      },
    ],
    promos: [
      { image: '/promo-claim.jpg', title: 'File a Claim', desc: "We're ready to guide you every step of the way when you need to file a protection claim.", link: '/insurance', linkText: 'Learn about filing', titleKey: 'nav.insurancePromos.claimTitle', descKey: 'nav.insurancePromos.claimDesc', linkTextKey: 'nav.insurancePromos.claimLink' },
    ],
  },
  {
    label: 'Advice',
    labelKey: 'nav.main.advice',
    path: '/advice',
  },
];

function getLinkIcon(label: string) {
  if (/^(Overview|Explore|View All|All)/.test(label)) return [MagnifyingGlassIcon, 'text-green-600'] as const;
  if (/Chequing/.test(label)) return [CreditCardIcon, 'text-green-600'] as const;
  if (/Savings/.test(label)) return [BanknotesIcon, 'text-green-600'] as const;
  if (/Youth|Student/.test(label)) return [AcademicCapIcon, 'text-green-600'] as const;
  if (/U\.S\.|Dollar|Cash Back|Currency/.test(label)) return [CurrencyDollarIcon, 'text-green-600'] as const;
  if (/Offer/.test(label)) return [TagIcon, 'text-green-600'] as const;
  if (/Newcomer|International|Global|Transfer/.test(label)) return [GlobeAltIcon, 'text-green-600'] as const;
  if (/Parents/.test(label)) return [UserGroupIcon, 'text-green-600'] as const;
  if (/Post.?Grad/.test(label)) return [BriefcaseIcon, 'text-green-600'] as const;
  if (/Overdraft|Fraud/.test(label)) return [ShieldCheckIcon, 'text-green-600'] as const;
  if (/Wallet/.test(label)) return [DevicePhoneMobileIcon, 'text-green-600'] as const;
  if (/Deposit/.test(label)) return [BanknotesIcon, 'text-green-600'] as const;
  if (/Travel/.test(label)) return [GlobeAltIcon, 'text-green-600'] as const;
  if (/Rewards/.test(label)) return [GiftIcon, 'text-green-600'] as const;
  if (/Annual Fee|Low Rate/.test(label)) return [ArrowTrendingDownIcon, 'text-green-600'] as const;
  if (/Business/.test(label)) return [BriefcaseIcon, 'text-green-600'] as const;
  if (/Getting Started|Basics|Introduction|Learn|Education/.test(label)) return [BookOpenIcon, 'text-green-600'] as const;
  if (/Credit Score/.test(label)) return [DocumentTextIcon, 'text-green-600'] as const;
  if (/Building Credit/.test(label)) return [ChartBarIcon, 'text-green-600'] as const;
  if (/Mortgage|Home(?!\s*Equity)|Buy|Property/.test(label)) return [HomeIcon, 'text-green-600'] as const;
  if (/Home Equity/.test(label)) return [CreditCardIcon, 'text-green-600'] as const;
  if (/Renew|Refinance|Move/.test(label)) return [ArrowRightIcon, 'text-green-600'] as const;
  if (/Calculator|Affordability|Selector|Assessment/.test(label)) return [CalculatorIcon, 'text-green-600'] as const;
  if (/Pre.?Approval|Specialist/.test(label)) return [PhoneIcon, 'text-green-600'] as const;
  if (/Personal Loan|Loan|Borrow|Line of Credit|LOC|Debt/.test(label)) return [CurrencyDollarIcon, 'text-green-600'] as const;
  if (/Vehicle|Car/.test(label)) return [TruckIcon, 'text-green-600'] as const;
  if (/Manage/.test(label)) return [ChartBarIcon, 'text-green-600'] as const;
  if (/GIC|Mutual|ETF|Trade|Invest|TFSA|RRSP|FHSA|RESP|RDSP|RRIF/.test(label)) return [ChartBarIcon, 'text-green-600'] as const;
  if (/Compound|Net Worth|Cash Flow/.test(label)) return [CalculatorIcon, 'text-green-600'] as const;
  if (/Insurance|Trip/.test(label)) return [ShieldCheckIcon, 'text-green-600'] as const;
  if (/File|Claim/.test(label)) return [DocumentTextIcon, 'text-green-600'] as const;
  return [BuildingOfficeIcon, 'text-green-600'] as const;
}

const utilityLabels = [
  { label: 'Personal', key: 'nav.utility.personal', path: '/' },
  { label: 'Small Business', key: 'nav.utility.smallBusiness', path: '/small-business' },
  { label: 'Commercial', key: 'nav.utility.commercial', path: '/commercial' },
  { label: 'Wealth', key: 'nav.utility.wealth', path: '/wealth' },
  { label: 'Institutional', key: 'nav.utility.institutional', path: '/institutional' },
  { label: 'About Prime Trust Finance', key: 'nav.utility.about', path: '/about' },
  { label: 'Promotions', key: 'nav.utility.promotions', path: '/promotions' },
];

const mobileMainLinks = [
  { label: 'Personal', key: 'nav.utility.personal', path: '/' },
  { label: 'Small Business', key: 'nav.utility.smallBusiness', path: '/small-business' },
  { label: 'Commercial', key: 'nav.utility.commercial', path: '/commercial' },
  { label: 'Wealth', key: 'nav.utility.wealth', path: '/wealth' },
  { label: 'Institutional', key: 'nav.utility.institutional', path: '/institutional' },
  { label: 'About Prime Trust Finance', key: 'nav.utility.about', path: '/about' },
  { label: 'Promotions', key: 'nav.utility.promotions', path: '/promotions' },
];

const langCodeMap: Record<string, string> = {
  EN: 'en',
  FR: 'fr',
  KINY: 'rw',
};

const langLabelMap: Record<string, string> = {
  en: 'EN',
  fr: 'FR',
  rw: 'KINY',
};

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { user } = useAuth();
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const languages = ['EN', 'FR', 'KINY'];

  const currentLangLabel = langLabelMap[i18n.language] || 'EN';

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
        setLangOpen(false);
        setLocationOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleMouseEnter(label: string) {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setActiveDropdown(label);
  }

  function handleMouseLeave() {
    dropdownTimer.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  }

  function handleLangChange(code: string) {
    const langCode = langCodeMap[code];
    if (langCode) {
      i18n.changeLanguage(langCode);
    }
    setLangOpen(false);
  }

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 bg-white z-50">
      {/* Row 1 - Utility nav */}
      <div className="bg-navy text-white text-xs hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-7">
          <div className="flex items-center gap-4">
            {utilityLabels.slice(0, 6).map((item) => (
              <Link key={item.key} to={item.path} className="hover:underline">{t(item.key)}</Link>
            ))}
          </div>
          <Link to="/promotions" className="hover:underline"><GiftIcon className="h-3.5 w-3.5 inline mr-1 -mt-0.5" />{t('nav.utility.promotions')}</Link>
        </div>
      </div>

      <div className="relative">
        {/* Logo column spanning header + nav rows */}
        <Link to="/" className="hidden lg:flex absolute left-0 inset-y-0 items-center gap-2 pl-4 sm:pl-6 lg:pl-8 z-10">
          <img src="/logo.png" alt="PRIME TRUST FINANCE" className="h-24 w-auto" />
          <span className="text-primary font-bold text-base whitespace-nowrap">{t('nav.logo')}</span>
        </Link>

        {/* Main header row */}
        <div className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-[72px]">
              <Link to="/" className="flex items-center gap-2 shrink-0 lg:hidden">
                <img src="/logo.png" alt="PRIME TRUST FINANCE" className="h-9 w-auto" />
                <span className="hidden sm:inline text-primary font-bold text-sm whitespace-nowrap">{t('nav.logo')}</span>
              </Link>

              {/* Spacer for logo on desktop — matches logo width */}
              <div className="hidden lg:block shrink-0 lg:w-[200px] xl:w-[280px]" />

              {/* Search icon near Contact Us */}
              <div className="hidden lg:flex items-center gap-6">
                <button
                  onClick={() => setSearchOpen(true)}
                  className="text-navy hover:text-red-600 transition-colors cursor-pointer"
                  aria-label={t('nav.actions.search')}
                >
                  <MagnifyingGlassIcon className="h-5 w-5" />
                </button>
                <div className="relative">
                  <button
                    onClick={() => setLocationOpen(!locationOpen)}
                    className="text-navy hover:text-red-600 transition-colors cursor-pointer"
                    aria-label={t('nav.actions.findBranch')}
                  >
                    <MapPinIcon className="h-5 w-5" />
                  </button>
                  {locationOpen && (
                    <div className="absolute top-full right-0 mt-2 bg-white shadow-xl border border-gray-200 z-50 w-72">
                      <div className="relative p-4 pt-8 space-y-3">
                        <button
                          onClick={() => setLocationOpen(false)}
                          className="absolute top-2 right-2 p-1 text-gray-400 hover:text-navy transition-colors cursor-pointer"
                          aria-label={t('common.close')}
                        >
                          <XMarkIcon className="h-4 w-4" />
                        </button>
                        <div>
                          <p className="font-semibold text-navy text-sm">{t('nav.location.visitUs')}</p>
                          <p className="text-xs text-gray-600 mt-1">{t('nav.location.address')}</p>
                        </div>
                        <div className="border-t pt-3">
                          <p className="font-semibold text-navy text-sm">{t('nav.location.callUs')}</p>
                          <p className="text-xs text-gray-600 mt-1">{t('nav.location.phone')}</p>
                        </div>
                        <div className="border-t pt-3">
                          <p className="font-semibold text-navy text-sm">{t('nav.location.email')}</p>
                          <p className="text-xs text-gray-600 mt-1">{t('nav.location.emailAddress')}</p>
                        </div>
                        <div className="border-t pt-3">
                          <p className="font-semibold text-navy text-sm">{t('nav.location.workingHours')}</p>
                          <p className="text-xs text-gray-600 mt-1">{t('nav.location.hours')}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <Link to="/support" className="text-navy hover:text-red-600 transition-colors cursor-pointer" aria-label={t('nav.actions.help')}>
                  <QuestionMarkCircleIcon className="h-5 w-5" />
                </Link>

                <div className="relative">
                  <button
                    onClick={() => setLangOpen(!langOpen)}
                    className="flex items-center gap-1 text-sm font-semibold text-navy hover:text-red-600 transition-colors cursor-pointer"
                  >
                    {currentLangLabel}
                    <ChevronDownIcon className="h-3 w-3" />
                  </button>
                  {langOpen && (
                    <div className="absolute top-full right-0 mt-2 bg-white shadow-xl py-1 w-24 border z-50">
                      {languages.map((l) => (
                        <button
                          key={l}
                          onClick={() => handleLangChange(l)}
                          className={`block w-full text-left px-4 py-2 text-sm hover:bg-light-gray transition-colors cursor-pointer ${currentLangLabel === l ? 'text-red-600 font-semibold' : 'text-navy'}`}
                        >
                          {l}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="h-6 w-px bg-gray-300" />

                {user ? (
                  <Link to="/dashboard" className="text-sm font-semibold text-red-600 hover:text-red-700 transition-colors">{t('nav.actions.dashboard')}</Link>
                ) : (
                  <Link to="/login" className="text-sm font-semibold bg-accent text-white px-3 py-1.5 hover:bg-accent/90 transition-colors">{t('nav.actions.signIn')}</Link>
                )}
              </div>

              <button
                className="lg:hidden text-navy cursor-pointer"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search overlay */}
        {searchOpen && (
          <div className="hidden lg:block absolute left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pl-72 lg:pr-8 py-3">
              <div className="relative flex items-center">
                <MagnifyingGlassIcon className="absolute left-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={t('nav.actions.search') + '...'}
                  autoFocus
                  className="w-full border border-gray-300 pl-10 pr-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50"
                />
                <button onClick={() => setSearchOpen(false)} className="absolute right-2 p-1 text-gray-400 hover:text-navy transition-colors cursor-pointer">
                  <XMarkIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Navigation row with mega-menu dropdowns */}
        <div className="hidden lg:block border-b border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex items-center h-12 justify-end">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.dropdown ? (
                    <button
                      className={`px-3 xl:px-4 py-3 text-xs xl:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap border-b-2 border-transparent hover:border-yellow-400 ${
                        activeDropdown === item.label
                          ? 'text-navy border-yellow-400'
                          : 'text-navy'
                      }`}
                    >
                      {t(item.labelKey)}
                      <ChevronDownIcon className="inline h-3 w-3 ml-1" />
                    </button>
                  ) : (
                    <Link
                      to={item.path || '#'}
                      className="px-3 xl:px-4 py-3 text-xs xl:text-sm font-medium text-navy transition-colors inline-block whitespace-nowrap"
                    >
                      {t(item.labelKey)}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Full-width dropdown overlay */}
            {navItems.map((item) => {
              const featured: Record<string, { img: string; icon: any; title: string; desc: string; link: string }> = {
                Accounts: { img: 'photo-1486406146926-c627a92ad1ab', icon: BuildingOfficeIcon, title: t('nav.main.accounts'), desc: t('nav.accountsPromos.chequingDesc'), link: '/accounts' },
                'Credit Cards': { img: 'photo-1556742049-0cfed4f6a45d', icon: CreditCardIcon, title: t('nav.main.creditCards'), desc: t('nav.cardsPromos.rewardsDesc'), link: '/cards' },
                Mortgages: { img: 'photo-1560518883-ce09059eeffa', icon: HomeIcon, title: t('nav.main.mortgages'), desc: t('nav.mortgagesPromos.directDesc'), link: '/mortgages' },
                'Loans & Lines of Credit': { img: 'photo-1563013544-824ae1b704d3', icon: CurrencyDollarIcon, title: t('nav.main.loans'), desc: t('nav.loansPromos.borrowingDesc'), link: '/loans' },
                'Personal Investing': { img: 'photo-1611974789855-9c2a0a7236a3', icon: ChartBarIcon, title: t('nav.main.investing'), desc: t('nav.investingPromos.educationDesc'), link: '/investments' },
                Insurance: { img: 'photo-1450101499163-c8848c66ca85', icon: ShieldCheckIcon, title: t('nav.main.insurance'), desc: t('nav.insurancePromos.claimDesc'), link: '/insurance' },
              };
              const f = featured[item.label];
              return item.dropdown && activeDropdown === item.label && (
                <div
                  key={`dd-${item.label}`}
                  className="absolute left-0 right-0 top-full bg-white shadow-xl border border-gray-200 rounded-b-lg z-50 animate-fadeIn"
                  onMouseEnter={() => { if (dropdownTimer.current) clearTimeout(dropdownTimer.current); setActiveDropdown(item.label); }}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex">
                    <div className="w-64 shrink-0 bg-gradient-to-br from-navy to-primary p-6 text-white flex flex-col relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{backgroundImage: f ? `url('https://images.unsplash.com/${f.img}?w=400&q=80')` : 'none'}} />
                      <div className="relative z-10 flex flex-col h-full">
                        {f && (
                          <>
                            <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                              <f.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                            <p className="text-sm text-white/70 leading-relaxed flex-1">{f.desc}</p>
                            <Link to={f.link} className="inline-flex items-center gap-1.5 text-sm font-semibold text-yellow-400 hover:text-yellow-300 mt-4 transition-colors">
                              {t('nav.accountsPromos.chequingLink')} <ArrowRightIcon className="w-3.5 h-3.5" />
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="grid grid-cols-3 gap-6">
                        {item.dropdown.map((section, si) => (
                          <div key={si}>
                            {section.title && (
                              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 pb-2 border-b border-gray-100">
                                {section.titleKey ? t(section.titleKey) : section.title}
                              </p>
                            )}
                            {section.items.length > 0 && (
                              <ul className="space-y-0.5">
                                {section.items.map((link) => {
                                  const [LinkIcon, iconColor] = getLinkIcon(link.label);
                                  return (
                                    <li key={link.label}>
                                      <Link
                                        to={link.path}
                                        className="flex items-center gap-3 px-2 py-1.5 text-sm text-gray-700 hover:bg-light-gray rounded-lg transition-all group"
                                      >
                                        <span className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm shrink-0 transition-all">
                                          <LinkIcon className={`h-3.5 w-3.5 ${iconColor}`} />
                                        </span>
                                        {t(link.key)}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {item.promos && item.promos.length > 0 && (
                    <div className="border-t border-gray-200 px-6 py-4 bg-light-gray">
                      <div className="grid grid-cols-2 gap-4">
                        {item.promos.map((promo, pi) => {
                          const promoImgs = ['photo-1554224155-8d04cb21cd6c', 'photo-1563013544-824ae1b704d3', 'photo-1579621970563-ebec7560ff3e', 'photo-1639322537228-f71034b1c2f1'];
                          return (
                            <div key={pi} className="relative rounded-lg overflow-hidden group cursor-pointer">
                              <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/${promoImgs[pi % promoImgs.length]}?w=400&q=80')`}} />
                              <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-navy/40 group-hover:from-navy/90 transition-all duration-300" />
                              <div className="relative p-4 flex items-center gap-4">
                                <div className="min-w-0 flex-1">
                                  <h4 className="font-semibold text-sm text-white">{t(promo.titleKey)}</h4>
                                  <p className="text-xs text-white/70 mt-0.5 line-clamp-2">{t(promo.descKey)}</p>
                                </div>
                                <Link to={promo.link} className="shrink-0 px-3 py-1.5 bg-white text-navy text-xs font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap shadow-sm">
                                  {t(promo.linkTextKey)}
                                </Link>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 border-b">
            <div className="relative flex items-center">
              {searchOpen ? (
                <div className="relative flex-1">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder={t('nav.actions.search') + '...'}
                    autoFocus
                    className="w-full border border-gray-300 pl-10 pr-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50"
                  />
                  <button onClick={() => setSearchOpen(false)} className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-navy transition-colors cursor-pointer">
                    <XMarkIcon className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="flex items-center justify-center w-full py-2 text-navy hover:text-red-600 transition-colors cursor-pointer"
                >
                  <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
                  <span className="text-sm font-medium">{t('nav.actions.search')}</span>
                </button>
              )}
            </div>
          </div>

          <div className="px-4 py-2 border-b">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{t('nav.actions.language')}</p>
            <div className="flex gap-2">
              {languages.map((l) => (
                <button
                  key={l}
                  onClick={() => handleLangChange(l)}
                  className={`px-3 py-1 text-sm cursor-pointer ${currentLangLabel === l ? 'bg-accent text-white' : 'bg-light-gray text-navy'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div className="px-4 py-2 border-b">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{t('nav.mobile.main')}</p>
            {mobileMainLinks.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className="block py-2 text-sm text-navy hover:text-red-600"
                onClick={() => setMobileOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
          </div>

          <div className="px-4 py-2 border-b">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <MobileDropdownItem item={item} onClose={() => setMobileOpen(false)} />
                ) : (
                  <Link
                    to={item.path || '#'}
                    className="block py-2 text-sm font-medium text-navy hover:text-red-600"
                    onClick={() => setMobileOpen(false)}
                  >
                    {t(item.labelKey)}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="px-4 py-3 border-b">
            <button
              onClick={() => setLocationOpen(!locationOpen)}
              className="flex items-center gap-2 py-2 text-sm text-navy hover:text-red-600 w-full cursor-pointer"
            >
              <MapPinIcon className="h-4 w-4" />
              {t('nav.mobile.findBranch')}
              <ChevronDownIcon className={`h-4 w-4 ml-auto transition-transform ${locationOpen ? 'rotate-180' : ''}`} />
            </button>
            {locationOpen && (
              <div className="pl-6 pb-2 space-y-2 text-xs text-gray-600">
                <p><span className="font-semibold text-navy">{t('nav.mobile.visitUs')}</span><br />{t('nav.location.address')}</p>
                <p><span className="font-semibold text-navy">{t('nav.mobile.callUs')}</span><br />{t('nav.location.phone')}</p>
                <p><span className="font-semibold text-navy">{t('nav.mobile.email')}</span><br />{t('nav.location.emailAddress')}</p>
                <p><span className="font-semibold text-navy">{t('nav.mobile.hours')}</span><br />{t('nav.location.hours')}</p>
              </div>
            )}
            <Link to="/support" className="flex items-center gap-2 py-2 text-sm text-navy hover:text-red-600" onClick={() => setMobileOpen(false)}>
              <QuestionMarkCircleIcon className="h-4 w-4" />
              {t('nav.mobile.help')}
            </Link>
          </div>

          <div className="px-4 py-3 space-y-2">
            {user ? (
              <Link to="/dashboard" className="block text-center px-4 py-2 bg-red-600 text-white" onClick={() => setMobileOpen(false)}>{t('nav.mobile.dashboard')}</Link>
            ) : (
              <Link to="/login" className="block text-center px-4 py-2 bg-accent text-white font-medium" onClick={() => setMobileOpen(false)}>{t('nav.mobile.signIn')}</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

function MobileDropdownItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  if (!item.dropdown) return null;

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-2 text-sm font-medium text-navy hover:text-red-600 cursor-pointer"
      >
        {t(item.labelKey)}
        <ChevronDownIcon className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pl-4 pb-2 space-y-1">
          {item.dropdown.map((section, si) => (
            <div key={si}>
              {section.title && (
                <p className="text-[11px] text-gray-500 uppercase tracking-wider mt-2 mb-1">{section.titleKey ? t(section.titleKey) : section.title}</p>
              )}
              {section.items.map((link) => {
                const [LinkIcon, iconColor] = getLinkIcon(link.label);
                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="flex items-center gap-2 py-1.5 text-sm text-gray-700 hover:text-red-600"
                    onClick={onClose}
                  >
                    <LinkIcon className={`h-4 w-4 shrink-0 ${iconColor}`} />
                    {t(link.key)}
                  </Link>
                );
              })}
            </div>
          ))}
          {item.promos && item.promos.length > 0 && (
            <div className="mt-3 pt-3 border-t border-gray-200">
              {item.promos.map((promo, pi) => {
                const pBg = promo.title.includes('Chequing') ? 'from-blue-50 to-indigo-100' :
                  promo.title.includes('Rewards') || promo.title.includes('Visa') || promo.title.includes('Travel') ? 'from-purple-50 to-purple-100' :
                    promo.title.includes('Mortgage') ? 'from-emerald-50 to-emerald-100' :
                      promo.title.includes('Borrow') || promo.title.includes('Student') ? 'from-amber-50 to-amber-100' :
                        promo.title.includes('Investor') || promo.title.includes('TFSA') || promo.title.includes('RRSP') ? 'from-cyan-50 to-cyan-100' :
                          promo.title.includes('Claim') || promo.title.includes('Cashback') ? 'from-rose-50 to-rose-100' : 'from-blue-50 to-blue-100';
                const pIcon = promo.title.includes('Chequing') ? BuildingOfficeIcon :
                  promo.title.includes('Rewards') || promo.title.includes('Visa') || promo.title.includes('Travel') ? CreditCardIcon :
                    promo.title.includes('Mortgage') ? HomeIcon :
                      promo.title.includes('Borrow') || promo.title.includes('Student') ? TruckIcon :
                        promo.title.includes('Investor') || promo.title.includes('TFSA') || promo.title.includes('RRSP') ? ChartBarIcon :
                          promo.title.includes('Claim') || promo.title.includes('Cashback') ? GiftIcon : BuildingOfficeIcon;
                const pColor = promo.title.includes('Chequing') ? 'text-blue-400' :
                  promo.title.includes('Rewards') || promo.title.includes('Visa') || promo.title.includes('Travel') ? 'text-purple-400' :
                    promo.title.includes('Mortgage') ? 'text-emerald-500' :
                      promo.title.includes('Borrow') || promo.title.includes('Student') ? 'text-amber-500' :
                        promo.title.includes('Investor') || promo.title.includes('TFSA') || promo.title.includes('RRSP') ? 'text-cyan-500' :
                          promo.title.includes('Claim') || promo.title.includes('Cashback') ? 'text-rose-400' : 'text-blue-400';
                const Icon = pIcon;
                return (
                  <div key={pi} className="mb-3 last:mb-0">
                    <div className={`bg-gradient-to-br ${pBg} h-20 mb-2 flex items-center justify-center`}>
                      <Icon className={`h-8 w-8 ${pColor}`} />
                    </div>
                    <h4 className="font-semibold text-xs text-navy">{t(promo.titleKey)}</h4>
                    <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{t(promo.descKey)}</p>
                    <Link to={promo.link} className="text-xs font-semibold text-red-600 hover:text-red-700 mt-1 inline-block" onClick={onClose}>
                      {t(promo.linkTextKey)} <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
