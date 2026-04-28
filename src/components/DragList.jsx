import { useState } from 'react';

function DragList({ items, setItems, title }) {
  const [dragIndex, setDragIndex] = useState(null);

  const handleDragStart = (index) => setDragIndex(index);

  const handleDrop = (index) => {
    const updated = [...items];
    const dragged = updated.splice(dragIndex, 1)[0];
    updated.splice(index, 0, dragged);
    setItems(updated);
    setDragIndex(null);
  };

  return (
    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 mb-6">
      <h2 className="text-white font-semibold text-lg mb-4">{title}</h2>
      <p className="text-slate-400 text-xs mb-3">Drag to reorder 👆🏾</p>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div
            key={item.id}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(index)}
            className={`bg-slate-700 p-3 rounded-xl border cursor-grab active:cursor-grabbing transition flex items-center gap-3 ${
              dragIndex === index
                ? 'border-teal-400 opacity-50'
                : 'border-slate-600 hover:border-teal-600'
            }`}
          >
            <span className="text-slate-400 text-sm">☰</span>
            <span className="text-xl">{item.emoji}</span>
            <div>
              <p className="text-white text-sm font-semibold">{item.name}</p>
              {item.detail && (
                <p className="text-slate-400 text-xs">{item.detail}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DragList;
