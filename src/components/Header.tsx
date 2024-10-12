import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">React to HTML Converter</h1>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-blue-700"
        >
          {darkMode ? <Sun /> : <Moon />}
        </button>
      </div>
    </header>
  );
};

export default Header;