# 🎊 Bodas de Ouro - Dília & Edson

Landing page especial para celebração das Bodas de Ouro (50 anos de casamento) de Dília Miranda e Edson Cabello.

## ✨ Características

- 🎨 **Design Dourado Elegante** - Tema totalmente personalizado em tons de ouro
- 🎭 **Animações Suaves** - Transições elegantes com Framer Motion
- 📱 **100% Responsivo** - Otimizado para mobile-first (WhatsApp)
- 🖼️ **Carrossel de Fotos** - 7 fotos em rotação automática a cada 5 segundos
- ⚡ **Performance Otimizada** - Built com Next.js 14 e TypeScript
- 💛 **Loading Temático** - Animação de entrada com corações dourados

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript 5** - Tipagem forte e segurança
- **Tailwind CSS 3** - Estilização utility-first
- **Framer Motion 11** - Animações fluidas
- **Lucide React** - Ícones modernos

## 🚀 Como Usar

### 1. Instalar Dependências
```bash
npm install
```

### 2. Rodar em Desenvolvimento
```bash
npm run dev
```
Acesse: http://localhost:3000

### 3. Build para Produção
```bash
npm run build
npm start
```

## 🌐 Deploy

### Vercel (Recomendado)

**Via CLI:**
```bash
npm i -g vercel
vercel login
vercel --prod
```

**Via GitHub:**
1. Faça push do código para o GitHub
2. Acesse https://vercel.com
3. Importe o repositório
4. Deploy automático! ✨

### Outras Plataformas
Compatível com: Netlify, AWS Amplify, Railway, DigitalOcean

## 📱 Como Compartilhar

Envie o link único para todos os convidados via:
- ✅ WhatsApp
- ✅ E-mail  
- ✅ SMS
- ✅ Redes Sociais

**Exemplo de mensagem:**
```
🎊 Convite Especial 🎊

Você está convidado para as Bodas de Ouro
✨ Dília & Edson ✨

📅 18 de Outubro • ⏰ 19:00h
📍 Rua Gonçalves Dias, 800

👉 Veja seu convite: [URL DO SITE]

Contamos com você! 💛
```

## 📂 Estrutura do Projeto

```
golden-wedding-dilia-edson/
├── app/
│   ├── components/
│   │   ├── GoldenParticles.tsx   # Partículas douradas animadas
│   │   ├── GoldenLoading.tsx     # Loading com corações
│   │   └── PhotoCarousel.tsx     # Carrossel automático
│   ├── globals.css               # Estilos globais e tema dourado
│   ├── layout.tsx                # Layout e metadados
│   └── page.tsx                  # Página principal
├── public/                       # Fotos do casal (7 imagens)
├── tailwind.config.ts            # Configuração do Tailwind (cores douradas)
└── package.json                  # Dependências
```

## 📱 Configurar Número do WhatsApp

**IMPORTANTE:** Você precisa atualizar o número do WhatsApp para confirmação!

1. Abra o arquivo `app/page.tsx`
2. Procure pela linha com `https://wa.me/`
3. Substitua `5511999999999` pelo seu número no formato internacional:
   - Brasil: `55` + DDD + Número (ex: `5511987654321`)
   - Sem espaços, hífens ou parênteses

```typescript
href="https://wa.me/5511987654321?text=Olá%2C%20gostaria%20de%20confirmar%20minha%20presença"
```

## 🖼️ Adicionar/Alterar Fotos

1. Adicione as fotos na pasta `public/`
2. Edite `app/components/PhotoCarousel.tsx`
3. Atualize o array de fotos:

```typescript
const photos = [
  {
    src: '/nome-da-foto.jpeg',
    alt: 'Descrição da foto',
  },
  // ... adicione mais fotos
]
```

4. Ajuste o grid se necessário (linha com `grid-cols-7`)

## 🎨 Personalizar Cores

Edite `tailwind.config.ts` para ajustar o tema dourado:

```typescript
colors: {
  gold: {
    400: '#ffd84d',  // Dourado claro
    500: '#ffc107',  // Dourado médio
    700: '#c18500',  // Dourado escuro
  }
}
```

## ℹ️ Informações do Evento

- **Data:** 18 de Outubro de 2025  
- **Horário:** 19:00h  
- **Local:** Rua Gonçalves Dias, 800 - Salão de Festas - Vila Gabriel

---

## 💝 Feito com amor para as famílias Miranda e Cabello

**Stack:** Next.js 14 • React 18 • TypeScript 5 • Tailwind CSS 3 • Framer Motion 11
