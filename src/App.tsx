import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Layout from './components/Layout';
import DashboardLayout from './components/DashboardLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Accounts from './pages/Accounts';
import AccountDetail from './pages/AccountDetail';
import Transfer from './pages/Transfer';
import Transactions from './pages/Transactions';
import Loans from './pages/Loans';
import Contact from './pages/Contact';
import Cards from './pages/Cards';
import BillPayments from './pages/BillPayments';
import About from './pages/About';
import Savings from './pages/Savings';
import FAQPage from './pages/FAQPage';
import Support from './pages/Support';
import Professional from './pages/Professional';
import Company from './pages/Company';
import Diaspora from './pages/Diaspora';
import Farmer from './pages/Farmer';
import Mortgages from './pages/Mortgages';
import Investments from './pages/Investments';
import Insurance from './pages/Insurance';
import Advice from './pages/Advice';
import SmallBusiness from './pages/SmallBusiness';
import Commercial from './pages/Commercial';
import Wealth from './pages/Wealth';
import Institutional from './pages/Institutional';
import Promotions from './pages/Promotions';
import Rewards from './pages/Rewards';
import Rates from './pages/Rates';
import ForeignExchange from './pages/ForeignExchange';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Profile from './pages/Profile';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export default function App() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/bill-payments" element={<BillPayments />} />
        <Route path="/about" element={<About />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/support" element={<Support />} />
        <Route path="/solutions/professional" element={<Professional />} />
        <Route path="/solutions/company" element={<Company />} />
        <Route path="/solutions/diaspora" element={<Diaspora />} />
        <Route path="/solutions/farmer" element={<Farmer />} />
        <Route path="/mortgages" element={<Mortgages />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/advice" element={<Advice />} />
        <Route path="/small-business" element={<SmallBusiness />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/wealth" element={<Wealth />} />
        <Route path="/institutional" element={<Institutional />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/foreign-exchange" element={<ForeignExchange />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/savings-accounts" element={<Navigate to="/savings" replace />} />
        <Route path="/current-accounts" element={<Navigate to="/accounts" replace />} />
        <Route path="/fixed-deposits" element={<Navigate to="/savings" replace />} />
        <Route path="/money-transfer" element={<Navigate to="/transfer" replace />} />
        <Route path="/business-accounts" element={<Navigate to="/accounts" replace />} />
        <Route path="/trade-financing" element={<Navigate to="/commercial" replace />} />
        <Route path="/asset-financing" element={<Navigate to="/commercial" replace />} />
        <Route path="/corporate-loans" element={<Navigate to="/loans" replace />} />
        <Route path="/treasury-services" element={<Navigate to="/institutional" replace />} />
        <Route path="/investment-advisory" element={<Navigate to="/investments" replace />} />
        <Route path="/safe-deposit-box" element={<Navigate to="/contact" replace />} />
        <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
        <Route path="/branch-locator" element={<Navigate to="/contact" replace />} />
        <Route path="/atm-locator" element={<Navigate to="/contact" replace />} />
        <Route path="/report-issue" element={<Navigate to="/support" replace />} />
        <Route path="/feedback" element={<Navigate to="/contact" replace />} />
      </Route>

      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/accounts/:id" element={<AccountDetail />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
