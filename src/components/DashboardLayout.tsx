import { useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  HomeIcon,
  BanknotesIcon,
  ArrowPathIcon,
  ArrowsRightLeftIcon,
  CurrencyDollarIcon,
  UserIcon,
  ArrowLeftOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useAuth } from '../context/AuthContext';
import GoToTop from './GoToTop';

const sidebarLinks = [
  { to: '/dashboard', label: 'Dashboard', labelKey: 'dashboardLayout.nav.dashboard', icon: HomeIcon },
  { to: '/accounts', label: 'My Accounts', labelKey: 'dashboardLayout.nav.accounts', icon: BanknotesIcon },
  { to: '/transactions', label: 'Transactions', labelKey: 'dashboardLayout.nav.transactions', icon: ArrowPathIcon },
  { to: '/transfer', label: 'Transfer', labelKey: 'dashboardLayout.nav.transfer', icon: ArrowsRightLeftIcon },
  { to: '/loans', label: 'Loans', labelKey: 'dashboardLayout.nav.loans', icon: CurrencyDollarIcon },
  { to: '/profile', label: 'Profile', labelKey: 'dashboardLayout.nav.profile', icon: UserIcon },
];

export default function DashboardLayout() {
  const { t } = useTranslation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-light-gray">
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden ${
          sidebarOpen ? 'block' : 'hidden'
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-navy text-white transform transition-transform duration-200 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 flex flex-col`}
      >
        <div className="p-4 border-b border-gray-700">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="PRIME TRUST FINANCE" className="h-8 w-auto" />
            <span className="text-white font-bold text-sm whitespace-nowrap">{t('nav.logo')}</span>
          </Link>
        </div>

        <nav className="flex-1 py-4 overflow-y-auto">
          {sidebarLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/dashboard'}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 text-sm transition-colors ${
                  isActive
                    ? 'bg-accent/20 text-accent border-r-2 border-accent'
                    : 'text-gray-300 hover:bg-navy/50 hover:text-white'
                }`
              }
            >
              <link.icon className="h-5 w-5 mr-3" />
              {t(link.labelKey)}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-navy/50 transition-colors cursor-pointer"
          >
            <ArrowLeftOnRectangleIcon className="h-5 w-5 mr-3" />
            {t('dashboardLayout.nav.logout')}
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm px-4 lg:px-6 py-3 flex items-center justify-between">
          <button
            className="lg:hidden text-navy cursor-pointer"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>

          <div className="flex items-center space-x-4 ml-auto">
            <span className="text-sm text-gray-600">
              {t('dashboardLayout.welcome')}, {user?.firstName || 'User'}
            </span>
            <div className="w-8 h-8 bg-red-600 flex items-center justify-center text-white text-sm font-medium">
              {user?.firstName?.charAt(0) || 'U'}
            </div>
          </div>
        </header>

        <main id="dashboard-main" className="flex-1 overflow-y-auto p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
      <GoToTop containerId="dashboard-main" />
    </div>
  );
}
