import { useTranslation } from 'react-i18next';
import { ShieldCheckIcon, LightBulbIcon, UserGroupIcon, HeartIcon, RocketLaunchIcon, GlobeAltIcon, BuildingOfficeIcon, UsersIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function About() {
  const { t } = useTranslation();

  const values = [
    {
      icon: ShieldCheckIcon,
      title: t('about.values.trust.title'),
      description: t('about.values.trust.desc'),
    },
    {
      icon: LightBulbIcon,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.desc'),
    },
    {
      icon: UserGroupIcon,
      title: t('about.values.customerFocus.title'),
      description: t('about.values.customerFocus.desc'),
    },
    {
      icon: HeartIcon,
      title: t('about.values.community.title'),
      description: t('about.values.community.desc'),
    },
  ];

  const leadership = [
    { name: t('about.leadership.ceo.name'), title: t('about.leadership.ceo.title') },
    { name: t('about.leadership.cfo.name'), title: t('about.leadership.cfo.title') },
    { name: t('about.leadership.cto.name'), title: t('about.leadership.cto.title') },
    { name: t('about.leadership.coo.name'), title: t('about.leadership.coo.title') },
  ];

  const stats = [
    { value: '25+', label: t('about.stats.years'), icon: GlobeAltIcon },
    { value: '500K+', label: t('about.stats.customers'), icon: UsersIcon },
    { value: '50+', label: t('about.stats.branches'), icon: BuildingOfficeIcon },
    { value: '1,200+', label: t('about.stats.employees'), icon: UserGroupIcon },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[50vh] flex items-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80')"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-accent/20 rounded-lg">
                <BuildingOfficeIcon className="h-8 w-8 text-accent-light" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t('about.title')}</h1>
            <p className="text-xl text-white/80 max-w-xl">{t('about.subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">{t('about.ourStory')}</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{t('about.story1')}</p>
              <p className="text-gray-600 mb-4 leading-relaxed">{t('about.story2')}</p>
              <p className="text-gray-600 leading-relaxed">{t('about.story3')}</p>
            </div>
            <div className="bg-light-gray rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-navy mb-6">{t('about.missionVision')}</h3>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <RocketLaunchIcon className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary">{t('about.mission')}</h4>
                </div>
                <p className="text-gray-600 ml-11">{t('about.missionText')}</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <GlobeAltIcon className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary">{t('about.vision')}</h4>
                </div>
                <p className="text-gray-600 ml-11">{t('about.visionText')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-accent-light" />
                </div>
                <p className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-2">{t('about.values.title')}</h2>
            <p className="text-gray-600">{t('about.values.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 p-6 text-center border border-gray-100">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-2">{t('about.leadership.title')}</h2>
            <p className="text-gray-600">{t('about.leadership.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {leadership.map((person) => (
              <div key={person.name} className="bg-light-gray rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-navy rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-2xl font-bold text-white">
                    {person.name.split(' ').map((n: string) => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-semibold text-navy text-lg">{person.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{person.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t('about.ctaTitle')}</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">{t('about.ctaSubtitle')}</p>
          <Link
            to="/register"
            className="inline-flex items-center px-8 py-4 bg-white text-accent font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            {t('about.ctaButton')}
          </Link>
        </div>
      </section>
    </div>
  );
}
