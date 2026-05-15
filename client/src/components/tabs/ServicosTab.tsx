import { Check } from 'lucide-react';

/**
 * ServicosTab - Aba de serviços oferecidos
 * Design: Minimalismo Moderno
 * - Cards com serviços
 * - Descrição clara de cada serviço
 * - Ícones de verificação
 */

const SERVICOS = [
  {
    titulo: 'Transporte de Passageiros',
    descricao: 'Transporte seguro e confortável para compromissos, trabalho ou lazer.',
    beneficios: ['Veículo limpo', 'Ar condicionado', 'Música ambiente'],
  },
  {
    titulo: 'Corridas Agendadas',
    descricao: 'Agende sua corrida com antecedência para garantir disponibilidade.',
    beneficios: ['Confirmação prévia', 'Pontualidade garantida', 'Sem surpresas'],
  },
  {
    titulo: 'Transporte para Eventos',
    descricao: 'Transporte profissional para festas, casamentos e eventos especiais.',
    beneficios: ['Motorista atencioso', 'Veículo premium', 'Discrição garantida'],
  },
  {
    titulo: 'Corridas Diárias',
    descricao: 'Serviço de corridas rápidas e eficientes para seu dia a dia.',
    beneficios: ['Rotas otimizadas', 'Preço justo', 'Atendimento rápido'],
  },
  {
    titulo: 'Transporte Executivo',
    descricao: 'Serviço premium para profissionais e executivos.',
    beneficios: ['Profissionalismo', 'Pontualidade', 'Conforto máximo'],
  },
  {
    titulo: 'Transporte Turístico',
    descricao: 'Conheça a região com um motorista experiente e atencioso.',
    beneficios: ['Conhecimento local', 'Roteiros personalizados', 'Experiência agradável'],
  },
];

export default function ServicosTab() {
  return (
    <div className="container py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SERVICOS.map((servico, i) => (
          <div
            key={i}
            className="p-6 bg-white border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            style={{
              animation: `slideInUp 0.4s ease-out ${i * 50}ms both`,
            }}
          >
            <h3 className="text-lg font-display text-foreground mb-2">
              {servico.titulo}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {servico.descricao}
            </p>
            <ul className="space-y-2">
              {servico.beneficios.map((beneficio, j) => (
                <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  {beneficio}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
