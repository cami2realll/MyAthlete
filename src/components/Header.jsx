import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { SettingsContext } from './SettingsContext.jsx';

function Header() {
  const [open, setOpen] = useState(false);
  const { accentBorder, accentText } = useContext(SettingsContext);

  return (
    <header
      className={`bg-slate-950 p-6 flex justify-between items-center border-b ${accentBorder} relative`}
    >
      <div className="flex items-center gap-2">
        <span className={`${accentText} text-2xl`}>🏃🏾‍♀️</span>
        <h1 className="text-2xl text-white font-bold tracking-tight">
          My<span className={accentText}>Athlete</span>
        </h1>
      </div>

      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer relative w-16 h-14 hover:scale-110 transition duration-300"
      >
        <div className="w-14 h-12 bg-white rounded-full absolute left-1/2 -translate-x-1/2"></div>
        <div className="w-4 h-4 bg-white absolute top-0 left-1 rotate-[-20deg]"></div>
        <div className="w-4 h-4 bg-white absolute top-0 right-1 rotate-[20deg]"></div>
        <div className="w-4 h-4 bg-teal-400 absolute top-1 right-0 rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-black absolute top-6 left-5 rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-black absolute top-6 right-5 rounded-full"></div>
        <div className="w-2 h-1.5 bg-yellow-400 absolute top-7 left-1/2 -translate-x-1/2 rounded-full"></div>
        <div className="w-4 h-[2px] bg-black absolute top-7 left-0"></div>
        <div className="w-4 h-[2px] bg-black absolute top-9 left-0"></div>
        <div className="w-4 h-[2px] bg-black absolute top-7 right-0"></div>
        <div className="w-4 h-[2px] bg-black absolute top-9 right-0"></div>
      </div>

      {open && (
        <div
          className={`absolute top-20 right-5 bg-slate-800 border ${accentBorder} text-white p-4 rounded-xl shadow-lg space-y-2 z-50`}
        >
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className={`block hover:${accentText} transition`}
          >
            🏠 Home
          </Link>
          <Link
            to="/dashboard"
            onClick={() => setOpen(false)}
            className={`block hover:${accentText} transition`}
          >
            📊 Dashboard
          </Link>
          <Link
            to="/mental-health"
            onClick={() => setOpen(false)}
            className={`block hover:${accentText} transition`}
          >
            💬 Mental Health
          </Link>
          <Link
            to="/profile"
            onClick={() => setOpen(false)}
            className={`block hover:${accentText} transition`}
          >
            👤 My Profile
          </Link>
          <Link
            to="/nutrition"
            onClick={() => setOpen(false)}
            className={`block hover:${accentText} transition`}
          >
            🥗 Nutrition
          </Link>
          <Link
            to="/settings"
            onClick={() => setOpen(false)}
            className={`block hover:${accentText} transition`}
          >
            ⚙️ Settings
          </Link>
          <Link
            to="/game"
            onClick={() => setOpen(false)}
            className={`block hover:${accentText} transition`}
          >
            🎮 Game
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
