import { useState, useEffect, useCallback } from 'react';

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_FOOD = { x: 5, y: 5 };
const INITIAL_DIR = { x: 0, y: 0 };

const PICKUPS = ['🏃🏾‍♀️', '💊', '🥗', '💧', '⚡'];

function Game() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [dir, setDir] = useState(INITIAL_DIR);
  const [running, setRunning] = useState(false);
  const [dead, setDead] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [pickup, setPickup] = useState('🏃🏾‍♀️');

  const randomFood = () => ({
    x: Math.floor(Math.random() * GRID_SIZE),
    y: Math.floor(Math.random() * GRID_SIZE),
  });

  const reset = () => {
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setDir(INITIAL_DIR);
    setDead(false);
    setScore(0);
    setRunning(false);
  };

  const start = () => {
    reset();
    setTimeout(() => {
      setDir({ x: 1, y: 0 });
      setRunning(true);
    }, 100);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (!running) return;
      if (e.key === 'ArrowUp') setDir({ x: 0, y: -1 });
      if (e.key === 'ArrowDown') setDir({ x: 0, y: 1 });
      if (e.key === 'ArrowLeft') setDir({ x: -1, y: 0 });
      if (e.key === 'ArrowRight') setDir({ x: 1, y: 0 });
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [running]);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setSnake((prev) => {
        const head = {
          x: prev[0].x + dir.x,
          y: prev[0].y + dir.y,
        };

        if (
          head.x < 0 || head.x >= GRID_SIZE ||
          head.y < 0 || head.y >= GRID_SIZE ||
          prev.some((s) => s.x === head.x && s.y === head.y)
        ) {
          setRunning(false);
          setDead(true);
          setHighScore((h) => Math.max(h, score));
          return prev;
        }

        const ateFood = head.x === food.x && head.y === food.y;
        const newSnake = ateFood ? [head, ...prev] : [head, ...prev.slice(0, -1)];

        if (ateFood) {
          setScore((s) => s + 10);
          setFood(randomFood());
          setPickup(PICKUPS[Math.floor(Math.random() * PICKUPS.length)]);
        }

        return newSnake;
      });
    }, 150);
    return () => clearInterval(interval);
  }, [running, dir, food, score]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-teal-400 mb-2">Athlete Runner 🏃🏾‍♀️</h1>
      <p className="text-slate-400 text-sm mb-4">
        Collect health pickups to grow stronger! Use arrow keys to move.
      </p>

      <div className="flex gap-6 mb-4">
        <div className="bg-slate-800 rounded-xl px-4 py-2 border border-slate-700">
          <p className="text-slate-400 text-xs">Score</p>
          <p className="text-teal-400 font-bold text-xl">{score}</p>
        </div>
        <div className="bg-slate-800 rounded-xl px-4 py-2 border border-slate-700">
          <p className="text-slate-400 text-xs">Best</p>
          <p className="text-yellow-400 font-bold text-xl">{highScore}</p>
        </div>
      </div>

      <div
        className="relative bg-slate-900 border-2 border-teal-700 rounded-xl overflow-hidden"
        style={{ width: GRID_SIZE * 24, height: GRID_SIZE * 24 }}
      >
        {snake.map((s, i) => (
          <div
            key={i}
            className={`absolute rounded-sm ${i === 0 ? 'bg-teal-400' : 'bg-teal-700'}`}
            style={{
              width: 22,
              height: 22,
              left: s.x * 24,
              top: s.y * 24,
            }}
          />
        ))}

        <div
          className="absolute flex items-center justify-center"
          style={{
            width: 24,
            height: 24,
            left: food.x * 24,
            top: food.y * 24,
            fontSize: 18,
          }}
        >
          {pickup}
        </div>

        {!running && !dead && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/80">
            <p className="text-white text-xl font-bold mb-4">Ready to run? 🏃🏾‍♀️</p>
            <button
              onClick={start}
              className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-2 rounded-xl font-bold transition"
            >
              Start Game
            </button>
          </div>
        )}

        {dead && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/80">
            <p className="text-red-400 text-xl font-bold mb-1">Game Over 😤</p>
            <p className="text-white text-sm mb-4">Score: {score}</p>
            <button
              onClick={start}
              className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-2 rounded-xl font-bold transition"
            >
              Try Again
            </button>
          </div>
        )}
      </div>

      <div className="flex gap-2 mt-4 justify-center">
        <div className="grid grid-cols-3 gap-2">
          <div></div>
          <button onClick={() => setDir({ x: 0, y: -1 })} className="bg-slate-700 text-white p-3 rounded-xl hover:bg-slate-600">▲</button>
          <div></div>
          <button onClick={() => setDir({ x: -1, y: 0 })} className="bg-slate-700 text-white p-3 rounded-xl hover:bg-slate-600">◀</button>
          <button onClick={() => setDir({ x: 0, y: 1 })} className="bg-slate-700 text-white p-3 rounded-xl hover:bg-slate-600">▼</button>
          <button onClick={() => setDir({ x: 1, y: 0 })} className="bg-slate-700 text-white p-3 rounded-xl hover:bg-slate-600">▶</button>
        </div>
      </div>

      <p className="text-slate-500 text-xs text-center mt-3">
        Use arrow keys or buttons to control
      </p>
    </div>
  );
}

export default Game;