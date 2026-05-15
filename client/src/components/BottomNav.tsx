import { Button } from '@/components/ui/button';

/**
 * BottomNav - Menu fixo inferior com 5 abas
 * Design: Minimalismo Moderno
 * - Ícones com stroke fino
 * - Sombra sutil
 * - Transição suave ao trocar de aba
 * - Animações de entrada escalonadas
 */

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface BottomNavProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function BottomNav({ tabs, activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border"
      style={{
        boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.05)',
      }}
    >
      <div className="container flex justify-around items-center py-3 gap-1">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg transition-all duration-200 transform hover:scale-110 ${
              activeTab === tab.id
                ? 'text-primary bg-blue-50 scale-105'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            style={{
              animation: `scaleIn 0.3s ease-out ${index * 50}ms both`,
            }}
            title={tab.label}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              {tab.icon}
            </div>
            <span className="text-xs font-medium hidden sm:block">
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
