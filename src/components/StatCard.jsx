function StatCard({ label, value, unit, color }) {
    return (
      <div className="bg-slate-800 rounded-xl p-5 text-center shadow-md border border-slate-700">
        <p className={`text-3xl font-bold ${color}`}>
          {value}<span className="text-lg ml-1">{unit}</span>
        </p>
        <p className="text-slate-400 text-sm mt-2">{label}</p>
      </div>
    );
  }
  
  export default StatCard;