import { Dumbbell, Plus, Filter, Search, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import MobileBar from '../components/MobileBar';

const mockWorkouts = [
  {
    id: 1,
    name: 'Full Body - Iniciante',
    difficulty: 'BEGINNER',
    duration: 45,
    exercises: 6,
    thumbnail: '💪',
    color: 'accent-green',
  },
  {
    id: 2,
    name: 'Upper Body - Intermediário',
    difficulty: 'INTERMEDIATE',
    duration: 50,
    exercises: 8,
    thumbnail: '🏋️',
    color: 'accent-blue',
  },
  {
    id: 3,
    name: 'Lower Body - Avançado',
    difficulty: 'ADVANCED',
    duration: 55,
    exercises: 7,
    thumbnail: '🦵',
    color: 'accent-red',
  },
  {
    id: 4,
    name: 'Cardio HIIT',
    difficulty: 'INTERMEDIATE',
    duration: 30,
    exercises: 4,
    thumbnail: '🔥',
    color: 'accent-yellow',
  },
];

const difficultyColors = {
  BEGINNER: 'bg-accent-green/25 text-accent-green',
  INTERMEDIATE: 'bg-accent-yellow/25 text-accent-yellow',
  ADVANCED: 'bg-accent-red/25 text-accent-red',
};

export default function Workouts() {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-xl sticky top-0 z-50 border-b border-border/20">
        <div className="px-6 py-5">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-text-primary">Treinos</h1>
            <Link
              to="/workouts/create"
              className="w-12 h-12 btn-float p-0 shadow-float-strong flex items-center justify-center"
            >
              <Plus className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Search */}
      <div className="px-6 py-5">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" />
          <input
            type="text"
            placeholder="Buscar treinos..."
            className="input-field pl-12 w-full text-sm"
          />
        </div>
      </div>

      {/* Workout List */}
      <main className="px-6 space-y-5">
        {mockWorkouts.map((workout) => (
          <Link
            key={workout.id}
            to={`/workouts/${workout.id}`}
            className="card hover:scale-[1.02] transition-all duration-300 shadow-float"
          >
            <div className="flex items-center gap-4">
              <div className="text-4xl">{workout.thumbnail}</div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-text-primary mb-2">{workout.name}</h3>
                <div className="flex items-center gap-5 text-xs text-text-secondary">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    {workout.duration} min
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <Dumbbell className="w-3.5 h-3.5" />
                    {workout.exercises} exercícios
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between pt-5 border-t border-border/20">
              <span
                className={`px-3 py-1.5 rounded-xl text-xs font-bold ${difficultyColors[workout.difficulty]}`}
              >
                {workout.difficulty}
              </span>
              <button className="w-10 h-10 bg-background-elevated-hover rounded-xl flex items-center justify-center text-text-tertiary hover:text-text-primary transition-colors">
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </Link>
        ))}
      </main>

      {/* Mobile Navigation */}
      <MobileBar />
    </div>
  );
}
