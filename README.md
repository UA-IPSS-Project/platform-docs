# 📘 Plataforma Digital para Marcação Eficiente de Atendimento na Secretaria da IPSS

### Projeto de Engenharia Informática — Universidade de Aveiro

---

## 🧭 Contexto

Este projeto tem como objetivo modernizar e centralizar o processo de **marcações, requisições e comunicação interna** entre os diferentes setores de uma **Instituição Particular de Solidariedade Social (IPSS)**.  
A plataforma permitirá à **Secretaria**, **Balneário Social**, **Creche/ATL** e **Escola** gerir tarefas administrativas de forma mais eficiente e digital, reduzindo a dependência de papel e contacto telefónico.

---

## 🎯 Objetivos do Sistema

- Permitir a **marcação e gestão de atendimentos** (Secretaria e Balneário);
- Facilitar a **requisição de materiais, transportes e manutenções**;
- Oferecer um **portal unificado** para todos os intervenientes (funcionários, técnicos, pais e utentes);
- Automatizar **notificações, relatórios e lembretes administrativos**;
- Garantir **simplicidade, segurança e acessibilidade** no uso.

---

## 🧩 Estrutura do Projeto

O sistema será desenvolvido em arquitetura **modular e escalável**, organizada por camadas e repositórios distintos dentro desta organização GitHub.

| Repositório | Descrição | Tecnologia Principal |
|--------------|------------|----------------------|
| `platform-backend` | Lógica de negócio e API REST | Java + Spring Boot |
| `platform-frontend` | Interface web (painéis de gestão) | React |
| `platform-database` | Esquema e scripts da base de dados | PostgreSQL |
| `platform-docs` | Documentação e microsite (GitHub Pages) | Markdown / Jekyll |

---

## 👥 Equipa de Desenvolvimento

| Membro | Função | Foco Principal |
|--------|---------|----------------|
| Ana Silva | Frontend Developer | Interface e UX |
| Maria Costa | Frontend Developer | Painéis e design responsivo |
| Daniel Rocha | Backend Developer | API e segurança |
| Nuno Alves | Backend Developer | Lógica de negócio e autenticação |
| Ivan Sousa | Database Engineer | Modelação e persistência de dados |

---

## 📄 Documentação do Projeto

Os documentos principais encontram-se na pasta [`/docs`](./docs):

| Documento | Conteúdo |
|------------|-----------|
| [`contexto.md`](./docs/contexto.md) | Enquadramento e objetivos |
| [`requisitos.md`](./docs/requisitos.md) | Requisitos funcionais e não funcionais |
| [`usercases.md`](./docs/usercases.md) | Casos de uso completos |
| [`personas.md`](./docs/personas.md) | Perfis de utilizadores representativos |
| [`arquitetura.md`](./docs/arquitetura.md) | Estrutura técnica e camadas do sistema |
| [`testes.md`](./docs/testes.md) | Estratégia e casos de teste |
| [`instalacao.md`](./docs/instalacao.md) | Guia para configuração e execução |
| [`reunioes.md`](./docs/reunioes.md) | Registos e atas de reuniões |

---

## 🧱 Tecnologias Utilizadas

- **Frontend:** React, HTML5, CSS3, JavaScript  
- **Backend:** Spring Boot, REST API  
- **Base de Dados:** PostgreSQL  
- **Versionamento:** Git / GitHub  
- **Documentação:** Markdown + GitHub Pages  
- **CI/CD (futuro):** GitHub Actions  

---

## 🗓️ Planeamento (Resumo)

| Fase | Módulos principais | Entrega prevista |
|------|--------------------|------------------|
| **Fase 1 (MVP)** | Marcações (Secretaria e Balneário) + Requisições de Material + Painel Administrativo | Dez 2025 |
| **Fase 2** | Transportes + Manutenções + Notificações automáticas | Fev 2026 |
| **Fase 3** | Formulários Creche/ATL + Estatísticas + Gestão avançada de utilizadores | Abr 2026 |

---

## 🔐 Licença

Este projeto é disponibilizado sob a **MIT License**.  
Consulta o ficheiro [LICENSE](./LICENSE) para mais detalhes.

---

## 🌐 Microsite

O microsite de documentação estará disponível em:  
👉 **https://ua-ipss-project.github.io/platform-docs/** *(após ativação do GitHub Pages)*

---

## 🧭 Créditos

Projeto desenvolvido no âmbito da unidade curricular **Projeto de Engenharia Informática** —  
**Departamento de Eletrónica, Telecomunicações e Informática (DETI)**  
**Universidade de Aveiro**

---
