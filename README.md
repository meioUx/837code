# 837code

Website institucional desenvolvido como projeto local em **Vite + React + TypeScript**.

## Iniciar

Requer Node.js 20.19+ ou 22.12+.

```sh
npm install
npm run dev
```

Abra **http://localhost:5173**.

```sh
npm run build       # TypeScript + bundle de produção em dist/
npm run preview     # Visualizar o build localmente
npm run typecheck   # Verificação de tipos
```

No PowerShell, caso a política de execução bloqueie `npm.ps1`, use `npm.cmd` no lugar de `npm`.

## Organização

```text
src/
  app/                  Rotas, layout global e navegação de seções
  components/
    home/               Seções da página inicial
    layout/             Header, logo e footer
    products/           Vitrine e apresentações visuais dos produtos
    ui/                 Componentes visuais compartilhados
  data/                 Conteúdo institucional e cadastro dos produtos
  lib/                  Integração de contato e metadados
  pages/                Início, produto e páginas institucionais
  styles/               Estilos globais, layout, home e formulário
public/
  images/               Assets da marca
```

React Router gerencia `/`, `/produtos/equilibra`, `/produtos/vyve`, `/privacidade` e `/termos`. As páginas são carregadas sob demanda. Ao hospedar a SPA, configure o servidor para devolver `index.html` nas rotas da aplicação.

A rota do VYVE World usa uma página exclusiva em `src/pages/VyvePage.tsx`, com estética de jogo competitivo, apresentações de movimento, modos de dificuldade interativos e temporadas. O conteúdo está em `src/data/vyve.ts` e os estilos são isolados em `src/styles/vyve-page.css`. Imagens esportivas e telas usam recortes do material fornecido; a análise de movimento é apresentada como recurso em exploração. O CTA de contato abre o aplicativo de e-mail do visitante.

## Conteúdo e marca

O portfólio está em `src/data/products.ts`. Para cadastrar outro produto, adicione um item nesse array. A vitrine, os links do footer, o ecossistema e a página de detalhes usam os mesmos dados.

O logo original está em `public/images/837code-logo.png`, com suas proporções preservadas. O Equilibra utiliza o logo SVG e as oito telas fornecidas em `public/images/equilibra/`, incluindo galeria ampliável com navegação por teclado. O VYVE World utiliza o material visual fornecido em `public/images/vyve-world-brand-board.png`, com telas em recortes SVG e ícones decorativos. Links oficiais e status só aparecem quando preenchidos com informações confirmadas.

## Contato

Copie `.env.example` para `.env.local` e preencha `VITE_CONTACT_ENDPOINT` quando houver um serviço real de recebimento.

O frontend faz POST JSON com `name`, `email`, `subject` e `message`. O serviço deve validar os dados, aplicar limites e responder `{ "ok": true }` apenas depois de aceitar a mensagem. Sem endpoint, o formulário informa a indisponibilidade e não transmite dados. Estados de envio, erro e confirmação estão implementados.

Variáveis `VITE_*` são públicas. Nunca inclua credenciais nelas. Complete os dados do responsável, canal de privacidade e critérios de retenção antes de ativar o serviço.

`VITE_SITE_URL` configura o domínio para canonical e imagem Open Graph. Nenhum domínio de publicação é presumido.

## Histórico

`837code-site/` contém a versão anterior e está preservada. O projeto ativo está na raiz, não depende daquela pasta e não usa os scripts de publicação anteriores.
