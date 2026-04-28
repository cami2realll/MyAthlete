import { useContext } from 'react';
import { SettingsContext } from '../SettingsContext.jsx';

function Settings() {
  const { fontSize, setFontSize, accentColor, setAccentColor } = useContext(SettingsContext);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-teal-400 mb-2">Settings ⚙️</h1>
      <p className="text-slate-400 text-sm mb-6">Customize your MyAthlete experience.</p>

      <div className="bg-slate-800 rounded-2xl p-6 mb-6 border border-slate-700">
        <h2 className="text-white font-semibold text-lg mb-4">Font Size</h2>
        <div className="flex gap-3">
          {['small', 'medium', 'large'].map((size) => (
            <button
              key={size}
              onClick={() => setFontSize(size)}
              className={`px-4 py-2 rounded-xl border transition capitalize ${
                fontSize === size
                  ? 'bg-teal-600 border-teal-400 text-white'
                  : 'bg-slate-700 border-slate-600 text-slate-300 hover:border-teal-500'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
        <h2 className="text-white font-semibold text-lg mb-4">Accent Color</h2>
        <div className="flex gap-3">
          {[
            { name: 'teal', bg: 'bg-teal-500' },
            { name: 'pink', bg: 'bg-pink-500' },
            { name: 'purple', bg: 'bg-purple-500' },
            { name: 'blue', bg: 'bg-blue-500' },
            { name: 'orange', bg: 'bg-orange-500' },
          ].map((color) => (
            <button
              key={color.name}
              onClick={() => setAccentColor(color.name)}
              className={`w-10 h-10 rounded-full ${color.bg} border-4 transition ${
                accentColor === color.name ? 'border-white scale-110' : 'border-transparent'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Settings;