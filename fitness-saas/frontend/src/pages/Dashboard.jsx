import { Dumbbell, Plus, TrendingUp, Play, MoreHorizontal, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import MobileBar from '../components/MobileBar';

const userName = 'Dreamer';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-xl sticky top-0 z-50 border-b border-border/20">
        <div className="px-6 py-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-tertiary text-xs mb-1">Olá,</p>
              <h1 className="text-2xl font-bold text-text-primary tracking-tight">{userName}</h1>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-glow">
              {userName[0]}
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="px-6 py-8 space-y-8">
        {/* Stats */}
        <section className="grid grid-cols-2 gap-4">
          <StatCard
            icon={<Dumbbell className="w-5 h-5" />}
            value="4"
            label="Treinos"
            sublabel="Esta semana"
            color="primary"
            emoji="💪"
          />
          <StatCard
            icon={<TrendingUp className="w-5 h-5" />}
            value="180"
            label="Minutos"
            sublabel="Treinados"
            color="accent-green"
            emoji="⚡"
          />
        </section>

        {/* Quick Actions */}
        <section className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-text-primary">Ações Rápidas</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/workouts/create">
              <QuickAction
                icon={<Plus className="w-5 h-5" />}
                label="Novo Treino"
                color="primary"
                emoji="🏋️"
              />
            </Link>
            <Link to="/workouts">
              <QuickAction
                icon={<Play className="w-5 h-5" />}
                label="Treinos"
                color="accent-blue"
                emoji="🎯"
              />
            </Link>
          </div>
        </section>

        {/* Today's Workout */}
        <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-text-primary">Treino de Hoje</h2>
          </div>
          <Link to="/workouts/1" className="card hover:scale-[1.02] transition-all duration-300 group shadow-float block">
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-2xl flex items-center justify-center text-3xl shadow-inner">
                  💪
                </div>
                <div>
                  <h3 className="font-bold text-base text-text-primary mb-1">Full Body</h3>
                  <p className="text-text-secondary text-xs">Iniciante • 6 exercícios</p>
                </div>
              </div>
              <button className="text-text-tertiary hover:text-text-primary transition-colors p-1">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-border/20">
              <div className="flex items-center gap-5 text-xs text-text-secondary">
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  45 min
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Dumbbell className="w-3.5 h-3.5" />
                  6 exercícios
                </span>
              </div>
              <button className="btn-primary py-2 px-5 text-xs font-bold group-hover:shadow-glow transition-all">
                Iniciar
              </button>
            </div>
          </Link>
        </section>

        {/* Recent Workouts */}
        <section className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-text-primary">Recentes</h2>
            <Link to="/workouts" className="text-primary-400 text-xs font-bold hover:text-primary-300">
              Ver todos
            </Link>
          </div>
          <div className="space-y-3">
            <RecentWorkout
              name="Upper Body"
              date="2 dias atrás"
              completed={true}
              duration="50 min"
              emoji="💪"
              color="accent-blue"
            />
            <RecentWorkout
              name="Cardio HIIT"
              date="4 dias atrás"
              completed={true}
              duration="30 min"
              emoji="🔥"
              color="accent-red"
            />
          </div>
        </section>
      </main>

      {/* Mobile Navigation */}
      <MobileBar />
    </div>
  );
}

function StatCard({ icon, value, label, sublabel, color, emoji }) {
  const colors = {
    primary: 'from-primary-400/25 to-primary-600/25 text-primary-400',
    'accent-green': 'from-accent-green/25 to-accent-green/35 text-accent-green',
    'accent-blue': 'from-accent-blue/25 to-accent-blue/35 text-accent-blue',
    'accent-yellow': 'from-accent-yellow/25 to-accent-yellow/35 text-accent-yellow',
  };

  return (
    <div className="card-flat p-4 shadow-float hover:shadow-float-strong transition-all duration-300">
      <div className="flex items-start justify-between mb-3">
        <div className="icon-medium bg-gradient-to-br">
          {icon}
        </div>
        <span className="text-2xl">{emoji}</span>
      </div>
      <p className="text-2xl font-black text-text-primary mb-0.5">{value}</p>
      <p className="text-xs font-bold text-text-tertiary mb-0">{label}</p>
      {sublabel && <p className="text-[10px] text-text-muted font-medium">{sublabel}</p>}
    </div>
  );
}

function QuickAction({ icon, label, color, emoji }) {
  const colors = {
    primary: 'bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 shadow-glow',
    'accent-green': 'bg-gradient-to-br from-accent-green to-accent-green/90 shadow-float-strong',
    'accent-blue': 'bg-gradient-to-br from-accent-blue to-accent-blue/90 shadow-float-strong',
    'accent-yellow': 'bg-gradient-to-br from-accent-yellow to-accent-yellow/90 shadow-float-strong',
  };

  return (
    <button className="card-flat flex flex-col items-center gap-3 p-4 active:scale-95 transition-all duration-200 hover:bg-background-elevated-hover group shadow-float">
      <div className="icon-medium text-white">
        {icon}
      </div>
      <span className="text-sm font-bold text-text-primary group-hover:text-text-primary transition-colors">
        {label}
      </span>
    </button>
  );
}

function RecentWorkout({ name, date, completed, duration, emoji, color }) {
  const colors = {
    primary: 'text-primary-400',
    'accent-blue': 'text-accent-blue',
    'accent-red': 'text-accent-red',
    'accent-green': 'text-accent-green',
    'accent-yellow': 'text-accent-yellow',
  };

  return (
    <div className="card-flat flex items-center gap-4 p-4 hover:bg-background-elevated-hover transition-all duration-200 shadow-card hover:shadow-float">
      <div className="icon-medium">
        {completed ? '✓' : '○'}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-xl">{emoji}</span>
          <p className="font-bold text-sm text-text-primary">{name}</p>
        </div>
        <p className="text-xs text-text-tertiary font-medium">{date}</p>
      </div>
      <span className="text-xs font-bold text-text-secondary">{duration}</span>
    </div>
  );
}
