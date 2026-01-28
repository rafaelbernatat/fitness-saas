import { Dumbbell, Calendar, Users, User, Edit, UserPlus, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function MobileBar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: <Dumbbell className="w-6 h-6" />, label: 'Treinos', to: '/dashboard' },
    { icon: <Calendar className="w-6 h-6" />, label: 'Progresso', to: '/progress' },
    { icon: <Users className="w-6 h-6" />, label: 'Alunos', to: '/students' },
    { icon: <User className="w-6 h-6" />, label: 'Perfil', to: '/profile' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-6">
      <div className="bg-gray-900 rounded-3xl border border-gray-800 p-4 relative">
        <div className="flex justify-around items-center">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              icon={item.icon}
              label={item.label}
              to={item.to}
              active={isActive(item.to)}
              index={index}
            />
          ))}
          
          {/* Central FAB Button */}
          <div className="relative">
            <button
              onClick={toggleMenu}
              className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 relative -top-4 border-4 border-gray-800"
            >
              <span className="text-2xl font-bold">+</span>
            </button>
            
            {/* Quick Actions - 2 Bolas com Ícones */}
            {isOpen && (
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-gray-900 rounded-3xl shadow-2xl border border-gray-700 overflow-hidden flex items-center gap-4 px-4 py-3">
                
                {/* Botão Adicionar Treino */}
                <Link
                  to="/workouts/create"
                  onClick={toggleMenu}
                  className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                >
                  <Edit className="w-6 h-6" />
                </Link>
                
                {/* Botão Adicionar Aluno */}
                <button
                  onClick={toggleMenu}
                  className="w-14 h-14 bg-gradient-to-br from-accent-green to-accent-green/80 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                >
                  <UserPlus className="w-6 h-6" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ icon, label, to, active, index }) {
  const colors = active
    ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-xl scale-110'
    : 'text-gray-400 hover:text-white hover:bg-gray-800/50';

  return (
    <Link
      to={to}
      className={`flex flex-col items-center gap-1.5 px-4 py-3 rounded-2xl transition-all duration-300 ${colors}`}
    >
      {icon}
      <span className="text-[10px] font-bold">{label}</span>
    </Link>
  );
}
