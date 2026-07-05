import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const footerSections = [
  {
    title: 'Personal',
    titleKey: 'footer.sections.personal',
    linkKeys: ['footer.sections.personalLinks.0', 'footer.sections.personalLinks.1', 'footer.sections.personalLinks.2', 'footer.sections.personalLinks.3', 'footer.sections.personalLinks.4', 'footer.sections.personalLinks.5'],
    links: ['Savings Accounts', 'Current Accounts', 'Fixed Deposits', 'Cards', 'Money Transfer', 'Bill Payments'],
  },
  {
    title: 'Corporate',
    titleKey: 'footer.sections.corporate',
    linkKeys: ['footer.sections.corporateLinks.0', 'footer.sections.corporateLinks.1', 'footer.sections.corporateLinks.2', 'footer.sections.corporateLinks.3'],
    links: ['Business Accounts', 'Trade Financing', 'Asset Financing', 'Corporate Loans'],
  },
  {
    title: 'Financial Services',
    titleKey: 'footer.sections.financialServices',
    linkKeys: ['footer.sections.financialLinks.0', 'footer.sections.financialLinks.1', 'footer.sections.financialLinks.2', 'footer.sections.financialLinks.3', 'footer.sections.financialLinks.4'],
    links: ['Foreign Exchange', 'Treasury Services', 'Insurance', 'Investment Advisory', 'Safe Deposit Box'],
  },
  {
    title: 'Help & Support',
    titleKey: 'footer.sections.helpSupport',
    linkKeys: ['footer.sections.helpLinks.0', 'footer.sections.helpLinks.1', 'footer.sections.helpLinks.2', 'footer.sections.helpLinks.3', 'footer.sections.helpLinks.4', 'footer.sections.helpLinks.5'],
    links: ['FAQ', 'Contact Us', 'Branch Locator', 'ATM Locator', 'Report Issue', 'Feedback'],
  },
];

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-blue-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="PRIME TRUST FINANCE" className="h-12 w-auto" />
              <p className="text-navy font-bold text-base">{t('footer.logo')}</p>
            </div>
            <p className="text-gray-700 text-sm mb-4">
              {t('footer.tagline')}
            </p>
            <p className="text-gray-600 text-xs leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="w-9 h-9 bg-navy rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href="#" className="w-9 h-9 bg-navy rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
              <a href="#" className="w-9 h-9 bg-navy rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href="#" className="w-9 h-9 bg-navy rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
            </div>
          </div>

          {footerSections.map((section, i) => (
            <div key={section.title} className={i === 0 ? 'lg:ml-10' : ''}>
              <h4 className="text-navy font-bold mb-3 text-sm uppercase tracking-wider">
                {t(section.titleKey)}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, li) => (
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-700 hover:text-accent text-sm transition-colors font-medium"
                    >
                      {section.linkKeys[li] ? t(section.linkKeys[li]) : link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="mb-1">
                <span className="text-navy font-semibold">{t('footer.workingHours')}</span>{' '}
                {t('footer.hours')}
              </p>
              <p className="mb-1">
                <span className="text-navy font-semibold">{t('footer.phone')}</span> {t('footer.phoneNumber')} |{' '}
                <span className="text-navy font-semibold">{t('footer.email')}</span>{' '}
                {t('footer.emailAddress')}
              </p>
            </div>
            <div className="md:text-right">
              <p className="mb-1">
                {t('footer.credit')}
              </p>
              <p>
                &copy; {new Date().getFullYear()} {t('footer.copyright')} |{' '}
                <Link to="/privacy" className="text-navy font-semibold hover:text-accent transition-colors">{t('footer.privacyPolicy')}</Link>{' '}
                |{' '}
                <Link to="/terms" className="text-navy font-semibold hover:text-accent transition-colors">{t('footer.termsOfService')}</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
