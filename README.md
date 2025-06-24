# React + Vite

# SEI - Sistema Educacional Integrado

Projeto fullstack com React + Node.js + PostgreSQL, usando Docker.

## 🚀 Como executar com Docker

```bash
docker-compose up --build


Sistema completo de gerenciamento acadêmico com:
- 🔧 Backend em **Node.js + Express + Sequelize**
- 🎨 Frontend em **React.js**
- 🛢 Banco de dados **PostgreSQL**
- 🐳 Orquestrado via **Docker Compose**

---

## 📁 Estrutura do Projeto

```bash
SEI/
├── sei-project-back/        # Backend Node.js
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env.example
│   ├── Dockerfile
│   └── ...
├── sei-project-front/       # Frontend React
│   ├── public/
│   ├── src/
│   ├── Dockerfile
│   └── ...
├── docker-compose.yml       # Orquestrador
└── README.md                