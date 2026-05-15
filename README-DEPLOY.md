# Parlloan - Site de Motorista

Site estilo app moderno para captar clientes, desenvolvido com React, Tailwind CSS e Vite.

## 🚀 Deploy no Netlify

### Pré-requisitos
- Conta no GitHub
- Conta no Netlify
- Node.js 18+ instalado

### Passos para Deploy

1. **Faça push para o GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Parlloan app"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/parlloan-app.git
   git push -u origin main
   ```

2. **Configure no Netlify:**
   - Acesse [netlify.com](https://netlify.com)
   - Clique em "Add new site" → "Import an existing project"
   - Selecione seu repositório do GitHub
   - Configure as build settings:
     - **Build command:** `pnpm install && pnpm build`
     - **Publish directory:** `dist`
   - Clique em "Deploy site"

3. **Conecte seu domínio:**
   - Vá para "Site settings" → "Domain management"
   - Adicione seu domínio customizado

### Desenvolvimento Local

```bash
# Instalar dependências
pnpm install

# Rodar em desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview da build
pnpm preview
```

## 📁 Estrutura do Projeto

```
parlloan-app/
├── client/
│   ├── src/
│   │   ├── pages/          # Páginas
│   │   ├── components/     # Componentes React
│   │   ├── tabs/           # Componentes das 5 abas
│   │   ├── index.css       # Estilos globais
│   │   └── App.tsx         # App principal
│   ├── index.html          # HTML entry point
│   └── public/             # Assets estáticos
├── package.json            # Dependências
├── vite.config.ts          # Configuração Vite
└── tsconfig.json           # Configuração TypeScript
```

## ✨ Recursos

- ✅ Menu fixo inferior com 5 abas
- ✅ Navegação fluida com animações
- ✅ Botão flutuante WhatsApp
- ✅ Integração com Pix e Mercado Pago
- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Animações suaves
- ✅ TypeScript
- ✅ Tailwind CSS 4

## 🔧 Variáveis de Ambiente

Não há variáveis de ambiente necessárias para este projeto. Todos os dados estão hardcoded nos componentes.

## 📝 Notas

- O site é totalmente estático (frontend-only)
- Netlify fará o build automaticamente a cada push
- Todas as imagens são carregadas de URLs externas (Imgur)

## 👤 Contato

- **WhatsApp:** 73991060416
- **Instagram:** @Parlloan
