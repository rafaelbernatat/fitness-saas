import { User, Settings, Bell, Shield, LogOut, ChevronRight, Edit, Camera, Moon, Sun, Monitor } from 'lucide-react';
import MobileBar from '../components/MobileBar';
import { useTheme } from '../contexts/ThemeContext';

export default function Profile() {
  const userName = 'Dreamer';
  const userEmail = 'dreamer@email.com';
  const { theme, setTheme, isDark } = useTheme();

  const menuItems = [
    { icon: <Edit className="w-5 h-5" />, label: 'Editar Perfil', to: '#' },
    { icon: <Bell className="w-5 h-5" />, label: 'Notificações', to: '#' },
    { icon: <Shield className="w-5 h-5" />, label: 'Privacidade', to: '#' },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-xl sticky top-0 z-50 border-b border-border/20">
        <div className="px-6 py-5">
          <h1 className="text-2xl font-bold text-text-primary">Perfil</h1>
        </div>
      </header>

      <main className="px-6 py-8 space-y-8">
        {/* Profile Card */}
        <section className="card shadow-float-strong">
          <div className="flex items-center gap-6 mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-black text-3xl shadow-glow">
                {userName[0]}
              </div>
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-background-elevated rounded-full flex items-center justify-center border-2 border-background shadow-card text-text-primary hover:text-text-primary transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1">
              <h2 className="font-black text-xl text-text-primary mb-1">{userName}</h2>
              <p className="text-text-secondary text-xs">{userEmail}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-5 border-t border-border/20">
            <StatBox label="Treinos" value="15" />
            <StatBox label="Tempo" value="180h" />
          </div>
        </section>

        {/* Theme Selector */}
        <section className="card shadow-float">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-primary-500/20 rounded-2xl flex items-center justify-center text-primary-400">
              {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </div>
            <h3 className="text-lg font-bold text-text-primary">Tema</h3>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <ThemeButton
              icon={<Sun className="w-5 h-5" />}
              label="Claro"
              value="light"
              current={theme}
              onClick={() => setTheme('light')}
            />
            <ThemeButton
              icon={<Moon className="w-5 h-5" />}
              label="Escuro"
              value="dark"
              current={theme}
              onClick={() => setTheme('dark')}
            />
            <ThemeButton
              icon={<Monitor className="w-5 h-5" />}
              label="Sistema"
              value="system"
              current={theme}
              onClick={() => setTheme('system')}
            />
          </div>
        </section>

        {/* Menu */}
        <section className="space-y-4">
          <h3 className="text-xs font-bold text-text-tertiary mb-3">OPÇÕES</h3>

          {menuItems.map((item, index) => (
            <button
              key={index}
              className="card w-full flex items-center gap-4 p-4 hover:bg-background-elevated-hover transition-all duration-200 shadow-card hover:shadow-float group"
            >
              <div className="w-10 h-10 bg-primary-500/20 rounded-2xl flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all">
                {item.icon}
              </div>
              <span className="flex-1 text-left font-semibold text-sm text-text-primary">
                {item.label}
              </span>
              <ChevronRight className="w-5 h-5 text-text-tertiary group-hover:text-text-primary transition-colors" />
            </button>
          ))}
        </section>

        {/* Logout */}
        <section>
          <button className="w-full flex items-center justify-center gap-2 py-4 text-accent-red font-bold text-sm hover:bg-accent-red/10 rounded-3xl transition-all duration-200">
            <LogOut className="w-5 h-5" />
            Sair da Conta
          </button>
        </section>
      </main>

      {/* Mobile Navigation */}
      <MobileBar />
    </div>
  );
}

function StatBox({ label, value }) {
  return (
    <div className="bg-background-elevated-hover rounded-2xl p-4 text-center">
      <p className="text-2xl font-black text-text-primary mb-1">{value}</p>
      <p className="text-xs font-bold text-text-tertiary">{label}</p>
    </div>
  );
}

function ThemeButton({ icon, label, value, current, onClick }) {
  const isActive = current === value;

  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-200 ${
        isActive
          ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-glow scale-105'
          : 'bg-background-elevated hover:bg-background-elevated-hover text-text-tertiary hover:text-text-primary'
      }`}
    >
      {icon}
      <span className="text-xs font-bold">{label}</span>
    </button>
  );
}
