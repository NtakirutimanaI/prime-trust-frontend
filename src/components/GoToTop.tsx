import { useState, useEffect } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/solid';

export default function GoToTop({ containerId }: { containerId?: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerId ? document.getElementById(containerId) : window;
    const onScroll = () => {
      const scrollY = containerId
        ? (el as HTMLElement)?.scrollTop ?? 0
        : window.scrollY;
      setVisible(scrollY > 100);
    };
    el?.addEventListener('scroll', onScroll);
    return () => el?.removeEventListener('scroll', onScroll);
  }, [containerId]);

  const scrollToTop = () => {
    if (containerId) {
      document.getElementById(containerId)?.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary-dark transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Go to top"
    >
      <ArrowUpIcon className="h-5 w-5" />
    </button>
  );
}
