---
sidebar_position: 3
---

# User Stories

---

## Prioridade 1 — Secretaria

### US1 – Criar marcação presencial
**Funcionalidade:** Criação de marcações presenciais  
**Como** funcionária da secretaria  
**Quero** criar marcações indicando data, hora e valência  
**Para** registar atendimentos de forma rápida e organizada  

**Cenário:** Criar uma nova marcação com sucesso  
**Dado que** estou autenticada como Patrícia  
**E** estou no módulo "Nova Marcação"  
**Quando** introduzo os dados do utente e seleciono a data e hora disponíveis  
**E** confirmo a marcação  
**Então** a marcação deve ser registada e aparecer na agenda da secretaria.

---

### US2 – Cancelar marcação
**Funcionalidade:** Cancelamento de marcações  
**Como** funcionária da secretaria  
**Quero** cancelar marcações existentes  
**Para** evitar confusões e sobreposições de horários  

**Cenário:** Cancelar uma marcação ativa  
**Dado que** existe uma marcação registada  
**Quando** abro o módulo "Agenda" e seleciono a marcação  
**E** escolho "Cancelar" indicando o motivo  
**Então** a marcação deve ser removida e o utente notificado automaticamente.

---

### US3 – Consultar e gerir agenda
**Funcionalidade:** Gestão da agenda  
**Como** funcionária da secretaria  
**Quero** consultar e gerir a agenda com filtros  
**Para** visualizar todas as marcações de forma organizada  

**Cenário:** Filtrar marcações por valência  
**Dado que** existem marcações registadas em várias valências  
**Quando** aplico o filtro "Balneário"  
**Então** devo ver apenas as marcações correspondentes a essa valência.

---

### US4 – Atualizar estado de requisições
**Funcionalidade:** Atualização de requisições  
**Como** funcionária da secretaria  
**Quero** atualizar o estado das requisições  
**Para** manter o controlo do fluxo de pedidos  

**Cenário:** Aprovar uma requisição pendente  
**Dado que** existe uma requisição com estado "Em análise"  
**Quando** altero o estado para "Aprovado"  
**Então** o requisitante deve ser notificado automaticamente.

---

### US5 – Gerir lembretes e notificações
**Funcionalidade:** Gestão de notificações  
**Como** funcionária da secretaria  
**Quero** receber lembretes automáticos de tarefas pendentes  
**Para** garantir que nada é esquecido  

**Cenário:** Marcar lembrete como resolvido  
**Dado que** existe um lembrete de manutenção pendente  
**Quando** o marco como "Resolvido"  
**Então** o lembrete deve ser removido da lista de pendentes.

---

### US6 – Gerar relatórios
**Funcionalidade:** Geração de relatórios administrativos  
**Como** funcionária da secretaria  
**Quero** gerar relatórios de marcações e requisições  
**Para** facilitar o controlo e a partilha com a direção  

**Cenário:** Exportar relatório de marcações  
**Dado que** existem marcações registadas  
**Quando** seleciono o tipo "Marcações" e exporto em PDF  
**Então** o ficheiro deve ser gerado e guardado com sucesso.

---

### US7 – Consultar dados logísticos
**Funcionalidade:** Consulta de dados logísticos  
**Como** funcionária da secretaria  
**Quero** consultar consumos por valência  
**Para** controlar recursos e apoiar decisões financeiras  

**Cenário:** Visualizar consumo de água no balneário  
**Dado que** o sistema regista consumos  
**Quando** seleciono "Balneário" e o tipo "Água"  
**Então** devo ver o total consumido no período selecionado.

---

### US8 – Gerir acessos e contas
**Funcionalidade:** Gestão de utilizadores internos  
**Como** administradora  
**Quero** gerir contas e permissões  
**Para** garantir o acesso adequado de cada colaborador  

**Cenário:** Criar novo utilizador técnico  
**Dado que** estou autenticada como administradora  
**Quando** adiciono um novo perfil com papel "Técnico"  
**Então** a conta deve ser criada e ativada no sistema.

---

## Prioridade 2 — Balneário Social

### US9 – Técnico marca atendimento online
**Funcionalidade:** Marcação de atendimento no balneário  
**Como** técnico de acompanhamento social  
**Quero** agendar online o atendimento de um utente  
**Para** garantir que ele tem acesso ao balneário na hora certa  

**Cenário:** Marcar banho para utente registado  
**Dado que** estou autenticado como técnico  
**Quando** escolho o utente e o horário disponível  
**Então** a marcação deve aparecer na agenda do balneário e da secretaria.

---

### US10 – Registar presença sem técnico
**Funcionalidade:** Registo de presença presencial  
**Como** responsável do balneário  
**Quero** registar a presença de um utente sem técnico  
**Para** manter o histórico completo de atendimentos  

**Cenário:** Registar utente espontâneo  
**Dado que** o utente se apresenta sem marcação  
**Quando** o registo manualmente indicando as suas necessidades  
**Então** o atendimento deve aparecer na agenda do balneário e da secretaria.

---

### US11 – Confirmar presença e consumo
**Funcionalidade:** Confirmação de presenças  
**Como** responsável do balneário  
**Quero** confirmar presenças e produtos consumidos  
**Para** manter os registos atualizados  

**Cenário:** Confirmar presença e consumo  
**Dado que** o utente tem marcação ativa  
**Quando** o marco como "Presente" e confirmo produtos usados  
**Então** o histórico do utente deve ser atualizado.

---

### US12 – Consultar e reagendar
**Funcionalidade:** Reagendamento de marcações  
**Como** responsável do balneário  
**Quero** reagendar utentes  
**Para** ajustar horários conforme disponibilidade  

**Cenário:** Reagendar marcação existente  
**Dado que** o utente tem uma marcação  
**Quando** altero a hora da marcação  
**Então** o sistema deve notificar o técnico responsável.

---

### US13 – Gerir relatórios de utilização
**Funcionalidade:** Relatórios de utilização do balneário  
**Como** responsável do balneário  
**Quero** gerar relatórios mensais  
**Para** partilhar com a secretaria e analisar consumos  

**Cenário:** Exportar relatório mensal  
**Dado que** existem dados registados  
**Quando** exporto o relatório do mês atual  
**Então** o ficheiro deve ser criado e disponível para download.

---

## Prioridade 3 — Requisições de Material e Transporte

### US14 – Criar requisição de material
**Funcionalidade:** Requisição de material  
**Como** funcionário  
**Quero** criar requisições de material  
**Para** solicitar recursos necessários à minha valência  

**Cenário:** Criar requisição de produtos de limpeza  
**Dado que** estou autenticado como funcionário  
**Quando** seleciono o tipo "Material" e indico itens e quantidades  
**Então** o pedido deve ser submetido com estado "Em análise" e visível na secretaria.

---

### US15 – Requisitar transporte interno
**Funcionalidade:** Requisição de transporte institucional  
**Como** funcionário  
**Quero** requisitar transporte interno  
**Para** garantir deslocações de utentes ou materiais  

**Cenário:** Submeter pedido de transporte  
**Dado que** o evento foi aprovado pela direção  
**Quando** preencho data, origem e destino  
**Então** o pedido deve ser enviado à secretaria e ficar em estado "Em análise".

---

### US16 – Acompanhar estado das requisições
**Funcionalidade:** Acompanhamento de requisições  
**Como** funcionário  
**Quero** acompanhar o estado das minhas requisições  
**Para** saber quando serão aprovadas ou concluídas  

**Cenário:** Ver estado atualizado de uma requisição  
**Dado que** já submeti pedidos de material  
**Quando** acedo ao painel "Minhas Requisições"  
**Então** devo ver o estado atual e observações da secretaria.

---

### US17 – Envio automático de relatório mensal
**Funcionalidade:** Relatórios automáticos de materiais  
**Como** funcionário da escola  
**Quero** que o sistema envie automaticamente relatórios mensais  
**Para** evitar o envio manual de pedidos acumulados  

**Cenário:** Envio automático de relatório no fim do mês  
**Dado que** registei materiais ao longo do mês  
**Quando** chega o último dia do mês  
**Então** o sistema deve gerar e enviar o relatório consolidado à secretaria.

---

## Prioridade 4 — Requisições de Manutenção

### US18 – Reportar ocorrência de manutenção
**Funcionalidade:** Reporte de manutenção  
**Como** funcionário  
**Quero** reportar ocorrências de manutenção com prioridade  
**Para** garantir resolução rápida de problemas técnicos  

**Cenário:** Submeter ocorrência de avaria  
**Dado que** estou autenticado como funcionário  
**Quando** indico o tipo e gravidade da ocorrência  
**Então** o pedido deve ser enviado à secretaria para análise.

---

### US19 – Acompanhar estado de manutenção
**Funcionalidade:** Acompanhamento de manutenções  
**Como** funcionário  
**Quero** acompanhar o estado das ocorrências reportadas  
**Para** saber se já foram resolvidas ou estão em curso  

**Cenário:** Consultar estado de uma ocorrência  
**Dado que** já submeti uma ocorrência  
**Quando** vejo a lista de manutenções  
**Então** devo ver o estado atual e notas de progresso.

---

### US20 – Atualizar estado de manutenção
**Funcionalidade:** Gestão de estado de manutenções  
**Como** funcionária da secretaria  
**Quero** atualizar o estado das manutenções  
**Para** manter a equipa informada e o histórico atualizado  

**Cenário:** Marcar manutenção como concluída  
**Dado que** existem ocorrências em curso  
**Quando** altero o estado para "Concluída" e adiciono comentário  
**Então** o funcionário que reportou deve ser notificado automaticamente.

---

### US21 – Gerir lembretes e manutenções preventivas
**Funcionalidade:** Manutenções preventivas  
**Como** funcionária da secretaria  
**Quero** receber lembretes automáticos de verificações periódicas  
**Para** cumprir prazos de manutenção preventiva  

**Cenário:** Resolver lembrete de manutenção preventiva  
**Dado que** existe um lembrete trimestral  
**Quando** o marco como "Resolvido"  
**Então** o sistema deve atualizar o histórico e agendar o próximo lembrete.

---

## Prioridade 5 — Formulários e Processos (Creche / ATL)

### US22 – Submeter formulário de inscrição
**Funcionalidade:** Submissão de formulário de inscrição  
**Como** encarregado de educação  
**Quero** submeter online o formulário de inscrição  
**Para** evitar deslocações presenciais à secretaria  

**Cenário:** Submeter formulário de inscrição  
**Dado que** o período de inscrições está aberto  
**Quando** preencho os campos obrigatórios e anexo documentos  
**Então** o sistema deve confirmar a submissão e enviar notificação automática.

---

### US23 – Consultar estado da candidatura
**Funcionalidade:** Consulta de candidatura  
**Como** encarregado de educação  
**Quero** consultar o estado da candidatura submetida  
**Para** saber se foi aceite, recusada ou se falta documentação  

**Cenário:** Verificar candidatura pendente  
**Dado que** já submeti um formulário  
**Quando** acedo a “Minhas Candidaturas”  
**Então** devo ver o estado atual e mensagens da secretaria.

---

### US24 – Editar e reenviar candidatura *(fase futura)*
**Funcionalidade:** Reenvio de candidatura corrigida  
**Como** encarregado de educação  
**Quero** editar e reenviar uma candidatura devolvida  
**Para** corrigir erros e completar o processo  

**Cenário:** Corrigir candidatura incompleta  
**Dado que** recebi notificação de correção necessária  
**Quando** altero os dados e reenvio o formulário  
**Então** a nova versão deve ser submetida e a secretaria notificada.

---

### US25 – Submeter documentação adicional
**Funcionalidade:** Envio de documentação adicional  
**Como** encarregado de educação  
**Quero** enviar novos documentos solicitados pela secretaria  
**Para** completar a inscrição do meu educando  

**Cenário:** Adicionar documentação em falta  
**Dado que** a candidatura está em análise  
**Quando** anexo os ficheiros adicionais solicitados  
**Então** os documentos devem ficar disponíveis para análise da secretaria.
