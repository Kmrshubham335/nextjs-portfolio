'use client';
import { attachment, navBarLink } from '@/data/portfolio';
import Link from 'next/link';
import React, { useState } from 'react';
import { SunIcon, MoonIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [active, setActive] = useState<string>('');
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center p-4 md:px-8 text-gray-600 dark:text-gray-400 animate__animated animate__fadeIn animate__delay-2s bg-white dark:bg-[#25252E] shadow-lg">
      <div className="flex justify-between w-full md:w-auto">
        <ul className="flex flex-wrap gap-3 md:gap-8 items-center bg-white dark:bg-[#25252E] border rounded-lg border-gray-400 dark:border-gray-700 px-4 py-2">
          {navBarLink?.map((navBar, index) => (
            <li
              className={`dark:hover:text-white hover:text-gray-400 cursor-pointer transition-colors ${
                active === navBar?.title ? (resolvedTheme === 'dark' ? 'text-white' : 'text-black') : ''
              }`}
              onClick={() => setActive(navBar?.title)}
              key={navBar.title + index}
            >
              <Link href={navBar.href}>{navBar.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-4 md:gap-8">
        {resolvedTheme === 'dark' ? (
          <SunIcon onClick={() => setTheme('light')} className="h-6 w-6 text-white cursor-pointer" />
        ) : (
          <MoonIcon onClick={() => setTheme('dark')} className="h-6 w-6 text-black cursor-pointer" />
        )}
        <a href={attachment.href} download className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
          {attachment?.title} <ArrowDownTrayIcon className="h-6 w-6" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
