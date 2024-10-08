// components/Header.tsx
import React from 'react';
import Link from 'next/link';
import ToggleSwitch from './ToggleSwitch';

interface HeaderProps {
    toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
    return (
        <header className="bg-white dark:bg-gray-800 shadow-md">
            <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
                        RGWEB
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="/" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
                        Home
                    </Link>
                    <Link href="/blog" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
                        Blog
                    </Link>
                    <Link href="/about" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
                        About
                    </Link>
                    <Link href="/contact" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
                        Contact
                    </Link>
                    <ToggleSwitch toggleTheme={toggleTheme} />
                </div>
            </nav>
        </header>
    );
};

export default Header;
