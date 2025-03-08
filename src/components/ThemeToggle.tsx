'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return a placeholder with the same dimensions during SSR to prevent layout shift
  if (!mounted) {
    return (
      <button
        className="p-2 rounded-full bg-transparent hover:bg-primary/5 transition-colors duration-300"
        aria-label="Loading Theme Toggle"
      >
        <div className="size-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full bg-transparent hover:bg-primary/5 transition-colors duration-300"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? (
        <FiSun className="size-5 text-primary" />
      ) : (
        <FiMoon className="size-5 text-primary" />
      )}
    </button>
  );
}