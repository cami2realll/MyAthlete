import { useState } from 'react';
import StatCard from '../StatCard.jsx';
import MoodTracker from '../MoodTracker.jsx';
import Food from '../Food.jsx';
import DragList from '../DragList.jsx';
import Collapsible from '../Collapsible.jsx';

const defaultWorkouts = [
  {
    id: 1,
    emoji: '🏃🏾‍♀️',
    name: 'Sprint Intervals',
    detail: '8x100m at 90% effort',
  },
  {
    id: 2,
    emoji: '🏋🏾‍♀️',
    name: 'Strength Training',
    detail: 'Squats, deadlifts, lunges',
  },
  {
    id: 3,
    emoji: '🧘🏾‍♀️',
    name: 'Recovery Stretch',
    detail: '20 min full body stretch',
  },
  { id: 4, emoji: '🚴🏾‍♀️', name: 'Bike Cooldown', detail: '15 min low intensity' },
];

function Dashboard({ athleteName }) {
  const [workouts, setWorkouts] = useState(defaultWorkouts);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-teal-400 mb-2">
        Welcome back, {athleteName} 💪🏾
      </h1>
      <p className="text-slate-400 mb-6 text-sm">
        Here is your health overview for today.
      </p>

      <h2 className="text-lg font-semibold text-white mb-3 border-b border-slate-700 pb-2">
        Today's Stats
      </h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <StatCard label="Recovery Score" value="98" color="text-teal-400" />
        <StatCard label="Sleep" value="7.5" unit="hrs" color="text-blue-400" />
        <StatCard label="Mood" value="82" unit="%" color="text-indigo-400" />
      </div>

      <h2 className="text-lg font-semibold text-white mb-3 border-b border-slate-700 pb-2">
        Today's Workout Plan
      </h2>
      <DragList
        items={workouts}
        setItems={setWorkouts}
        title="Drag to reorder your workouts"
      />

      <h2 className="text-lg font-semibold text-white mb-3 border-b border-slate-700 pb-2">
        Health Sections
      </h2>
      <Collapsible title="Mental Check-In" emoji="🧠">
        <MoodTracker athleteName={athleteName} />
      </Collapsible>
      <Collapsible title="Nutrition Log" emoji="🥗">
        <Food />
      </Collapsible>
      <Collapsible title="Recovery Tips" emoji="💤">
        <p>
          Sleep 8-9 hours, hydrate with 3L of water, and foam roll after
          training.
        </p>
      </Collapsible>
      <Collapsible title="Coach Notes" emoji="📋">
        <p>
          Focus on your start mechanics this week. Drive phase needs more power
          out of the blocks.
        </p>
      </Collapsible>
    </div>
  );
}

export default Dashboard;
