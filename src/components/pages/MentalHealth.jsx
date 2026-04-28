import MoodTracker from '../MoodTracker.jsx';

function MentalHealth({ athleteName }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-teal-400 mb-2">
        Mental Health 🧠
      </h1>
      <p className="text-slate-400 text-sm mb-6">
        Your mental wellness matters just as much as your physical performance.
      </p>

      <h2 className="text-lg font-semibold text-white mb-3 border-b border-slate-700 pb-2">
        Daily Check-In
      </h2>
      <div className="mb-6">
        <MoodTracker athleteName={athleteName} />
      </div>

      <h2 className="text-lg font-semibold text-white mb-3 border-b border-slate-700 pb-2">
        Wellness Tips
      </h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
          <p className="text-2xl mb-2">😴</p>
          <p className="text-white font-semibold text-sm">Sleep</p>
          <p className="text-slate-400 text-xs mt-1">
            Aim for 8-9 hours for peak recovery
          </p>
        </div>
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
          <p className="text-2xl mb-2">🧘🏾‍♀️</p>
          <p className="text-white font-semibold text-sm">Breathwork</p>
          <p className="text-slate-400 text-xs mt-1">
            5 minutes of deep breathing reduces stress
          </p>
        </div>
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
          <p className="text-2xl mb-2">📓</p>
          <p className="text-white font-semibold text-sm">Journaling</p>
          <p className="text-slate-400 text-xs mt-1">
            Write down 3 things you are grateful for
          </p>
        </div>
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
          <p className="text-2xl mb-2">🤝</p>
          <p className="text-white font-semibold text-sm">Talk to Someone</p>
          <p className="text-slate-400 text-xs mt-1">
            Reach out to a teammate, coach, or counselor
          </p>
        </div>
      </div>
    </div>
  );
}

export default MentalHealth;
