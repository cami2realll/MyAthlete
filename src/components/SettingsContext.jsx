import { createContext, useState } from 'react';

export const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [fontSize, setFontSize] = useState('medium');
  const [accentColor, setAccentColor] = useState('teal');

  const colorMap = {
    teal: 'border-teal-600',
    pink: 'border-pink-600',
    purple: 'border-purple-600',
    blue: 'border-blue-600',
    orange: 'border-orange-600',
  };

  const textColorMap = {
    teal: 'text-teal-400',
    pink: 'text-pink-400',
    purple: 'text-purple-400',
    blue: 'text-blue-400',
    orange: 'text-orange-400',
  };

  return (
    <SettingsContext.Provider value={{ 
      fontSize, 
      setFontSize, 
      accentColor, 
      setAccentColor,
      accentBorder: colorMap[accentColor],
      accentText: textColorMap[accentColor]
    }}>
      <div className={`
        ${fontSize === 'small' ? 'text-sm' : fontSize === 'large' ? 'text-lg' : 'text-base'}
      `}>
        {children}
      </div>
    </SettingsContext.Provider>
  );
}
