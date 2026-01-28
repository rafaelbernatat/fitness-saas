import { Link } from 'react-router-dom';
import { Dumbbell, Users, TrendingUp, Play, ArrowRight, Sparkles } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent" />
        <div className="max-w-6xl mx-auto relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-background-elevated/80 backdrop-blur text-primary-400 px-4 py-2 rounded-full text-sm mb-8 border border-border/50 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>Treinos inteligentes, resultados reais</span>
          </div>

          {/* Main Content */}
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight animate-slide-up">
              Transforme seu
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                {' '}
                treino
              </span>{' '}
              em resultados
            </h1>

            <p className="text-lg md:text-xl text-text-secondary mb-10 leading-relaxed max-w-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
              A plataforma completa para personal trainers e alunos. Crie treinos personalizados,
              acompanhe progresso e alcance seus objetivos com facilidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link to="/login" className="btn-primary flex items-center justify-center gap-2 group">
                Começar Agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="btn-secondary flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Ver Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-24 bg-background-surface/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tudo que você precisa em um só lugar
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Ferramentas poderosas para personal trainers e alunos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Dumbbell className="w-8 h-8" />}
              title="Treinos Personalizados"
              description="Crie treinos únicos para cada aluno com exercícios detalhados, vídeos e progressões personalizadas."
              delay={0}
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Gestão de Alunos"
              description="Acompanhe o progresso de todos os seus alunos em tempo real com métricas detalhadas e insights."
              delay={100}
            />
            <FeatureCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Progresso Real"
              description="Registre carga, medidas e desempenho. Veja a evolução com gráficos intuitivos e relatórios."
              delay={200}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="card-elevated p-12 animate-fade-in">
            <div className="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-primary-400" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Pronto para começar?
            </h2>
            <p className="text-text-secondary mb-8 max-w-lg mx-auto">
              Junte-se a centenas de personal trainers e alunos que já estão
              transformando suas rotinas de treino.
            </p>
            <Link to="/login" className="btn-primary inline-flex items-center gap-2">
              Criar conta gratuita
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-border/50 bg-background-surface/30">
        <div className="max-w-6xl mx-auto text-center text-text-secondary text-sm">
          <p>© 2026 Fitness SaaS. Feito com ❤️ para fitness.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, delay }) {
  return (
    <div
      className="card hover:scale-[1.02] transition-transform duration-300 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-6">
        <div className="w-14 h-14 bg-primary-500/10 rounded-2xl flex items-center justify-center text-primary-400">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-text-primary">{title}</h3>
      <p className="text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}
