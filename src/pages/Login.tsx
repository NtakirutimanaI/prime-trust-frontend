import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';

export default function Login() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch {
      setError(t('login.error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-light-gray">
      <div className="hidden lg:flex w-1/2 relative min-h-screen items-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1639322537228-f71034b1c2f1?w=1600&q=80')"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        <div className="relative z-10 p-16">
          <Link to="/" className="flex flex-col items-start">
            <img src="/logo.png" alt="PRIME TRUST FINANCE" className="h-24 w-auto mb-8" />
            <h1 className="text-4xl font-bold text-white mb-3">{t('nav.logo')}</h1>
            <p className="text-xl text-blue-200">{t('nav.tagline')}</p>
          </Link>
          <div className="mt-16 border-l-4 border-accent pl-4">
            <p className="text-white/80 text-lg italic">"Secure, fast, and reliable banking at your fingertips."</p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex flex-col items-center mb-8">
            <Link to="/" className="flex flex-col items-center">
              <img src="/logo.png" alt="PRIME TRUST FINANCE" className="h-14 w-auto mb-2" />
              <h1 className="text-xl font-bold text-navy">{t('nav.logo')}</h1>
            </Link>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="px-8 pt-8 pb-6 text-center border-b border-gray-100">
              <h2 className="text-2xl font-bold text-navy">{t('login.title')}</h2>
              <p className="text-gray-500 text-sm mt-1">{t('login.subtitle')}</p>
            </div>
            <form onSubmit={handleSubmit} className="px-8 pb-8 space-y-5 mt-6">
              {error && (
                <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-lg flex items-center">
                  <span className="mr-2">&#9888;</span>
                  {error}
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('login.email')}</label>
                <div className="relative">
                  <EnvelopeIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('login.emailPlaceholder')}
                    required
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow duration-200"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('login.password')}</label>
                <div className="relative">
                  <LockClosedIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={t('login.passwordPlaceholder')}
                    required
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow duration-200"
                  />
                </div>
              </div>
              <div className="flex items-center justify-end">
                <button type="button" className="text-sm text-primary hover:text-accent font-medium transition-colors cursor-pointer">
                  Forgot password?
                </button>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-200 disabled:opacity-50 cursor-pointer shadow-sm hover:shadow-md"
              >
                {loading ? t('login.signingIn') : t('login.signIn')}
              </button>
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-4 text-gray-400">or continue with</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button type="button" className="flex items-center justify-center px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-light-gray hover:border-gray-300 transition-all duration-200 cursor-pointer">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                  Google
                </button>
                <button type="button" className="flex items-center justify-center px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-light-gray hover:border-gray-300 transition-all duration-200 cursor-pointer">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" fill="currentColor"/></svg>
                  Apple
                </button>
              </div>
              <p className="text-center text-sm text-gray-600 mt-6">
                {t('login.noAccount')}{' '}
                <Link to="/register" className="text-primary hover:text-accent font-semibold transition-colors">
                  {t('login.register')}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
