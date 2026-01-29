import { Dumbbell, Calendar, Users, User, Edit, UserPlus } from 'lucide-react';
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

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 pb-4">
      <div className="px-4">
        <div className="bg-gray-900 rounded-3xl border border-gray-800 p-3 relative">
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
          
            {/* Central FAB Button - Muito maior e destacado */}
            <div className="relative -mt-6">
              <button
                onClick={toggleMenu}
                className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-[0_25px_50px_rgba(20, 184, 166, 0.6)] hover:scale-110 transition-all duration-300 border-4 border-gray-800"
              >
                <span className="text-4xl font-bold leading-none">+</span>
              </button>
              
              {/* Menu com 2 bolas grandes */}
              {isOpen && (
                <div className="absolute -top-28 left-1/2 -translate-x-1/2 bg-gray-900 rounded-3xl border border-gray-700 shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden p-5 w-96">
                  <div className="flex items-center justify-center gap-8">
                    {/* Bola 1: Adicionar Treino */}
                    <Link
                      to="/workouts/create"
                      onClick={closeMenu}
                      className="group"
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                        <Edit className="w-8 h-8" />
                      </div>
                    </Link>

                    {/* Bola 2: Adicionar Aluno */}
                    <button
                      className="group"
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-accent-green to-accent-green/80 rounded-full flex items-center justify-center text-white shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                        <UserPlus className="w-8 h-8" />
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
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
      className={`flex flex-col items-center gap-2 px-4 py-3 rounded-2xl transition-all duration-300 ${colors}`}
    >
      {icon}
      <span className="text-[10px] font-bold">{label}</span>
    </Link>
  );
}
