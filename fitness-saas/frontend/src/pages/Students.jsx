import { UserPlus, Search, MoreVertical, Mail, Phone, Calendar, Dumbbell } from 'lucide-react';
import MobileBar from '../components/MobileBar';

const mockStudents = [
  {
    id: 1,
    name: 'João Silva',
    email: 'joao@email.com',
    phone: '+55 11 98765-4321',
    avatar: '👨',
    joinedAt: '2026-01-15',
    totalWorkouts: 12,
    lastWorkout: '2 dias atrás',
  },
  {
    id: 2,
    name: 'Maria Santos',
    email: 'maria@email.com',
    phone: '+55 11 91234-5678',
    avatar: '👩',
    joinedAt: '2026-01-10',
    totalWorkouts: 8,
    lastWorkout: 'Hoje',
  },
  {
    id: 3,
    name: 'Pedro Costa',
    email: 'pedro@email.com',
    phone: '+55 11 95678-9012',
    avatar: '👨',
    joinedAt: '2026-01-08',
    totalWorkouts: 15,
    lastWorkout: '1 semana atrás',
  },
];

export default function Students() {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-xl sticky top-0 z-50 border-b border-border/20">
        <div className="px-6 py-5">
          <h1 className="text-2xl font-bold text-text-primary">Alunos</h1>
          <p className="text-text-secondary text-sm mt-1">{mockStudents.length} alunos cadastrados</p>
        </div>
      </header>

      {/* Search */}
      <div className="px-6 py-5">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" />
          <input
            type="text"
            placeholder="Buscar alunos..."
            className="input-field pl-12 w-full text-sm"
          />
        </div>
      </div>

      {/* Student List */}
      <main className="px-6 space-y-4">
        {mockStudents.map((student) => (
          <StudentCard key={student.id} {...student} />
        ))}
      </main>

      {/* Mobile Navigation */}
      <MobileBar />
    </div>
  );
}

function StudentCard({ id, name, email, phone, avatar, joinedAt, totalWorkouts, lastWorkout }) {
  return (
    <div className="card shadow-float hover:shadow-float-strong transition-all duration-300">
      <div className="flex items-center gap-4 mb-5">
        <div className="text-4xl">{avatar}</div>
        <div className="flex-1">
          <h3 className="font-bold text-lg text-text-primary">{name}</h3>
          <p className="text-text-secondary text-sm">{email}</p>
        </div>
        <button className="w-10 h-10 bg-background-elevated-hover rounded-xl flex items-center justify-center text-text-tertiary hover:text-text-primary transition-colors">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-5">
        <div className="flex items-center gap-2 text-xs text-text-secondary">
          <Phone className="w-3.5 h-3.5" />
          {phone}
        </div>
        <div className="flex items-center gap-2 text-xs text-text-secondary">
          <Dumbbell className="w-3.5 h-3.5" />
          {totalWorkouts} treinos
        </div>
        <div className="flex items-center gap-2 text-xs text-text-secondary">
          <Calendar className="w-3.5 h-3.5" />
          {lastWorkout}
        </div>
      </div>

      <button className="btn-float w-full text-sm flex items-center justify-center gap-2">
        Ver Detalhes
      </button>
    </div>
  );
}
