import { QrCode, CreditCard, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

/**
 * PagarTab - Aba de métodos de pagamento
 * Design: Minimalismo Moderno
 * - Pix com QR Code
 * - Mercado Pago
 * - Cópia de chave Pix
 */

const PAYMENT_INFO = {
  pix: {
    chave: '070.273.505-13',
    nome: 'Parlloan Kumar',
    qrcode: 'https://i.imgur.com/OUYqpXx.png',
  },
  mercadoPago: {
    link: 'https://link.mercadopago.com.br/motoristaparlloan',
    taxa: '5%',
  },
};

export default function PagarTab() {
  const [copiedPix, setCopiedPix] = useState(false);

  const handleCopyPix = () => {
    navigator.clipboard.writeText(PAYMENT_INFO.pix.chave);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2000);
  };

  return (
    <div className="container py-6 space-y-6">
      {/* Introdução */}
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
        <h2 className="font-display text-foreground mb-2">Formas de Pagamento</h2>
        <p className="text-sm text-muted-foreground">
          Escolha a forma de pagamento que preferir. Todos os métodos são seguros e rápidos.
        </p>
      </div>

      {/* Pix */}
      <div className="bg-white border border-border rounded-lg overflow-hidden shadow-sm animate-slideInUp">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <QrCode className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-display text-foreground">Pix</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* QR Code */}
            <div className="flex flex-col items-center">
              <p className="text-sm text-muted-foreground mb-3">Escaneie o QR Code</p>
              <img
                src={PAYMENT_INFO.pix.qrcode}
                alt="QR Code Pix"
                className="w-48 h-48 border-2 border-border rounded-lg"
              />
            </div>

            {/* Dados */}
            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Titular</p>
                <p className="font-display text-foreground">{PAYMENT_INFO.pix.nome}</p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground mb-1">Chave Pix (CPF)</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={PAYMENT_INFO.pix.chave}
                    readOnly
                    className="flex-1 px-3 py-2 bg-muted rounded border border-border text-sm font-mono"
                  />
                  <Button
                    onClick={handleCopyPix}
                    variant="outline"
                    size="sm"
                    className="flex-shrink-0"
                  >
                    {copiedPix ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>

              <p className="text-xs text-muted-foreground">
                ✓ Transferência instantânea
                <br />
                ✓ Sem taxas
                <br />
                ✓ 24 horas por dia
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mercado Pago */}
      <div className="bg-white border border-border rounded-lg overflow-hidden shadow-sm" style={{ animation: 'slideInUp 0.4s ease-out 100ms both' }}>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-display text-foreground">Mercado Pago</h3>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Pague com cartão de crédito, débito ou saldo Mercado Pago.
            </p>

            <div className="bg-blue-50 border border-blue-200 p-3 rounded text-sm text-muted-foreground">
              Taxa de venda: <span className="font-semibold text-foreground">{PAYMENT_INFO.mercadoPago.taxa}</span>
            </div>

            <Button
              onClick={() => window.open(PAYMENT_INFO.mercadoPago.link, '_blank')}
              className="w-full bg-secondary hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Ir para Mercado Pago
            </Button>
          </div>
        </div>
      </div>

      {/* Informações Adicionais */}
      <div className="bg-muted p-4 rounded-lg">
        <h4 className="font-display text-foreground mb-3">Dúvidas sobre Pagamento?</h4>
        <p className="text-sm text-muted-foreground mb-4">
          Entre em contato conosco via WhatsApp ou Instagram para esclarecer qualquer dúvida sobre formas de pagamento.
        </p>
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open('https://wa.me/73991060416', '_blank')}
          >
            WhatsApp
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open('https://instagram.com/Parlloan', '_blank')}
          >
            Instagram
          </Button>
        </div>
      </div>
    </div>
  );
}
