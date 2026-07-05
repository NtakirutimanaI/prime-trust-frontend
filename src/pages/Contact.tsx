import { useTranslation } from 'react-i18next';
import { useState, type FormEvent } from 'react';
import { PhoneIcon, EnvelopeIcon, ClockIcon, MapPinIcon, GlobeAltIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const branches = [
  { name: 'contact.branchKigali', address: 'contact.branchKigaliAddr', phone: '+250 788 000 001' },
  { name: 'contact.branchButare', address: 'contact.branchButareAddr', phone: '+250 788 000 002' },
  { name: 'contact.branchMusanze', address: 'contact.branchMusanzeAddr', phone: '+250 788 000 003' },
];

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[50vh] flex items-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1423667689084-9cc467abb32c?w=1600&q=80')"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-accent/20 rounded-lg">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-accent-light" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t('contact.title')}</h1>
            <p className="text-xl text-white/80 max-w-xl">{t('contact.subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 p-6 text-center border border-gray-100">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-semibold text-navy mb-1">{t('contact.phone')}</h3>
              <p className="text-sm text-gray-600">{t('contact.phoneNumber')}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 p-6 text-center border border-gray-100">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <EnvelopeIcon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-semibold text-navy mb-1">{t('contact.email')}</h3>
              <p className="text-sm text-gray-600">{t('contact.emailAddress')}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 p-6 text-center border border-gray-100">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPinIcon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-semibold text-navy mb-1">{t('contact.visitUs')}</h3>
              <p className="text-sm text-gray-600">{t('contact.address')}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 p-6 text-center border border-gray-100">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-semibold text-navy mb-1">{t('contact.workingHours')}</h3>
              <p className="text-sm text-gray-600">{t('contact.weekdayHours')}</p>
              <p className="text-sm text-gray-600">{t('contact.saturdayHours')}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                <div className="px-6 py-5 border-b border-gray-100">
                  <h2 className="text-xl font-semibold text-navy flex items-center gap-2">
                    <ChatBubbleLeftRightIcon className="h-6 w-6 text-accent" />
                    {t('contact.formTitle')}
                  </h2>
                </div>
                <div className="p-6">
                  {submitted ? (
                    <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-6 text-center">
                      <EnvelopeIcon className="h-12 w-12 mx-auto mb-3 text-green-500" />
                      <p className="font-medium">{t('contact.success')}</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('contact.name')}</label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={handleChange('name')}
                            placeholder={t('contact.namePlaceholder')}
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('contact.emailLabel')}</label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={handleChange('email')}
                            placeholder={t('contact.emailPlaceholder')}
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('contact.subject')}</label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={handleChange('subject')}
                          placeholder={t('contact.subjectPlaceholder')}
                          required
                          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('contact.message')}</label>
                        <textarea
                          value={formData.message}
                          onChange={handleChange('message')}
                          placeholder={t('contact.messagePlaceholder')}
                          required
                          rows={5}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors cursor-pointer text-base"
                      >
                        {t('contact.send')}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-light-gray rounded-lg p-6 h-full">
                <h3 className="text-lg font-semibold text-navy mb-6 flex items-center gap-2">
                  <MapPinIcon className="h-5 w-5 text-accent" />
                  {t('contact.branches')}
                </h3>
                <div className="space-y-6">
                  {branches.map((branch, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 border border-gray-100">
                      <h4 className="font-semibold text-navy text-sm">{t(branch.name)}</h4>
                      <p className="text-xs text-gray-500 mt-1">{t(branch.address)}</p>
                      <p className="text-xs text-accent mt-1 font-medium">{branch.phone}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold text-navy mb-4">{t('contact.followUs')}</h3>
            <div className="flex justify-center gap-4">
              <a href="#" className="w-12 h-12 bg-navy rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <GlobeAltIcon className="h-6 w-6 text-white" />
              </a>
              <a href="#" className="w-12 h-12 bg-navy rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="#" className="w-12 h-12 bg-navy rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
              </a>
              <a href="#" className="w-12 h-12 bg-navy rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
