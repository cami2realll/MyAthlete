function Profile({ athleteName, sport, school, position, bio }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-teal-400 mb-6">My Profile 👤</h1>

      <div className="bg-slate-800 rounded-2xl p-6 mb-6 border border-slate-700">
        <h2 className="text-2xl font-bold text-white mb-1">{athleteName}</h2>
        <p className="text-teal-400 text-sm mb-3">
          {sport} · {school}
        </p>
        <p className="text-slate-300 text-sm leading-relaxed">{bio}</p>
      </div>

      <h2 className="text-lg font-semibold text-white mb-3 border-b border-slate-700 pb-2">
        Athlete Info
      </h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
          <p className="text-slate-400 text-xs">Sport</p>
          <p className="text-white font-semibold mt-1">{sport}</p>
        </div>
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
          <p className="text-slate-400 text-xs">School</p>
          <p className="text-white font-semibold mt-1">{school}</p>
        </div>
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
          <p className="text-slate-400 text-xs">Position</p>
          <p className="text-white font-semibold mt-1">{position}</p>
        </div>
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
          <p className="text-slate-400 text-xs">Status</p>
          <p className="text-teal-400 font-semibold mt-1">Active</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
