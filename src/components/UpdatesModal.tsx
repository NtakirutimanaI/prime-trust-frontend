import { XMarkIcon, MegaphoneIcon, CalendarDaysIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface Update {
  dateKey: string;
  titleKey: string;
  descKey: string;
  link?: string;
  linkKey?: string;
  badgeKey?: string;
}

const updates: Update[] = [
  {
    dateKey: 'updates.list.branchDate',
    titleKey: 'updates.list.branchTitle',
    descKey: 'updates.list.branchDesc',
    link: '/contact',
    linkKey: 'updates.list.learnMore',
    badgeKey: 'updates.list.newBadge',
  },
  {
    dateKey: 'updates.list.mobileDate',
    titleKey: 'updates.list.mobileTitle',
    descKey: 'updates.list.mobileDesc',
    link: '/contact',
    linkKey: 'updates.list.download',
    badgeKey: 'updates.list.newBadge',
  },
  {
    dateKey: 'updates.list.ratesDate',
    titleKey: 'updates.list.ratesTitle',
    descKey: 'updates.list.ratesDesc',
    link: '/rates',
    linkKey: 'updates.list.viewRates',
  },
  {
    dateKey: 'updates.list.holidayDate',
    titleKey: 'updates.list.holidayTitle',
    descKey: 'updates.list.holidayDesc',
  },
  {
    dateKey: 'updates.list.diasporaDate',
    titleKey: 'updates.list.diasporaTitle',
    descKey: 'updates.list.diasporaDesc',
    link: '/solutions/diaspora',
    linkKey: 'updates.list.learnMore',
  },
];

export default function UpdatesModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useTranslation();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white w-full max-w-lg shadow-2xl animate-fadeIn max-h-[70vh] flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-navy text-white">
          <div className="flex items-center gap-2">
            <MegaphoneIcon className="h-5 w-5" />
            <h2 className="text-lg font-bold">{t('updates.title')}</h2>
          </div>
          <button onClick={onClose} className="p-1 text-white/80 hover:text-white transition-colors cursor-pointer">
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {updates.map((u, i) => (
            <div key={i} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow bg-white">
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                  <CalendarDaysIcon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-xs text-gray-500">{t(u.dateKey)}</p>
                    {u.badgeKey && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-white bg-accent px-2 py-0.5 rounded-full">
                        {t(u.badgeKey)}
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold text-navy mt-1">{t(u.titleKey)}</h3>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">{t(u.descKey)}</p>
                  {u.link && u.linkKey && (
                    <Link to={u.link} onClick={onClose} className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-dark mt-2 transition-colors">
                      {t(u.linkKey)} <ArrowRightIcon className="h-3 w-3" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="px-6 py-3 border-t border-gray-200 bg-light-gray text-center">
          <Link to="/promotions" onClick={onClose} className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
            {t('updates.viewAll')} <ArrowRightIcon className="h-3.5 w-3.5 inline ml-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
