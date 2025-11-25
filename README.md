🏀 CourtIQ — NBA Shot Analytics

Visualize a eficiência de arremessos da NBA com mapas, estatísticas e análises inteligentes.

🚀 Versão v0.1 – Fundação do Projeto (MVP)

📌 Sobre o Projeto

O CourtIQ é uma plataforma analítica interativa que permite explorar arremessos da NBA através de mapas visuais, métricas de eficiência e filtros avançados.

Nesta primeira versão (v0.1), o foco é estabelecer:

Estrutura inicial de frontend + backend

Comunicação básica entre as camadas

Visualização inicial usando dados mockados

Layout e navegação principais

📚 Tecnologias Principais
🖥️ Frontend

React + Vite

TypeScript

React Router

⚙️ Backend

Node.js + Express

🧱 Estrutura do Projeto
/backend
  ├── index.js           # entrada do servidor (Express)
  ├── package.json       # dependências e scripts do backend

/frontend
  ├── package.json       # dependências e scripts do frontend (Vite + React + TS)
  ├── public/            # assets estáticos servidos pelo Vite
  └── src/               # código fonte React + TypeScript
     ├── App.tsx
     ├── main.tsx
     ├── layout/         # componentes de layout (ex.: Header)
     │   └── Header.tsx
     ├── assets/         # imagens/ícones estáticos
     └── styles/         # arquivos CSS (index.css, App.css)

▶️ Como Rodar o Projeto
🖥️ Frontend
cd frontend
npm install
npm run dev


Acesse: http://localhost:5173

⚙️ Backend
cd backend
npm install
node index.js


Acesse: http://localhost:3001

📦 Funcionalidades da Versão v0.1

Estrutura inicial: frontend + backend

Páginas com informações mock

Layout básico com Header / Footer

Roteamento com React Router

Paleta de cores inspirada na NBA


🛣️ Roadmap (Próximas Versões)
v0.2 —

🏗️ Contribuindo

Este é um projeto pessoal, mas sugestões e ideias são sempre bem-vindas!
Sinta-se livre para abrir uma issue ou enviar um pull request.

📄 Licença

Projeto licenciado sob MIT.