# Arquitetura do Sistema
Mostra a estrutura do sistema.
---
## Visão Geral
O sistema adota uma **arquitetura em camadas**, com separação entre interface, lógica de negócio, persistência e base de dados.

![Arquitetura](./img/arquitetura.png)

## Comunicação
O frontend comunica com o backend através de chamadas REST (`/api/...`), com respostas JSON.  
O backend gere autenticação, permissões e notificações.
