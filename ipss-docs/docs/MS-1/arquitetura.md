# Arquitetura do Sistema

## Visão Geral
O sistema adota uma **arquitetura em camadas**, com separação entre interface, lógica de negócio, persistência e base de dados.

## Camadas
- **Frontend (React):** fornece a interface web responsiva e modular.  
- **Backend (Spring Boot):** gere regras de negócio e integra APIs REST.  
- **Persistência:** camada intermédia que abstrai o acesso à base de dados.  
- **Base de Dados (PostgreSQL):** armazena dados de utilizadores, marcações e requisições.

## Comunicação
O frontend comunica com o backend através de chamadas REST (`/api/...`), com respostas JSON.  
O backend gere autenticação, permissões e notificações.

## Extensibilidade
O sistema poderá integrar futuramente:
- Módulo de workflow automatizado para aprovações;
- Notificações push;
- Integração com sistemas externos da IPSS.