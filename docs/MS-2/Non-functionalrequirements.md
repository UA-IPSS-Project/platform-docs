---
sidebar_position: 4
---

# Requisitos Não Funcionais

## 2.1 Usabilidade
- **RNF1.1** O sistema deve ser intuitivo, permitindo que utilizadores com literacia digital básica completem tarefas principais sem treino.
- **RNF1.2** O design deve ser totalmente responsivo, garantindo uma visualização e funcionalidade corretas em computadores, tablets e smartphones.
- **RNF1.3** Todas as ações do utilizador devem gerar feedback visual imediato (confirmações de sucesso, alertas de erro ou indicadores de loading).


## 2.2 Desempenho
- **RNF2.1** O tempo de resposta para as operações críticas (ex: guardar um registo, login, pesquisa de metadados) deve ser inferior a 1 segundo. 
- **RNF2.2** O sistema deve conseguir lidar com pelo menos 50 utilizadores simultâneos a realizar operações ativas sem que a degradação da performance seja percetível.
- **RNF2.3** O carregamento inicial da página (frontend) deve ser rápido, não excedendo 3 segundos mesmo em condições de rede moderadas.
  

## 2.3 Segurança e Privacidade
- **RNF3.1** O sistema deve cumprir integralmente o Regulamento Geral de Proteção de Dados (RGPD). A comunicação deve ser encriptada (HTTPS) e os dados sensíveis devem ser armazenados de forma segura (hashing/encriptação).
- **RNF3.2** Todos os dados da aplicação e ficheiros devem ser armazenados exclusivamente no servidor local interno da empresa.


## 2.4 Fiabilidade e Manutenção
- **RNF4.1** A arquitetura deve garantir tolerância a falhas. A falha de um contentor/serviço não deve interromper o funcionamento total do sistema.
- **RNF4.2** Devem ser realizados backups automáticos diários de todos os dados e ficheiros. O sistema deve ser restaurável (restauração total de dados) em menos de 4 horas.
- **RNF4.3** Deve ser mantida documentação técnica atualizada que reflita o estado atual da aplicação, facilitando futuras manutenções.

## 2.5 Identidade e Comunicação
- **RNF5.1** A interface e relatórios devem seguir a identidade visual das Florinhas do Vouga.
- **RNF5.2** O sistema deve mencionar a parceria com a Universidade de Aveiro e a equipa de desenvolvimento.