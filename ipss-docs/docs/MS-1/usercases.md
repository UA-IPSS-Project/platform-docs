---
sidebar_position: 2
---
# Casos de Uso
Descrvem como os utilizadores irão interagir com o sitema.
---

## Secretaria (Prioridade 1)

### UC1 – Criar marcação presencial
**Ator:** Patrícia (Funcionária da Secretaria)  
**Objetivo:** Registar um atendimento presencial solicitado diretamente na secretaria (ex.: entrega de roupa, pedido de reunião, inscrição).  
**Pré-condição:** O utente encontra-se presencialmente ou contacta por telefone.  
**Fluxo principal:**
1. Patrícia acede ao módulo “Nova Marcação”.
2. Introduz dados do utente, motivo da marcação e valência (balneário, escola, creche, etc.).
3. Escolhe a data e hora disponíveis.
4. Confirma e guarda a marcação.  
**Resultado:** A marcação é registada e visível no painel da secretaria, na valência correspondente e no painel do utente.

---

### UC2 – Cancelar marcação
**Ator:** Patrícia  
**Objetivo:** Anular uma marcação previamente agendada por qualquer utilizador (secretaria, técnico, pai ou funcionário).  
**Pré-condição:** A marcação existe e ainda não foi concluída.  
**Fluxo principal:**
1. Patrícia abre o módulo “Agenda”.
2. Seleciona a marcação a cancelar.
3. Indica o motivo do cancelamento.
4. Confirma o cancelamento.  
**Resultado:** A marcação é removida e o utente ou técnico é notificado automaticamente.

---

### UC3 – Consultar e gerir agenda
**Ator:** Patrícia  
**Objetivo:** Consultar marcações diárias, semanais ou mensais, filtrando por valência, técnico ou utente.  
**Pré-condição:** O sistema possui marcações registadas.  
**Fluxo principal:**
1. Patrícia acede ao painel “Agenda Geral”.
2. Filtra por data, setor ou tipo de atendimento.
3. Visualiza as marcações e pode reagendar ou atualizar dados.  
**Resultado:** Agenda sincronizada com todos os setores.

---

### UC4 – Atualizar estado de requisições
**Ator:** Patrícia  
**Objetivo:** Controlar o ciclo de vida das requisições vindas da escola, balneário ou outros setores.  
**Pré-condição:** Existem requisições submetidas pelos colaboradores.  
**Fluxo principal:**
1. Acede ao módulo “Requisições”.
2. Filtra por setor e tipo.
3. Atualiza o estado (em análise → aprovado → concluído).  
**Resultado:** Estado atualizado e visível ao requisitante.

---

### UC5 – Gerir lembretes e notificações
**Ator:** Patrícia  
**Objetivo:** Gerir notificações automáticas sobre manutenções, prazos administrativos e tarefas pendentes.  
**Pré-condição:** O sistema tem notificações automáticas configuradas.  
**Fluxo principal:**
1. Acede ao painel “Notificações”.
2. Visualiza lembretes.
3. Marca cada lembrete como resolvido ou pendente.  
**Resultado:** Histórico de lembretes atualizado.

---

### UC6 – Gerar e exportar relatórios
**Ator:** Patrícia  
**Objetivo:** Consultar e exportar relatórios sobre marcações, requisições e presenças.  
**Pré-condição:** Existem dados registados.  
**Fluxo principal:**
1. Acede ao painel “Relatórios”.
2. Escolhe o tipo de relatório.
3. Filtra por data ou setor.
4. Exporta o ficheiro (PDF, Excel).  
**Resultado:** Relatório guardado para arquivo ou partilha.

---

### UC7 – Consultar dados logísticos
**Ator:** Patrícia  
**Objetivo:** Monitorizar o consumo de recursos nas diferentes valências.  
**Pré-condição:** O sistema recebe dados de consumo.  
**Fluxo principal:**
1. Entra em “Painel de Estatísticas”.
2. Filtra por valência e tipo de recurso.
3. Visualiza ou exporta relatório.  
**Resultado:** Dados atualizados para controlo financeiro.

---

### UC8 – Gerir acessos e contas internas
**Ator:** Patrícia (modo administrativo)  
**Objetivo:** Criar, editar ou desativar contas de utilizadores internos.  
**Pré-condição:** O sistema está em modo administrativo.  
**Fluxo principal:**
1. Acede ao módulo “Gestão de Utilizadores”.
2. Adiciona ou altera permissões.
3. Guarda alterações.  
**Resultado:** Contas e acessos atualizados.

---

## Balneário Social (Prioridade 2)

### UC9 – Técnico marca atendimento online
**Ator:** João (Técnico)  
**Objetivo:** Agendar banho ou atendimento de higiene para um utente.  
**Pré-condição:** João tem conta ativa e o utente está registado.  
**Fluxo principal:**  
1. Autentica-se no portal.  
2. Seleciona “Marcar Banho”.  
3. Indica o utente, horário e opções adicionais.  
**Resultado:** Marcação registada e visível para Mafalda e secretaria.

---

### UC10 – Registar presença de utente sem técnico
**Ator:** Mafalda (Responsável do Balneário)**  
**Objetivo:** Registar manualmente a presença de um utente sem acompanhamento técnico.  
**Pré-condição:** O utente apresenta-se no balneário.  
**Fluxo principal:**  
1. Abre o módulo “Marcações”.  
2. Verifica horários disponíveis.  
3. Regista a presença e guarda.  
**Resultado:** Atendimento registado na agenda.

---

### UC11 – Confirmar presença e consumo
**Ator:** Mafalda  
**Objetivo:** Validar a presença e o consumo de recursos.  
**Pré-condição:** Existe uma marcação ativa.  
**Fluxo principal:**  
1. Abre a agenda diária.  
2. Marca o utente como “presente”.  
3. Confirma os consumos.  
**Resultado:** Histórico atualizado e sincronizado.

---

### UC12 – Consultar e reagendar marcações
**Ator:** Mafalda  
**Objetivo:** Consultar e reagendar marcações do dia.  
**Pré-condição:** Existem marcações registadas.  
**Fluxo principal:**  
1. Abre “Agenda do Balneário”.  
2. Filtra por dia, técnico ou utente.  
3. Altera data/hora se necessário.  
**Resultado:** Alterações notificam o técnico.

---

### UC13 – Gerar relatórios de utilização
**Ator:** Mafalda  
**Objetivo:** Consultar relatórios de frequência e consumo.  
**Pré-condição:** O sistema tem dados registados.  
**Fluxo principal:**  
1. Acede ao módulo “Relatórios”.  
2. Seleciona o tipo e período.  
3. Exporta o ficheiro.  
**Resultado:** Relatórios disponíveis para partilha.

---

## Requisições de Material e Transporte (Prioridade 3)

### UC14 – Criar requisição de material
**Ator:** Funcionário (Pedro, Mafalda, ou outro)  
**Objetivo:** Solicitar materiais necessários ao funcionamento da valência.  
**Pré-condição:** Funcionário autenticado.  
**Fluxo principal:**  
1. Acede a “Requisições”.  
2. Escolhe tipo “Material”.  
3. Indica categoria e quantidade.  
4. Submete o pedido.  
**Resultado:** Pedido enviado à secretaria.  

---

### UC15 – Requisitar transporte interno
**Ator:** Funcionário autorizado  
**Objetivo:** Solicitar transporte institucional.  
**Fluxo principal:**  
1. Acede a “Requisições → Transporte”.  
2. Indica data, origem, destino e motivo.  
**Resultado:** Pedido enviado à secretaria e estado atualizado.

---

### UC16 – Acompanhar estado de requisições
**Ator:** Funcionário  
**Objetivo:** Consultar estado das requisições submetidas.  
**Fluxo principal:**  
1. Abre “Minhas Requisições”.  
2. Filtra por tipo e estado.  
3. Consulta observações.  
**Resultado:** Visibilidade total sobre o andamento.

---

### UC17 – Envio automático de relatório mensal
**Ator:** Pedro (Funcionário da Escola)**  
**Objetivo:** Automatizar o envio mensal de materiais necessários.  
**Fluxo principal:**  
1. Regista materiais durante o mês.  
2. O sistema gera relatório automático.  
**Resultado:** Relatório enviado à secretaria sem submissão manual.

---

## Requisições de Manutenção (Prioridade 4)

### UC18 – Reportar ocorrência de manutenção
**Ator:** Funcionário autorizado  
**Objetivo:** Comunicar problema técnico ou físico.  
**Fluxo principal:**  
1. Acede a “Manutenções → Nova Ocorrência”.  
2. Indica tipo e gravidade.  
3. Anexa foto ou descrição.  
**Resultado:** Pedido enviado à secretaria.

---

### UC19 – Acompanhar estado de manutenção
**Ator:** Funcionário  
**Objetivo:** Consultar estado das ocorrências.  
**Fluxo principal:**  
1. Acede a “Ocorrências Submetidas”.  
2. Visualiza estado e observações.  
**Resultado:** Feedback atualizado.

---

### UC20 – Atualizar estado de manutenção
**Ator:** Patrícia (Secretaria)**  
**Objetivo:** Atualizar estado das ocorrências pendentes.  
**Fluxo principal:**  
1. Abre “Gestão de Manutenções”.  
2. Filtra e atualiza estado.  
3. Adiciona comentários.  
**Resultado:** Sistema notifica automaticamente o funcionário.

---

### UC21 – Gerir lembretes e manutenções preventivas
**Ator:** Patrícia  
**Objetivo:** Gerir lembretes automáticos de manutenção.  
**Fluxo principal:**  
1. Sistema gera lembretes.  
2. Patrícia marca como resolvido ou pendente.  
**Resultado:** Histórico de manutenções atualizado.

---

## Formulários e Processos (Creche/ATL) — Prioridade 5

### UC22 – Submeter formulário de inscrição
**Ator:** Luís (Pai / Encarregado de Educação)**  
**Objetivo:** Submeter inscrição para Creche/ATL.  
**Fluxo principal:**  
1. Acede ao portal da IPSS.  
2. Preenche dados e anexa documentos.  
3. Submete o formulário.  
**Resultado:** Pedido registado e confirmação automática.

---

### UC23 – Consultar estado da candidatura
**Ator:** Luís  
**Objetivo:** Consultar estado da candidatura submetida.  
**Fluxo principal:**  
1. Autentica-se e abre “Minhas Candidaturas”.  
2. Visualiza estado e correções necessárias.  
**Resultado:** Informação atualizada sobre o processo.

---

### UC24 – Editar e reenviar candidatura
**Ator:** Luís  
**Objetivo:** Corrigir e reenviar candidatura devolvida.  
**Fluxo principal:**  
1. Abre a candidatura devolvida.  
2. Corrige dados e reenvia.  
**Resultado:** Candidatura reenviada para revisão.

---

### UC25 – Submeter documentação adicional
**Ator:** Luís  
**Objetivo:** Enviar novos documentos solicitados pela secretaria.  
**Fluxo principal:**  
1. Acede à candidatura.  
2. Adiciona os ficheiros pedidos.  
3. Guarda o envio.  
**Resultado:** Documentos disponíveis para análise.
