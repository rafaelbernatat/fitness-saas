import { ArrowLeft, Plus, X, Video, Save, Check } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MobileBar from '../components/MobileBar';

export default function CreateWorkout() {
  const navigate = useNavigate();
  const [exercises, setExercises] = useState([
    { id: 1, name: '', sets: '', reps: '', load: '', rest: '', video: false },
  ]);

  const addExercise = () => {
    setExercises([
      ...exercises,
      { id: Date.now(), name: '', sets: '', reps: '', load: '', rest: '', video: false },
    ]);
  };

  const removeExercise = (id) => {
    if (exercises.length > 1) {
      setExercises(exercises.filter((e) => e.id !== id));
    }
  };

  const updateExercise = (id, field, value) => {
    setExercises(
      exercises.map((e) => (e.id === id ? { ...e, [field]: value } : e))
    );
  };

  const handleSave = (e) => {
    e.preventDefault();
    navigate('/workouts');
  };

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
          <h1 className="text-2xl font-bold text-text-primary flex-1">Novo Treino</h1>
        </div>
      </header>

      <main className="px-6 py-8 space-y-8">
        {/* Workout Info */}
        <section className="card space-y-5 shadow-float">
          <div className="space-y-2">
            <label className="text-sm font-bold text-text-secondary">Nome do Treino</label>
            <input
              type="text"
              placeholder="Ex: Full Body - Iniciante"
              className="input-field w-full text-base"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-bold text-text-secondary">Duração (min)</label>
              <input
                type="number"
                placeholder="45"
                className="input-field w-full text-base text-center"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-text-secondary">Dificuldade</label>
              <select className="input-field w-full text-base bg-background-elevated">
                <option value="BEGINNER">Iniciante</option>
                <option value="INTERMEDIATE">Intermediário</option>
                <option value="ADVANCED">Avançado</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-text-secondary">Descrição</label>
            <textarea
              placeholder="Descreva o objetivo deste treino..."
              rows={3}
              className="input-field w-full resize-none text-base"
            />
          </div>
        </section>

        {/* Exercises */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-text-primary">Exercícios</h2>
            <span className="text-text-secondary text-base font-semibold">{exercises.length}</span>
          </div>

          <div className="space-y-5">
            {exercises.map((exercise, index) => (
              <div key={exercise.id} className="card space-y-4 shadow-float">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary font-semibold">Exercício {index + 1}</span>
                  {exercises.length > 1 && (
                    <button
                      onClick={() => removeExercise(exercise.id)}
                      className="w-10 h-10 bg-accent-red/25 rounded-2xl flex items-center justify-center text-accent-red hover:bg-accent-red/35 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <input
                  type="text"
                  placeholder="Nome do exercício"
                  value={exercise.name}
                  onChange={(e) => updateExercise(exercise.id, 'name', e.target.value)}
                  className="input-field w-full text-base"
                />

                <div className="grid grid-cols-3 gap-3">
                  <input
                    type="text"
                    placeholder="Séries"
                    value={exercise.sets}
                    onChange={(e) => updateExercise(exercise.id, 'sets', e.target.value)}
                    className="input-field text-base text-center"
                  />
                  <input
                    type="text"
                    placeholder="Reps"
                    value={exercise.reps}
                    onChange={(e) => updateExercise(exercise.id, 'reps', e.target.value)}
                    className="input-field text-base text-center"
                  />
                  <input
                    type="text"
                    placeholder="Carga"
                    value={exercise.load}
                    onChange={(e) => updateExercise(exercise.id, 'load', e.target.value)}
                    className="input-field text-base text-center"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Descanso (s)"
                    value={exercise.rest}
                    onChange={(e) => updateExercise(exercise.id, 'rest', e.target.value)}
                    className="input-field text-base text-center"
                  />
                  <button
                    onClick={() => updateExercise(exercise.id, 'video', !exercise.video)}
                    className={`btn-ghost flex items-center justify-center gap-2 text-sm ${
                      exercise.video ? 'text-accent-blue bg-accent-blue/25' : ''
                    }`}
                  >
                    <Video className="w-4 h-4" />
                    <span className="font-semibold">
                      {exercise.video ? 'Vídeo adicionado' : 'Adicionar vídeo'}
                    </span>
                    {exercise.video && <Check className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            ))}

            <button
              onClick={addExercise}
              className="w-full btn-float flex items-center justify-center gap-2 py-5 text-base shadow-float"
            >
              <Plus className="w-5 h-5" />
              Adicionar Exercício
            </button>
          </div>
        </section>

        {/* Save Button */}
        <button onClick={handleSave} className="btn-primary w-full text-base py-4 shadow-glow">
          <div className="flex items-center justify-center gap-2">
            <Save className="w-5 h-5" />
            Salvar Treino
          </div>
        </button>
      </main>

      {/* Mobile Navigation */}
      <MobileBar />
    </div>
  );
}
