import { Star, MapPin, Phone, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * MotoristaTab - Aba de apresentação do motorista
 * Design: Minimalismo Moderno
 * - Hero section com foto do motorista
 * - Informações profissionais
 * - Links para redes sociais
 */

const MOTORISTA_INFO = {
  nome: 'Parlloan Kumar',
  foto: 'https://i.imgur.com/ryu2frB.jpeg',
  avaliacao: 4.9,
  avaliacoes: 247,
  experiencia: '5+ anos',
  localizacao: 'Vitória da Conquista, BA',
  instagram: '@Parlloan',
  descricao: 'Motorista profissional com experiência em transporte de passageiros. Veículo limpo, confortável e seguro. Atendimento de qualidade garantido.',
};

export default function MotoristaTab() {
  return (
    <div className="container py-6 space-y-6">
      {/* Hero Card */}
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Foto */}
          <div className="flex items-center justify-center">
            <img
              src={MOTORISTA_INFO.foto}
              alt={MOTORISTA_INFO.nome}
              className="w-full max-w-xs rounded-lg shadow-md object-cover hover:shadow-lg transition-shadow duration-300"
            />
          </div>

          {/* Informações */}
          <div className="flex flex-col justify-center space-y-4">
            <div>
              <h2 className="text-3xl font-display text-foreground mb-2">
                {MOTORISTA_INFO.nome}
              </h2>
              <p className="text-muted-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {MOTORISTA_INFO.localizacao}
              </p>
            </div>

            {/* Avaliação */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(MOTORISTA_INFO.avaliacao)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">
                {MOTORISTA_INFO.avaliacao} ({MOTORISTA_INFO.avaliacoes} avaliações)
              </span>
            </div>

            {/* Experiência */}
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Experiência</p>
              <p>{MOTORISTA_INFO.experiencia} como motorista profissional</p>
            </div>

            {/* Descrição */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              {MOTORISTA_INFO.descricao}
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(`https://instagram.com/${MOTORISTA_INFO.instagram.replace('@', '')}`, '_blank')
                }
              >
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('tel:73991060416')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Ligar
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Diferenciais */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: 'Veículo Limpo', desc: 'Higiene e limpeza garantidas' },
          { title: 'Segurança', desc: 'Direção defensiva e responsável' },
          { title: 'Pontualidade', desc: 'Sempre no horário combinado' },
        ].map((item, i) => (
          <div
            key={i}
            className="p-4 bg-white border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-display text-foreground mb-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
