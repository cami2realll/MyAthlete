function Home({ athleteName, school, sport, bio }) {
    return (
      <div className="p-6">
  
        {/* HERO SECTION */}
        <div className="bg-gradient-to-r from-blue-900 to-teal-800 rounded-2xl p-8 mb-6 shadow-xl text-center">
          <h1 className="text-5xl font-bold text-white tracking-tight mb-2">
            MyAthlete
          </h1>
          <p className="text-teal-200 text-lg">
            Your personal health and performance dashboard
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <span className="bg-teal-600 text-white px-4 py-1 rounded-full text-sm">Mental Health</span>
            <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">Physical Health</span>
            <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm">Performance</span>
          </div>
        </div>
  
        {/* ATHLETE INTRO CARD */}
        <div className="bg-slate-800 rounded-2xl p-6 mb-6 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-1">
            Hi, I'm {athleteName} 💪🏾
          </h2>
          <p className="text-teal-400 text-sm mb-3">
            {sport} · {school}
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            {bio}
          </p>
        </div>
  
        {/* QUICK LINKS */}
        <h2 className="text-lg font-semibold text-white mb-3 border-b border-slate-700 pb-2">
          Quick Access
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-800 rounded-xl p-5 border border-teal-700 text-center">
            <p className="text-3xl mb-2">📊</p>
            <p className="text-white font-semibold">Dashboard</p>
            <p className="text-slate-400 text-xs mt-1">View your stats and logs</p>
          </div>
          <div className="bg-slate-800 rounded-xl p-5 border border-blue-700 text-center">
            <p className="text-3xl mb-2">🧠</p>
            <p className="text-white font-semibold">Mental Health</p>
            <p className="text-slate-400 text-xs mt-1">Check in with yourself</p>
          </div>
          <div className="bg-slate-800 rounded-xl p-5 border border-indigo-700 text-center">
            <p className="text-3xl mb-2">🥗</p>
            <p className="text-white font-semibold">Nutrition</p>
            <p className="text-slate-400 text-xs mt-1">Track your meals</p>
          </div>
          <div className="bg-slate-800 rounded-xl p-5 border border-slate-600 text-center">
            <p className="text-3xl mb-2">👤</p>
            <p className="text-white font-semibold">Profile</p>
            <p className="text-slate-400 text-xs mt-1">Your athlete profile</p>
          </div>
        </div>
  
      </div>
    );
  }
  
  export default Home;