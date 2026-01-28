import { TrendingUp, Activity, Calendar, Trophy, Target, Zap } from 'lucide-react';
import MobileBar from '../components/MobileBar';

const mockProgress = [
  { date: '2026-01-27', workout: 'Full Body - Iniciante', completed: true, duration: 45 },
  { date: '2026-01-25', workout: 'Upper Body - Intermediário', completed: true, duration: 50 },
  { date: '2026-01-23', workout: 'Lower Body - Avançado', completed: false, duration: 0 },
  { date: '2026-01-21', workout: 'Full Body - Iniciante', completed: true, duration: 42 },
  { date: '2026-01-19', workout: 'Cardio HIIT', completed: true, duration: 30 },
];

const stats = {
  totalWorkouts: 15,
  totalMinutes: 720,
  streak: 5,
  currentWeight: 75.5,
};

export default function Progress() {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-xl sticky top-0 z-50 border-b border-border/20">
        <div className="px-6 py-5">
          <h1 className="text-2xl font-bold text-text-primary">Progresso</h1>
        </div>
      </header>

      <main className="px-6 py-8 space-y-8">
        {/* Stats Cards */}
        <section className="grid grid-cols-2 gap-4">
          <StatCard
            icon={<Activity className="w-5 h-5" />}
            value={stats.totalWorkouts}
            label="Treinos"
            sublabel="Totais"
            trend="+3 esta semana"
            color="primary"
            emoji="💪"
          />
          <StatCard
            icon={<TrendingUp className="w-5 h-5" />}
            value={`${stats.totalMinutes} min`}
            label="Tempo"
            sublabel="Total"
            trend="+120 min"
            color="accent-blue"
            emoji="⏱️"
          />
          <StatCard
            icon={<Trophy className="w-5 h-5" />}
            value={stats.streak}
            label="Dias"
            sublabel="Seguidos"
            trend="Pessoal!"
            color="accent-yellow"
            emoji="🔥"
          />
          <StatCard
            icon={<Zap className="w-5 h-5" />}
            value={`${stats.currentWeight} kg`}
            label="Peso"
            sublabel="Atual"
            trend="-1.2 kg"
            color="accent-green"
            emoji="⚡"
          />
        </section>

        {/* Weight Chart (simplified visual) */}
        <section className="card space-y-5 shadow-float">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-text-primary">Evolução de Peso</h2>
            <select className="bg-background-elevated-hover rounded-xl px-4 py-2 text-sm text-text-tertiary border-0">
              <option>30 dias</option>
              <option>7 dias</option>
              <option>90 dias</option>
            </select>
          </div>
          <div className="h-48 flex items-end justify-between gap-2 px-3">
            {[78, 77.5, 77.2, 76.8, 76.5, 76, 75.5].map((weight, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-primary-500/30 to-primary-400/10 rounded-t-2xl relative group cursor-pointer hover:from-primary-500/40 hover:to-primary-400/20 transition-all"
                style={{ height: `${((weight - 70) / 10) * 100}%` }}
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-background-elevated px-2 py-1 rounded-xl text-sm font-bold text-text-primary opacity-0 group-hover:opacity-100 transition-opacity shadow-soft">
                  {weight}kg
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-text-tertiary font-semibold px-3">
            <span>22/01</span>
            <span>23/01</span>
            <span>24/01</span>
            <span>25/01</span>
            <span>26/01</span>
            <span>27/01</span>
            <span>Hoje</span>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="space-y-5">
          <h2 className="text-lg font-bold text-text-primary">Atividade Recente</h2>
          <div className="space-y-3">
            {mockProgress.map((activity, index) => (
              <ActivityItem key={index} {...activity} />
            ))}
          </div>
        </section>

        {/* Goals */}
        <section className="card space-y-5 shadow-float">
          <h2 className="text-lg font-bold text-text-primary">Metas</h2>
          <GoalCard
            title="Treinar 5x por semana"
            progress={4}
            total={5}
            color="primary"
            emoji="🎯"
          />
          <GoalCard
            title="Perder 2kg este mês"
            progress={1.2}
            total={2}
            color="accent-green"
            unit="kg"
            emoji="⚖️"
          />
          <GoalCard
            title="Treinar 60h no ano"
            progress={12}
            total={60}
            color="accent-blue"
            unit="h"
            emoji="🏆"
          />
        </section>
      </main>

      {/* Mobile Navigation */}
      <MobileBar />
    </div>
  );
}

function StatCard({ icon, value, label, sublabel, trend, color, emoji }) {
  const colors = {
    primary: 'from-primary-400/25 to-primary-600/25 text-primary-400',
    'accent-green': 'from-accent-green/25 to-accent-green/35 text-accent-green',
    'accent-blue': 'from-accent-blue/25 to-accent-blue/35 text-accent-blue',
    'accent-yellow': 'from-accent-yellow/25 to-accent-yellow/35 text-accent-yellow',
  };

  return (
    <div className="card p-4 shadow-float hover:shadow-float-strong transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="icon-medium bg-gradient-to-br">
          {icon}
        </div>
        <span className="text-2xl">{emoji}</span>
      </div>
      <p className="text-2xl font-black text-text-primary mb-1">{value}</p>
      <p className="text-sm font-bold text-text-tertiary mb-0.5">{label}</p>
      {sublabel && <p className="text-xs text-text-muted font-medium">{sublabel}</p>}
      <p className="text-accent-green text-xs mt-2 font-semibold">{trend}</p>
    </div>
  );
}

function ActivityItem({ date, workout, completed, duration }) {
  const dateObj = new Date(date);
  const formattedDate = dateObj.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });

  return (
    <div className="card flex items-center gap-4 p-4 hover:bg-background-elevated-hover transition-all duration-200 shadow-card hover:shadow-float">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg ${
        completed ? 'bg-accent-green text-white shadow-soft' : 'bg-background-elevated-hover text-text-tertiary'
      }`}>
        {completed ? '✓' : '✗'}
      </div>
      <div className="flex-1">
        <p className="font-bold text-sm text-text-primary">{workout}</p>
        <p className="text-xs text-text-tertiary font-medium mt-0.5">
          {formattedDate} • {duration > 0 ? `${duration} min` : 'Não completado'}
        </p>
      </div>
    </div>
  );
}

function GoalCard({ title, progress, total, color, unit, emoji }) {
  const percentage = (progress / total) * 100;
  const colors = {
    primary: 'bg-gradient-to-r from-primary-400 to-primary-600',
    green: 'bg-gradient-to-r from-accent-green to-accent-green/80',
    blue: 'bg-gradient-to-r from-accent-blue to-accent-blue/80',
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">{emoji}</span>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <span className="font-bold text-sm text-text-primary">{title}</span>
            <span className="text-xs text-text-tertiary font-semibold">
              {progress}/{total} {unit}
            </span>
          </div>
        </div>
      </div>
      <div className="h-2 bg-background-elevated rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-500 ease-out shadow-soft ${colors[color] || colors.primary}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
