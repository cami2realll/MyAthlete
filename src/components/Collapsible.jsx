import { useState } from 'react';

function Collapsible({ title, emoji, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 mb-3 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-4 text-left hover:bg-slate-700 transition"
      >
        <span className="text-white font-semibold">
          {emoji} {title}
        </span>
        <span className="text-teal-400 text-lg">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="p-4 border-t border-slate-700 text-slate-300 text-sm">
          {children}
        </div>
      )}
    </div>
  );
}

export default Collapsible;
