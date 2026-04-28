import { useState } from "react";

function MoodTracker({ athleteName }) {
  const [mood, setMood] = useState(null);

  const moods = [
    { emoji: "😄", label: "Great" },
    { emoji: "🙂", label: "Good" },
    { emoji: "😐", label: "Okay" },
    { emoji: "😔", label: "Low" },
    { emoji: "😤", label: "Stressed" },
  ];

  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700">
      <h2 className="text-teal-400 font-bold text-xl mb-1">
        Mental Check-In
      </h2>
      <p className="text-slate-400 text-sm mb-4">
        How are you feeling today, {athleteName}?
      </p>

      <div className="flex justify-between gap-2">
        {moods.map((m) => (
          <button
            key={m.label}
            onClick={() => setMood(m.label)}
            className={`flex flex-col items-center p-3 rounded-xl transition border-2 w-full
              ${mood === m.label
                ? "border-teal-400 bg-teal-900"
                : "border-slate-600 hover:border-teal-600 bg-slate-700"
              }`}
          >
            <span className="text-2xl">{m.emoji}</span>
            <span className="text-xs text-slate-300 mt-1">{m.label}</span>
          </button>
        ))}
      </div>

      {mood && (
        <p className="mt-4 text-center text-teal-300 text-sm">
          Logged: <span className="font-bold">{mood}</span> — keep pushing 💪🏾
        </p>
      )}
    </div>
  );
}

export default MoodTracker;