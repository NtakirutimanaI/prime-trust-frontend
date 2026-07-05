import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { UserIcon, EnvelopeIcon, PhoneIcon, LockClosedIcon } from '@heroicons/react/24/outline';

export default function Register() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError(t('register.passwordMismatch'));
      return;
    }

    setLoading(true);
    try {
      await register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });
      navigate('/dashboard');
    } catch {
      setError(t('register.error'));
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    { name: 'firstName', label: t('register.firstName'), placeholder: t('register.firstNamePlaceholder'), type: 'text', icon: UserIcon },
    { name: 'lastName', label: t('register.lastName'), placeholder: t('register.lastNamePlaceholder'), type: 'text', icon: UserIcon },
    { name: 'email', label: t('register.email'), placeholder: t('register.emailPlaceholder'), type: 'email', icon: EnvelopeIcon },
    { name: 'phone', label: t('register.phone'), placeholder: t('register.phonePlaceholder'), type: 'tel', icon: PhoneIcon },
    { name: 'password', label: t('register.password'), placeholder: t('register.passwordPlaceholder'), type: 'password', icon: LockClosedIcon },
    { name: 'confirmPassword', label: t('register.confirmPassword'), placeholder: t('register.confirmPasswordPlaceholder'), type: 'password', icon: LockClosedIcon },
  ];

  return (
    <div className="min-h-screen flex bg-light-gray">
      <div className="hidden lg:flex w-1/2 relative min-h-screen items-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80')"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        <div className="relative z-10 p-16">
          <Link to="/" className="flex flex-col items-start">
            <img src="/logo.png" alt="PRIME TRUST FINANCE" className="h-24 w-auto mb-8" />
            <h1 className="text-4xl font-bold text-white mb-3">{t('nav.logo')}</h1>
            <p className="text-xl text-blue-200">{t('nav.tagline')}</p>
          </Link>
          <div className="mt-16 space-y-6">
            <div className="flex items-center text-white/80">
              <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center mr-4">
                <span className="text-accent-light font-bold">1</span>
              </div>
              <p className="text-lg">Fill in your details</p>
            </div>
            <div className="flex items-center text-white/80">
              <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center mr-4">
                <span className="text-accent-light font-bold">2</span>
              </div>
              <p className="text-lg">Verify your identity</p>
            </div>
            <div className="flex items-center text-white/80">
              <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center mr-4">
                <span className="text-accent-light font-bold">3</span>
              </div>
              <p className="text-lg">Start banking</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-lg">
          <div className="lg:hidden flex flex-col items-center mb-8">
            <Link to="/" className="flex flex-col items-center">
              <img src="/logo.png" alt="PRIME TRUST FINANCE" className="h-14 w-auto mb-2" />
              <h1 className="text-xl font-bold text-navy">{t('nav.logo')}</h1>
            </Link>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="px-8 pt-8 pb-6 text-center border-b border-gray-100">
              <h2 className="text-2xl font-bold text-navy">{t('register.title')}</h2>
              <p className="text-gray-500 text-sm mt-1">{t('register.subtitle')}</p>
            </div>
            <form onSubmit={handleSubmit} className="px-8 pb-8 mt-6">
              {error && (
                <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-lg flex items-center mb-5">
                  <span className="mr-2">&#9888;</span>
                  {error}
                </div>
              )}
              <div className="grid grid-cols-2 gap-4 mb-4">
                {fields.slice(0, 2).map((field) => {
                  const Icon = field.icon;
                  return (
                    <div key={field.name}>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">{field.label}</label>
                      <div className="relative">
                        <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type={field.type}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange(field.name)}
                          placeholder={field.placeholder}
                          required
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow duration-200"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="space-y-4">
                {fields.slice(2).map((field) => {
                  const Icon = field.icon;
                  return (
                    <div key={field.name}>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">{field.label}</label>
                      <div className="relative">
                        <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type={field.type}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange(field.name)}
                          placeholder={field.placeholder}
                          required
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow duration-200"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="mt-0.5 rounded border-gray-300 text-primary focus:ring-primary h-4 w-4"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    I agree to the{' '}
                    <Link to="/terms" className="text-primary hover:text-accent font-medium">Terms of Service</Link>
                    {' '}and{' '}
                    <Link to="/privacy" className="text-primary hover:text-accent font-medium">Privacy Policy</Link>
                  </span>
                </label>
              </div>
              <button
                type="submit"
                disabled={loading || !agreeTerms}
                className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-200 disabled:opacity-50 cursor-pointer shadow-sm hover:shadow-md mt-6"
              >
                {loading ? t('register.creating') : t('register.create')}
              </button>
              <p className="text-center text-sm text-gray-600 mt-6">
                {t('register.hasAccount')}{' '}
                <Link to="/login" className="text-primary hover:text-accent font-semibold transition-colors">
                  {t('register.signIn')}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
