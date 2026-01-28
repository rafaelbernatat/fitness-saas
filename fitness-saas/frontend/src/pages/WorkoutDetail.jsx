import { ArrowLeft, Play, Pause, RotateCcw, Check, Clock } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import MobileBar from '../components/MobileBar';

const mockWorkout = {
  id: 1,
  name: 'Full Body - Iniciante',
  description: 'Treino completo para iniciantes, focado em fortalecimento geral.',
  difficulty: 'BEGINNER',
  duration: 45,
  exercises: [
    {
      id: 1,
      name: 'Agachamento',
      sets: 3,
      reps: '12',
      load: 'Bodyweight',
      rest: 60,
      description: 'Pés na largura dos ombros, desça até que as coxas fiquem paralelas ao chão.',
    },
    {
      id: 2,
      name: 'Flexão de Braço',
      sets: 3,
      reps: '10',
      load: 'Bodyweight',
      rest: 45,
      description: 'Mãos um pouco mais abertas que os ombros, corpo reto.',
    },
    {
      id: 3,
      name: 'Remada Curvada',
      sets: 3,
      reps: '12',
      load: '15kg',
      rest: 60,
      description: 'Tronco inclinado, puxe os halteres em direção aos cotovelos.',
    },
  ],
};

const difficultyColors = {
  BEGINNER: 'bg-accent-green/25 text-accent-green',
  INTERMEDIATE: 'bg-accent-yellow/25 text-accent-yellow',
  ADVANCED: 'bg-accent-red/25 text-accent-red',
};

export default function WorkoutDetail() {
  const { id } = useParams();
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [completedExercises, setCompletedExercises] = useState(new Set());

  const currentExercise = mockWorkout.exercises[currentExerciseIndex];

  const toggleComplete = () => {
    setCompletedExercises((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(currentExercise.id)) {
        newSet.delete(currentExercise.id);
      } else {
        newSet.add(currentExercise.id);
      }
      return newSet;
    });
  };

  const nextExercise = () => {
    if (currentExerciseIndex < mockWorkout.exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    }
  };

  const prevExercise = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(currentExerciseIndex - 1);
    }
  };

  const progress = ((currentExerciseIndex + 1) / mockWorkout.exercises.length) * 100;
  const completedCount = completedExercises.size;

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-xl sticky top-0 z-50 border-b border-border/20">
        <div className="px-6 py-5 flex items-center gap-4">
          <Link
            to="/workouts"
            className="w-12 h-12 bg-background-elevated-hover rounded-2xl flex items-center justify-center text-text-tertiary hover:text-text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex-1">
            <h1 className="font-black text-lg text-text-primary truncate">{mockWorkout.name}</h1>
            <p className="text-xs text-text-secondary font-semibold mt-0.5">
              {completedCount}/{mockWorkout.exercises.length} completados
            </p>
          </div>
          <span
            className={`px-3 py-1.5 rounded-xl text-xs font-bold ${difficultyColors[mockWorkout.difficulty]}`}
          >
            {mockWorkout.difficulty}
          </span>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-background-elevated/50 px-6 py-3 border-b border-border/20">
        <div className="h-2 bg-background-elevated rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary-400 to-primary-600 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <main className="px-6 py-8 space-y-8">
        {/* Exercise Card */}
        <section className="card space-y-6 shadow-float-strong">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-text-secondary mb-2 font-semibold">
                Exercício {currentExerciseIndex + 1} de {mockWorkout.exercises.length}
              </p>
              <h2 className="text-2xl font-black text-text-primary">{currentExercise.name}</h2>
            </div>
            <button
              onClick={toggleComplete}
              className={`w-14 h-14 rounded-3xl flex items-center justify-center transition-all duration-300 ${
                completedExercises.has(currentExercise.id)
                  ? 'bg-accent-green text-white shadow-glow scale-110'
                  : 'bg-background-elevated-hover text-text-tertiary'
              }`}
            >
              <Check className="w-7 h-7" />
            </button>
          </div>

          {currentExercise.description && (
            <p className="text-text-secondary text-base leading-relaxed">{currentExercise.description}</p>
          )}

          {/* Stats */}
          <div className="grid grid-cols-4 gap-3">
            <StatBox label="Séries" value={currentExercise.sets} />
            <StatBox label="Reps" value={currentExercise.reps} />
            <StatBox label="Carga" value={currentExercise.load} />
            <StatBox label="Descanso" value={`${currentExercise.rest}s`} />
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center gap-4">
          <button
            onClick={prevExercise}
            disabled={currentExerciseIndex === 0}
            className="btn-float flex-1 py-4 text-sm disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Anterior
          </button>
          <button
            onClick={nextExercise}
            disabled={currentExerciseIndex === mockWorkout.exercises.length - 1}
            className="btn-primary flex-1 py-4 text-sm disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            Próximo
            <Play className="w-4 h-4" />
          </button>
        </div>

        {/* Timer */}
        <section className="card shadow-float">
          <h3 className="text-center text-sm text-text-secondary mb-5 font-semibold">Timer de Descanso</h3>
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                isRunning
                  ? 'bg-accent-red hover:bg-accent-red/90 shadow-glow'
                  : 'bg-gradient-to-br from-primary-400 to-primary-600 shadow-glow'
              }`}
            >
              {isRunning ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-0.5" />}
            </button>
            <div className="text-center">
              <p className="text-5xl font-black text-text-primary">{currentExercise.rest}s</p>
              <p className="text-sm text-text-secondary mt-2 font-semibold">Descanso</p>
            </div>
          </div>
        </section>

        {/* Exercise List */}
        <section>
          <h3 className="text-lg font-bold text-text-primary mb-5">Todos os Exercícios</h3>
          <div className="space-y-3">
            {mockWorkout.exercises.map((exercise, index) => (
              <button
                key={exercise.id}
                onClick={() => setCurrentExerciseIndex(index)}
                className={`w-full p-5 rounded-3xl border-2 transition-all duration-300 flex items-center gap-4 ${
                  currentExerciseIndex === index
                    ? 'bg-primary-500/15 border-primary-500 scale-[1.02]'
                    : completedExercises.has(exercise.id)
                    ? 'bg-accent-green/10 border-accent-green/30'
                    : 'bg-background-elevated border-border hover:bg-background-elevated-hover'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-black transition-all ${
                  completedExercises.has(exercise.id)
                    ? 'bg-accent-green text-white shadow-soft'
                    : currentExerciseIndex === index
                    ? 'bg-primary-500 text-white shadow-glow'
                    : 'bg-background-elevated-hover text-text-tertiary'
                }`}>
                  {completedExercises.has(exercise.id) ? '✓' : index + 1}
                </div>
                <span className={`text-base font-semibold ${
                  currentExerciseIndex === index ? 'text-primary-400' : 'text-text-primary'
                }`}>
                  {exercise.name}
                </span>
              </button>
            ))}
          </div>
        </section>
      </main>

      {/* Mobile Navigation */}
      <MobileBar />
    </div>
  );
}

function StatBox({ label, value }) {
  return (
    <div className="bg-background-elevated-hover rounded-3xl p-4 text-center">
      <p className="text-2xl font-black text-text-primary">{value}</p>
      <p className="text-xs text-text-secondary mt-1.5 font-semibold">{label}</p>
    </div>
  );
}
