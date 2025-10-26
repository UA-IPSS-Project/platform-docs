---
sidebar_position: 4
---
# Requisitos do Sistema
Definem o que o sistema deve fazer e o que deve cumprir.
---

## Requisitos Funcionais (RF)
*(O que o sistema deve fazer)*

### Prioridade 1 — Marcações (Secretaria)
- **RF1.1** O sistema deve permitir à secretaria criar marcações presenciais, indicando data, hora, tipo de atendimento e valência.  
- **RF1.2** O sistema deve permitir cancelar marcações e notificar automaticamente os utilizadores afetados.  
- **RF1.3** O sistema deve apresentar uma agenda central com filtros por data, técnico, utente ou valência.  
- **RF1.4** O sistema deve permitir atualizar o estado das requisições (em análise, aprovado, concluído).  
- **RF1.5** O sistema deve enviar notificações automáticas de lembretes e prazos administrativos à secretaria.  
- **RF1.6** O sistema deve gerar relatórios de marcações, requisições e consumos em formato PDF e Excel.  
- **RF1.7** O sistema deve permitir à secretaria consultar dados logísticos (ex.: consumo de água, produtos).  
- **RF1.8** O sistema deve permitir gerir contas e permissões de utilizadores internos.  

---

### Prioridade 2 — Marcações (Balneário Social)
- **RF2.1** O sistema deve permitir a técnicos marcarem um atendimento para os banhos dos utentes.  
- **RF2.2** O sistema deve permitir ao responsável do balneário marcar um atendimento para os banhos dos utentes.  
- **RF2.3** O sistema deve permitir ao responsável do balneário confirmar presenças e atualizar consumos (roupa, produtos).  
- **RF2.4** O sistema deve permitir ao balneário requisitar materiais à secretaria.  
- **RF2.5** O sistema deve permitir consultar e reagendar marcações do balneário.  
- **RF2.6** O sistema deve gerar relatórios de utilização e consumo mensais.  

---

### Prioridade 3 — Requisições de Material e Transporte
- **RF3.1** O sistema deve permitir a qualquer funcionário criar requisições de material.  
- **RF3.2** O sistema deve permitir requisitar transporte interno, indicando data, destino e número de viaturas.  
- **RF3.3** O sistema deve permitir acompanhar o estado das requisições submetidas.  
- **RF3.4** O sistema deve gerar relatórios mensais automáticos de materiais requisitados.  

---

### Prioridade 4 — Requisições de Manutenção
- **RF4.1** O sistema deve permitir reportar ocorrências de manutenção, com descrição e prioridade.  
- **RF4.2** O sistema deve permitir acompanhar o estado das ocorrências reportadas.  
- **RF4.3** O sistema deve permitir à secretaria atualizar o estado das manutenções.  
- **RF4.4** O sistema deve gerar lembretes automáticos de manutenções periódicas e prazos.  
- **RF4.5** O sistema deve permitir registar intervenções externas. *(fase futura)*  

---

### Prioridade 5 — Formulários e Processos (Creche/ATL)
- **RF5.1** O sistema deve permitir submeter formulários de inscrição para Creche e ATL.  
- **RF5.2** O sistema deve permitir consultar o estado das candidaturas submetidas.  
- **RF5.3** O sistema deve permitir editar e reenviar candidaturas devolvidas pela secretaria. *(fase futura)*  
- **RF5.4** O sistema deve permitir enviar documentação adicional solicitada pela secretaria.  

---

## Requisitos Não Funcionais (RNF)
*(Como o sistema deve comportar-se)*

### Usabilidade
- **RNF1.1** A interface deve ser simples e intuitiva, adequada a utilizadores com literacia digital básica.  
- **RNF1.2** O design deve ser responsivo, adaptando-se a computador, tablet e telemóvel.  
- **RNF1.3** Deve existir feedback visual imediato nas ações (confirmações, erros, notificações).  

### Desempenho
- **RNF2.1** As operações básicas (gravação, pesquisa, cancelamento) devem ter resposta inferior a 2 segundos.  
- **RNF2.2** O sistema deve suportar múltiplos utilizadores simultaneamente sem degradação visível.  

### Segurança e Privacidade
- **RNF3.1** O sistema deve cumprir o RGPD, com perfis diferenciados e encriptação de dados sensíveis.  
- **RNF3.2** Os dados devem ser armazenados em servidor interno ou europeu certificado.  
- **RNF3.3** O acesso remoto deve ser seguro, via VPN ou IP autorizado.  

### Fiabilidade e Manutenção
- **RNF4.1** O sistema deve garantir integridade de dados e tolerância a falhas de rede.  
- **RNF4.2** Devem ser realizados backups automáticos diários com restauração simples.  
- **RNF4.3** O sistema deve permitir atualização através de interface gráfica.  
- **RNF4.4** Deve existir documentação técnica atualizada.  

### Identidade e Comunicação
- **RNF5.1** A interface e relatórios devem seguir a identidade visual das Florinhas do Vouga.  
- **RNF5.2** O sistema deve mencionar a parceria com a Universidade de Aveiro e a equipa de desenvolvimento.  

---

## Planeamento por Fases

### Fase 1 — MVP
**Funcionalidades:** Marcações (Secretaria e Balneário), Requisições de Material e Painel Administrativo.

### Fase 2
**Funcionalidades:** Transportes, Manutenções e Notificações Automáticas.

### Fase 3
**Funcionalidades:** Formulários Creche/ATL, Estatísticas e Gestão de Utilizadores Avançada.