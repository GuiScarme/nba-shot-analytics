# 🗺️ Roadmap — NBA Shot Analytics

## 🎯 Objetivo
Transformar o PDD em um plano prático de execução, dividido em milestones (versões) e tarefas (PBs).  
Cada milestone representa uma versão funcional do produto.

---

## 🧩 Milestone M1 — Fundação do projeto (v0.1)

### Objetivo
Configurar o ambiente, criar a estrutura do repositório e validar a comunicação entre frontend e backend.

### Entregáveis
- Projeto React (frontend) criado com Vite.
- API Node.js com rota `/hello`.
- Comunicação entre frontend e backend funcionando.
- PDD e Roadmap documentados.

### Project Backlog (PBs)
| ID | Descrição | Tipo |
|----|------------|------|
| PB1.1 | Criar repositório e estrutura base de pastas | Setup |
| PB1.2 | Inicializar projeto Node.js e rota `/hello` | Backend |
| PB1.3 | Criar projeto React + Vite | Frontend |
| PB1.4 | Conectar React à API (fetch) | Integração |
| PB1.5 | Criar README com instruções de execução | Documentação |

---

## 🧩 Milestone M2 — Dados e API (v0.2)

### Objetivo
Criar a base de dados e endpoints reais para jogadores e arremessos.

### Entregáveis
- Banco de dados PostgreSQL local.
- Scripts de criação de tabelas.
- Endpoints `/players` e `/shots` retornando dados reais (ou mockados).
- Documentação da API.

### PBs
| ID | Descrição | Tipo |
|----|------------|------|
| PB2.1 | Configurar PostgreSQL (Docker ou local) | Infra |
| PB2.2 | Criar scripts de seed (dados iniciais) | Backend |
| PB2.3 | Criar endpoint `/players` | Backend |
| PB2.4 | Criar endpoint `/shots` | Backend |
| PB2.5 | Testar endpoints via Postman ou Insomnia | QA |

---

## 🧩 Milestone M3 — Visualização (v0.3)

### Objetivo
Renderizar o mapa de arremessos (shot chart) e exibir estatísticas visuais.

### Entregáveis
- Componente de quadra (SVG ou Canvas).
- Pontos de arremessos plotados na tela.
- Filtros por jogador e time.
- Estilo inicial da interface.

### PBs
| ID | Descrição | Tipo |
|----|------------|------|
| PB3.1 | Criar componente da quadra (layout estático) | Frontend |
| PB3.2 | Plotar arremessos no mapa | Frontend |
| PB3.3 | Adicionar filtro por jogador/time | Frontend |
| PB3.4 | Criar barra lateral com estatísticas resumidas | Frontend |
| PB3.5 | Conectar API real de dados | Integração |

---

## 🧩 Milestone M4 — Interatividade e Métricas (v0.4)

### Objetivo
Adicionar análises mais profundas e gráficos complementares.

### Entregáveis
- Heatmap de eficiência.
- Gráfico de barras com médias (FG%, 3P%).
- Comparativo entre jogadores.
- Testes unitários e visuais.

### PBs
| ID | Descrição | Tipo |
|----|------------|------|
| PB4.1 | Implementar heatmap por zona da quadra | Frontend |
| PB4.2 | Adicionar gráfico de estatísticas gerais | Frontend |
| PB4.3 | Criar modo de comparação (2 jogadores) | Frontend |
| PB4.4 | Escrever testes de frontend (Jest/RTL) | QA |
| PB4.5 | Escrever testes de backend (Jest/Supertest) | QA |

---

## 🧩 Milestone M5 — Deploy e Polimento (v1.0)

### Objetivo
Publicar o projeto e preparar documentação final.

### Entregáveis
- Deploy do backend (Render ou Railway).
- Deploy do frontend (Vercel ou Netlify).
- Documentação final (README + PDD + Roadmap + BDD).
- Apresentação visual (para portfólio ou entrevista).

### PBs
| ID | Descrição | Tipo |
|----|------------|------|
| PB5.1 | Configurar CI/CD (GitHub Actions) | DevOps |
| PB5.2 | Deploy do backend | Infra |
| PB5.3 | Deploy do frontend | Infra |
| PB5.4 | Revisar documentação (README e docs/) | Documentação |
| PB5.5 | Criar vídeo ou GIF do sistema funcionando | Portfólio |

---

## 📈 Progresso
| Milestone | Status | Início | Conclusão |
|------------|--------|--------|------------|
| M1 — Fundação | 🟡 Em andamento |  |  |
| M2 — Dados e API | ⚪ A fazer |  |  |
| M3 — Visualização | ⚪ A fazer |  |  |
| M4 — Interatividade | ⚪ A fazer |  |  |
| M5 — Deploy | ⚪ A fazer |  |  |

---

📅 **Última atualização:** Novembro/2025  
👤 **Autor:** Guilherme Scarme
