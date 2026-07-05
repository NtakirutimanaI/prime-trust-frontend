import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import GoToTop from './GoToTop';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16 lg:pt-[148px]">
        {/* pt-16 (64px) for mobile header, lg:pt-[148px] for desktop (utility 28px + logo 72px + nav 48px) */}
        <Outlet />
      </main>
      <Footer />
      <GoToTop />
    </div>
  );
}
