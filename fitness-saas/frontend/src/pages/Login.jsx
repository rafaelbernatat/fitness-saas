import { ArrowLeft, Mail, Lock, User, Chrome, Apple, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-text-tertiary hover:text-text-primary mb-10 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Voltar
        </Link>

        <div className="card-flat p-10 animate-scale-in shadow-float">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner">
              <User className="w-10 h-10 text-primary-400" />
            </div>
            <h1 className="text-3xl font-bold mb-3 text-text-primary">Bem-vindo de volta</h1>
            <p className="text-text-secondary text-lg">Entre na sua conta para continuar</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-3">
              <label className="text-sm font-semibold text-text-secondary">Email</label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-text-tertiary" />
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="input-field pl-14 w-full text-lg"
                  defaultValue="demo@fitness.com"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-semibold text-text-secondary">Senha</label>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-text-tertiary" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="input-field pl-14 w-full text-lg"
                  defaultValue="demo123"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-3 cursor-pointer text-text-secondary">
                <input type="checkbox" className="rounded-lg border-border bg-background-elevated w-5 h-5" />
                Lembrar de mim
              </label>
              <button type="button" className="text-primary-400 hover:text-primary-300 font-semibold">
                Esqueceu a senha?
              </button>
            </div>

            <button type="submit" className="btn-primary w-full text-lg py-5 shadow-glow">
              Entrar
            </button>

            <p className="text-center text-text-secondary mt-8">
              Não tem conta?{' '}
              <button type="button" className="text-primary-400 hover:text-primary-300 font-bold">
                Criar conta
              </button>
            </p>
          </form>

          <div className="mt-12">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border/30" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-6 bg-background-elevated text-text-tertiary font-medium">Ou continue com</span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <button className="btn-float flex items-center justify-center gap-3">
                <Chrome className="w-6 h-6" />
                <span className="font-semibold">Google</span>
              </button>
              <button className="btn-float flex items-center justify-center gap-3">
                <Apple className="w-6 h-6" />
                <span className="font-semibold">Apple</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
