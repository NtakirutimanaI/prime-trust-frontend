import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UserIcon, ShieldCheckIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

type Tab = 'personal' | 'security' | 'preferences';

export default function Profile() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<Tab>('personal');
  const [saved, setSaved] = useState(false);

  const tabs: { key: Tab; label: string; icon: typeof UserIcon }[] = [
    { key: 'personal', label: t('profile.personalInfo'), icon: UserIcon },
    { key: 'security', label: t('profile.security'), icon: ShieldCheckIcon },
    { key: 'preferences', label: t('profile.preferences'), icon: Cog6ToothIcon },
  ];

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div>
      <section className="relative min-h-[40vh] flex items-center bg-cover bg-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=1600&q=80')"}}>
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t('profile.title')}</h1>
          <p className="text-xl text-white/80 max-w-2xl">{t('profile.subtitle')}</p>
        </div>
      </section>

      <section className="py-10 bg-light-gray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex border-b border-gray-200 bg-white rounded-t-lg shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center px-6 py-4 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
                  activeTab === tab.key
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-navy hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-5 w-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>

          {saved && (
            <div className="bg-green-50 text-green-600 text-sm px-4 py-3 rounded-lg mt-4">
              {t('profile.saved')}
            </div>
          )}

          <div className="bg-white rounded-b-lg shadow-sm border-t-0 mt-0">
            {activeTab === 'personal' && (
              <div className="p-6 lg:p-8 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('profile.firstName')}</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
                      placeholder={t('profile.firstName')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('profile.lastName')}</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
                      placeholder={t('profile.lastName')}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('profile.email')}</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
                    placeholder={t('profile.email')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('profile.phone')}</label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
                    placeholder={t('profile.phone')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('profile.address')}</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
                    placeholder={t('profile.address')}
                  />
                </div>
                <button
                  onClick={handleSave}
                  className="bg-accent text-white px-6 py-2.5 text-sm font-medium rounded-lg hover:bg-accent/90 transition-colors cursor-pointer"
                >
                  {t('profile.save')}
                </button>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="p-6 lg:p-8 space-y-4">
                <h3 className="text-lg font-semibold text-navy">{t('profile.changePassword')}</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('profile.currentPassword')}</label>
                  <input
                    type="password"
                    className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
                    placeholder={t('profile.currentPassword')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('profile.newPassword')}</label>
                  <input
                    type="password"
                    className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
                    placeholder={t('profile.newPassword')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('profile.confirmPassword')}</label>
                  <input
                    type="password"
                    className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
                    placeholder={t('profile.confirmPassword')}
                  />
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-gray-700">{t('profile.twoFactor')}</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <button
                  onClick={handleSave}
                  className="bg-accent text-white px-6 py-2.5 text-sm font-medium rounded-lg hover:bg-accent/90 transition-colors cursor-pointer"
                >
                  {t('profile.update')}
                </button>
              </div>
            )}

            {activeTab === 'preferences' && (
              <div className="p-6 lg:p-8 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('profile.language')}</label>
                  <select className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary rounded-lg bg-white">
                    <option>English</option>
                    <option>Français</option>
                    <option>Kinyarwanda</option>
                  </select>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-gray-700">{t('profile.notifications')}</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-gray-700">{t('profile.theme')}</span>
                  <select className="border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary rounded-lg bg-white">
                    <option>{t('profile.light')}</option>
                    <option>{t('profile.dark')}</option>
                  </select>
                </div>
                <button
                  onClick={handleSave}
                  className="bg-accent text-white px-6 py-2.5 text-sm font-medium rounded-lg hover:bg-accent/90 transition-colors cursor-pointer"
                >
                  {t('profile.save')}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
