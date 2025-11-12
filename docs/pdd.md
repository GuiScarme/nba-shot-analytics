# 🏀 NBA Shot Analytics — Product Design Document (PDD)

## 1. Visão geral
O **NBA Shot Analytics** é uma aplicação web interativa que mostra **estatísticas e eficiência de arremessos da NBA**, tanto por jogador quanto por time.  
O objetivo é permitir que qualquer pessoa visualize **onde um jogador é mais eficiente em quadra**, com base em dados reais.

O projeto servirá também como **laboratório de aprendizado fullstack**, combinando frontend, backend e análise de dados — desde coleta até visualização.

---

## 2. Objetivos do produto
- Aprender a desenvolver uma aplicação completa (frontend + backend + banco de dados).
- Exibir mapas de arremessos (shot charts) e estatísticas reais.
- Permitir filtragem por jogador, time e temporada.
- Criar uma base de código organizada, documentada e testada.
- Desenvolver visualizações ricas e rápidas (heatmaps, gráficos, tabelas).

---

## 3. Público-alvo
- Fãs e analistas de basquete interessados em estatísticas detalhadas.
- Desenvolvedores que queiram aprender sobre visualização de dados.
- Recrutadores e avaliadores técnicos (como projeto de portfólio).
- Eu mesmo (para aprendizado e evolução profissional).

---

## 4. Escopo e funcionalidades

### Versão 0.1 (MVP)
- Backend com dados mockados de jogadores e arremessos.
- API REST simples com endpoints `/players` e `/shots`.
- Frontend em React exibindo o mapa de arremessos com pontos.
- Visualização básica da quadra com cores por eficiência.
- Filtros simples (por jogador e tipo de arremesso).

### Futuras versões
- Importação real de dados da NBA (via API pública).
- Heatmaps e comparativos entre jogadores.
- Métricas avançadas: True Shooting %, Effective FG%.
- Exportação de gráficos (PDF/PNG).
- Login e favoritos.
- Deploy online (Render + Vercel).

---

## 5. Arquitetura e tecnologias

### Stack planejada
| Camada | Tecnologia | Função |
|---------|-------------|--------|
| Frontend | React + TypeScript + Vite | Interface e visualização dos dados |
| Visualização | Recharts (ou D3.js) | Gráficos e mapas de arremessos |
| Backend | Node.js + Express | Servir dados e cálculos |
| Banco de dados | PostgreSQL | Armazenar estatísticas e jogadores |
| Scripts de dados | Python + Pandas (futuro) | Importar e limpar dados da NBA |
| Infra | Docker + Docker Compose | Facilitar setup e deploy |

### Diagrama (simples)
```mermaid
flowchart LR
    NBA_API[(NBA API)] --> ETL[Python Scripts]
    ETL --> DB[(PostgreSQL)]
    DB --> Backend[Node.js API]
    Backend --> Frontend[React Dashboard]
