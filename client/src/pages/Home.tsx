import { useState } from 'react';
import { Car, Briefcase, Calendar, Star, CreditCard, MessageCircle } from 'lucide-react';
import MotoristaTab from '@/components/tabs/MotoristaTab';
import ServicosTab from '@/components/tabs/ServicosTab';
import AgendarTab from '@/components/tabs/AgendarTab';
import AvaliacoesTab from '@/components/tabs/AvaliacoesTab';
import PagarTab from '@/components/tabs/PagarTab';
import BottomNav from '@/components/BottomNav';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

/**
 * Home - Página principal estilo app
 * Design: Minimalismo Moderno com navegação por abas
 * Menu fixo inferior com 5 seções principais
 */

type TabType = 'motorista' | 'servicos' | 'agendar' | 'avaliacoes' | 'pagar';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('motorista');

  const tabs: { id: TabType; label: string; icon: React.ReactNode; component: React.ReactNode }[] = [
    {
      id: 'motorista',
      label: 'Motorista',
      icon: <Car className="w-5 h-5" />,
      component: <MotoristaTab />,
    },
    {
      id: 'servicos',
      label: 'Serviços',
      icon: <Briefcase className="w-5 h-5" />,
      component: <ServicosTab />,
    },
    {
      id: 'agendar',
      label: 'Agendar',
      icon: <Calendar className="w-5 h-5" />,
      component: <AgendarTab />,
    },
    {
      id: 'avaliacoes',
      label: 'Avaliações',
      icon: <Star className="w-5 h-5" />,
      component: <AvaliacoesTab />,
    },
    {
      id: 'pagar',
      label: 'Pagar',
      icon: <CreditCard className="w-5 h-5" />,
      component: <PagarTab />,
    },
  ];

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main Content */}
      <main className="flex-1 pb-24 overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 z-40 bg-white border-b border-border">
          <div className="container py-4">
            <h1 className="text-2xl md:text-3xl font-display text-foreground">
              {activeTabData?.label}
            </h1>
          </div>
        </div>

      {/* Tab Content */}
      <div className="animate-fadeIn">
        {activeTabData?.component}
      </div>
    </main>

    {/* Bottom Navigation */}
    <BottomNav tabs={tabs} activeTab={activeTab} onTabChange={(tabId) => setActiveTab(tabId as TabType)} />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
