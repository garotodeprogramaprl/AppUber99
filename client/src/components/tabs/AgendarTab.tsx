import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

/**
 * AgendarTab - Aba de agendamento de serviços
 * Design: Minimalismo Moderno
 * - Formulário limpo e intuitivo
 * - CTA em laranja vibrante
 * - Validação básica
 */

export default function AgendarTab() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    data: '',
    hora: '',
    localizacao: '',
    destino: '',
    descricao: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.nome || !formData.telefone || !formData.data || !formData.hora) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    // Enviar via WhatsApp
    const mensagem = `
Olá! Gostaria de agendar um serviço:

*Nome:* ${formData.nome}
*Telefone:* ${formData.telefone}
*Email:* ${formData.email || 'Não informado'}
*Data:* ${formData.data}
*Hora:* ${formData.hora}
*Localização:* ${formData.localizacao || 'Não informado'}
*Destino:* ${formData.destino || 'Não informado'}
*Observações:* ${formData.descricao || 'Nenhuma'}
    `;

    const encodedMessage = encodeURIComponent(mensagem);
    window.open(`https://wa.me/73991060416?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="container py-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-6 md:p-8 rounded-lg border border-border shadow-sm animate-scaleIn">
          <h2 className="text-2xl font-display text-foreground mb-6">
            Agende seu Serviço
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Dados Pessoais */}
            <div className="space-y-4">
              <h3 className="font-display text-foreground text-lg">Dados Pessoais</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nome">Nome *</Label>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="telefone">Telefone *</Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    value={formData.telefone}
                    onChange={handleChange}
                    placeholder="(73) 99999-9999"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu.email@exemplo.com"
                />
              </div>
            </div>

            {/* Data e Hora */}
            <div className="space-y-4">
              <h3 className="font-display text-foreground text-lg">Data e Hora</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="data">Data *</Label>
                  <Input
                    id="data"
                    name="data"
                    type="date"
                    value={formData.data}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="hora">Hora *</Label>
                  <Input
                    id="hora"
                    name="hora"
                    type="time"
                    value={formData.hora}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Localização */}
            <div className="space-y-4">
              <h3 className="font-display text-foreground text-lg">Localização</h3>
              
              <div>
                <Label htmlFor="localizacao">Ponto de Partida</Label>
                <Input
                  id="localizacao"
                  name="localizacao"
                  type="text"
                  value={formData.localizacao}
                  onChange={handleChange}
                  placeholder="Endereço de partida"
                />
              </div>

              <div>
                <Label htmlFor="destino">Destino</Label>
                <Input
                  id="destino"
                  name="destino"
                  type="text"
                  value={formData.destino}
                  onChange={handleChange}
                  placeholder="Endereço de destino"
                />
              </div>
            </div>

            {/* Observações */}
            <div className="space-y-4">
              <h3 className="font-display text-foreground text-lg">Observações</h3>
              
              <div>
                <Label htmlFor="descricao">Informações Adicionais</Label>
                <Textarea
                  id="descricao"
                  name="descricao"
                  value={formData.descricao}
                  onChange={handleChange}
                  placeholder="Descreva qualquer detalhe importante sobre seu agendamento..."
                  rows={4}
                />
              </div>
            </div>

            {/* Botão Submit */}
            <Button
              type="submit"
              className="w-full bg-secondary hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Agendar via WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
