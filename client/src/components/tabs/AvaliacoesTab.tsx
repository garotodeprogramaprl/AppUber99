import { Star } from 'lucide-react';

/**
 * AvaliacoesTab - Aba de avaliações de clientes
 * Design: Minimalismo Moderno
 * - Cards com depoimentos
 * - Estrelas de avaliação
 * - Layout responsivo
 */

const AVALIACOES = [
  {
    nome: 'Carlos Silva',
    avaliacao: 5,
    texto: 'Excelente motorista! Muito profissional e atencioso. Recomendo!',
    data: 'Há 2 semanas',
  },
  {
    nome: 'Mariana Santos',
    avaliacao: 5,
    texto: 'Veículo impecável e motorista pontual. Voltaria a usar com certeza.',
    data: 'Há 1 mês',
  },
  {
    nome: 'João Pereira',
    avaliacao: 5,
    texto: 'Serviço de qualidade, preço justo e atendimento atencioso. Parabéns!',
    data: 'Há 1 mês',
  },
  {
    nome: 'Ana Costa',
    avaliacao: 5,
    texto: 'Muito bom! Motorista educado e veículo confortável.',
    data: 'Há 2 meses',
  },
  {
    nome: 'Roberto Oliveira',
    avaliacao: 5,
    texto: 'Profissional de primeira qualidade. Recomendo para todos os meus amigos.',
    data: 'Há 2 meses',
  },
  {
    nome: 'Fernanda Lima',
    avaliacao: 5,
    texto: 'Ótima experiência! Motorista atencioso e veículo limpo.',
    data: 'Há 3 meses',
  },
];

export default function AvaliacoesTab() {
  const mediaAvaliacoes = (
    AVALIACOES.reduce((acc, av) => acc + av.avaliacao, 0) / AVALIACOES.length
  ).toFixed(1);

  return (
    <div className="container py-6 space-y-6">
      {/* Resumo de Avaliações */}
      <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border border-border shadow-sm">
        <h2 className="text-2xl font-display text-foreground mb-4">
          Avaliações dos Clientes
        </h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-6 h-6 ${
                  i < Math.floor(parseFloat(mediaAvaliacoes))
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <div>
            <p className="text-2xl font-display text-foreground">{mediaAvaliacoes}</p>
            <p className="text-sm text-muted-foreground">
              Baseado em {AVALIACOES.length} avaliações
            </p>
          </div>
        </div>
      </div>

      {/* Lista de Avaliações */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {AVALIACOES.map((avaliacao, i) => (
          <div
            key={i}
            className="p-4 bg-white border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow"
            style={{
              animation: `slideInUp 0.4s ease-out ${i * 50}ms both`,
            }}
          >
            {/* Cabeçalho */}
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-display text-foreground">{avaliacao.nome}</h3>
                <p className="text-xs text-muted-foreground">{avaliacao.data}</p>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${
                      j < avaliacao.avaliacao
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Texto */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              "{avaliacao.texto}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
