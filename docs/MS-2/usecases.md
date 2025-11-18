---
sidebar_position: 5
---
# Use Cases
Atualizados de acordo com o sistema.

1. Autenticação e Contas

### UC1 – Autenticar utilizador
**Ator:** Qualquer utilizador

**Objetivo:** Aceder ao sistema através de NIF ou email institucional.

**Pré-condição:** O utilizador tem conta ativa ou é elegível para criação automática.

**Fluxo principal:**
1. O utilizador insere NIF ou email.
2. O sistema valida o formato:
    - 9 dígitos → perfil de utilizador/encarregado/utente. Validação de NIF pelo “nif.pt”
    - email @florinhas.pt → funcionário interno.
3. O utilizador insere palavra-passe.
4. O sistema valida credenciais e inicia sessão.

# Casos de Uso (Use Cases)

## 1. Autenticação e Contas

### UC1 – Autenticar utilizador
**Ator:** Qualquer utilizador

**Objetivo:** Aceder ao sistema através de NIF ou email institucional.

**Pré-condição:** O utilizador tem conta ativa ou é elegível para criação automática.

**Fluxo principal:**
1. O utilizador insere NIF ou email.
2. O sistema valida o formato:
   - 9 dígitos → perfil de utilizador/encarregado/utente. Validação de NIF pelo “nif.pt”
   - email @florinhas.pt → funcionário interno.
3. O utilizador insere palavra-passe.
4. O sistema valida credenciais e inicia sessão.

**Resultado:** A sessão é iniciada com o painel correspondente ao perfil.

### UC2 – Criar conta manualmente
**Ator:** Utilizador externo

**Objetivo:** Criar conta com dados básicos e identidade única.

**Pré-condição:** O NIF ainda não existe no sistema.

**Fluxo principal:**
1. O utilizador preenche dados obrigatórios.
2. O sistema valida unicidade de NIF.
3. O sistema valida os dados existentes a partir do cartão de cidadão.
4. A conta é criada.

**Resultado:** O utilizador recebe confirmação e pode iniciar sessão.

### UC3 – Criação automática de conta
**Ator:** Sistema

**Objetivo:** Criar conta para utente/encarregado quando o sistema recebe marcação ou candidatura e o NIF ainda não existe.

**Pré-condição:** Surge uma marcação ou candidatura associada a NIF não existente.

**Fluxo principal:**
1. O sistema verifica inexistência da conta.
2. Cria automaticamente o utilizador.
3. Envia token de acesso para contacto registado.

**Resultado:** O utilizador passa a ter conta associada ao NIF.

### UC4 – Envio de token de acesso
**Ator:** Sistema

**Objetivo:** Permitir ao utilizador aceder ao sistema quando a conta é criada automaticamente.

**Pré-condição:** Conta criada (UC3).

**Fluxo principal:**
1. O sistema envia token via email/SMS.
2. O utilizador usa token como acesso inicial à conta.

**Resultado:** A conta é ativada e o utilizador acede ao sistema.

## 2. Secretaria

### UC5 – Criar marcação presencial
**Ator:** Funcionária da Secretaria

**Objetivo:** Registar atendimentos presenciais (ex.: reunião, entrega de documentos, inscrição).

**Pré-condição:** O utente está presente ou contacta por telefone.

**Fluxo principal:**
1. A funcionária abre “Nova Marcação”.
2. Seleciona data e hora.
3. Introduz dados do utente ou identifica via NIF.
4. Indica tipo de atendimento.
5. Confirma.

**Resultado:** Marcação registada e visível para utente e secretaria.

### UC6 – Criar marcação remota (utilizador)
**Ator:** Utilizador externo

**Objetivo:** Agendar atendimento sem intervenção da secretaria.

**Pré-condição:** O utilizador tem conta ativa.

**Fluxo principal:**
1. O utilizador acede a “Agenda”.
2. Seleciona um horário disponível na agenda.
3. Escolhe tipo de atendimento.
4. Confirma pedido.

**Resultado:** Marcação criada e visível na agenda da secretaria.

### UC7 – Cancelar marcação
**Ator:** Funcionária da Secretaria

**Objetivo:** Cancelar marcações de qualquer origem.

**Pré-condição:** Marcação ativa.

**Fluxo principal:**
1. A funcionária abre “Agenda”.
2. Seleciona marcação.
3. Indica motivo de cancelamento.
4. Confirma.

**Resultado:** Marcação cancelada e utilizadores notificados.

### UC8 – Consultar e gerir agenda
**Ator:** Funcionária da Secretaria

**Objetivo:** Consultar marcações com filtros avançados.

**Pré-condição:** Existem marcações registadas.

**Fluxo principal:**
1. A funcionária abre “Agenda Geral”.
2. Filtra por data, assunto ou utente.

**Resultado:** A agenda da Secretaria é apresentada com os filtros aplicados.

### UC9 – Atualizar estado das marcações
**Ator:** Funcionária da Secretaria

**Objetivo:** Marcar marcação como em curso, concluída, cancelada e agendada com aviso.

**Pré-condição:** Marcação existente.

**Fluxo principal:**
1. A funcionária seleciona marcação.
2. Notificar utilizador de documentos inválidos, se necessário.
3. Atualiza o estado.

**Resultado:** Estado atualizado e visível ao utilizador.

### UC10 – Gerir requisições
**Ator:** Funcionária da Secretaria

**Objetivo:** Processar requisições de material, transporte ou manutenção.

**Pré-condição:** Requisições submetidas.

**Fluxo principal:**
1. A funcionária abre módulo “Requisições”.
2. Filtra por tipo ou valência.
3. Atualiza estado (em análise, aprovado, concluído, cancelado).

**Resultado:** Estado atualizado e visível ao requisitante.

### UC11 – Enviar notificações administrativas (lembretes e prazos)
**Ator:** Funcionária da Secretaria

**Objetivo:** Receber e gerir notificações automáticas enviadas pelo sistema relacionadas com prazos administrativos e lembretes internos.

**Pré-condição:** Existência de notificações automáticas configuradas.

**Fluxo principal:**
1. A funcionária acede ao módulo “Notificações”.
2. Visualiza lembretes gerados pelo sistema.
3. Marca cada lembrete como resolvido ou pendente.

**Resultado:** O histórico de lembretes é atualizado.

### UC12 – Gerar relatórios
**Ator:** Funcionária da Secretaria

**Objetivo:** Exportar relatórios de marcações, requisições e consumos.

**Pré-condição:** Existência de dados registados.

**Fluxo principal:**
1. A funcionária acede ao módulo “Relatórios”.
2. Seleciona o tipo de relatório (marcações, requisições, consumos).
3. Filtra por período ou valência.
4. Exporta em PDF ou Excel.

**Resultado:** O relatório é gerado e guardado ou partilhado internamente.

### UC13 – Consultar dados logísticos
**Ator:** Funcionária da Secretaria

**Objetivo:** Aceder aos consumos de água, produtos ou outros recursos enviados pelas valências.

**Pré-condição:** Existem dados de consumo registados pelas valências.

**Fluxo principal:**
1. A funcionária acede a “Dados Logísticos”.
2. Filtra por valência ou tipo de recurso.
3. Consulta valores e, opcionalmente, exporta relatório.

**Resultado:** Os dados logísticos ficam acessíveis para análise.

### UC14 – Gerir contas internas
**Ator:** Funcionária da Secretaria com permissões administrativas

**Objetivo:** Criar, editar e desativar contas de utilizadores internos.

**Pré-condição:** A funcionária tem permissões administrativas.

**Fluxo principal:**
1. A funcionária acede ao módulo “Gestão de Utilizadores Internos”.
2. Cria nova conta com papel pré-definido.
3. Guarda alterações.

**Resultado:** As contas internas ficam atualizadas.

### UC15 – Criação automática de conta durante marcação
**Ator:** Sistema

**Objetivo:** Criar automaticamente uma conta sempre que uma marcação é feita com um NIF ainda não registado.

**Pré-condição:** Marcação submetida com NIF inexistente no sistema.

**Fluxo principal:**
1. O sistema verifica que o NIF não está registado.
2. Cria automaticamente a conta.
3. Associa a marcação ao novo utilizador.

**Resultado:** A conta é criada e associada à marcação.

### UC16 – Enviar token de acesso após criação automática
**Ator:** Sistema

**Objetivo:** Enviar ao utilizador um token para aceder à conta criada automaticamente.

**Pré-condição:** Conta criada automaticamente (UC15).

**Fluxo principal:**
1. O sistema gera token de acesso temporário.
2. Envia esse token para o contacto registado do utilizador.

**Resultado:** O utilizador recebe um token que permite o primeiro acesso.

### UC17 – Enviar token para recuperar a palavra-passe
**Ator:** Sistema

**Objetivo:** Enviar token para um utilizador para recuperar palavra-passe.

**Pré-condição:** Existe uma conta associada ao NIF do utilizador em questão.

**Fluxo principal:**
1. O sistema identifica a conta do NIF em questão.
2. Gera token para a recuperação da palavra-passe.
3. Envia token para o contacto do utilizador.

**Resultado:** O utilizador pode entrar na sua conta através do token e mudar a palavra-passe.

### UC18 – Enviar token novo caso estiver expirado
**Ator:** Sistema

**Objetivo:** Enviar token para um utilizador se o token anterior estiver expirado.

**Pré-condição:** Existe uma conta associada ao NIF do utilizador em questão.

**Fluxo principal:**
1. O sistema identifica a conta do NIF em questão.
2. Gera um novo token.
3. Envia token para o contacto do utilizador.

**Resultado:** O utilizador pode entrar na sua conta através do token.

### UC19 – Consultar e filtrar marcações passadas
**Ator:** Funcionária da Secretaria

**Objetivo:** Consultar marcações passadas com filtros aplicáveis.

**Pré-condição:** Existência de marcações anteriores.

**Fluxo principal:**
1. A funcionária acede à secção “Histórico”.
2. Filtra por data, atendente, utente, tipo de atendimento e estado.

**Resultado:** As marcações passadas são exibidas conforme filtros.

### UC20 – Definir palavra-passe no primeiro acesso via token
**Ator:** Utilizador

**Objetivo:** Definir a primeira palavra-passe após aceder com token.

**Pré-condição:** O utilizador acede pela primeira vez via token enviado automaticamente.

**Fluxo principal:**
1. O utilizador entra no sistema através do token.
2. O sistema bloqueia acesso ao painel principal.
3. O sistema exige criação de nova palavra-passe.
4. O utilizador define palavra-passe válida.

**Resultado:** A palavra-passe é atualizada e o acesso é desbloqueado.

## 3. Balneário Social

### UC21 – Marcação pelo técnico

**Ator:** Técnico de Acompanhamento Social

**Objetivo:** Agendar banhos ou atendimentos de higiene.

**Fluxo principal:**
1. O técnico autentica-se.
2. Escolhe horário.
3. Identifica utente.
4. Indica consumos adicionais.

**Resultado:** Marcação visível para balneário e secretaria.

### UC22 – Registar presença sem técnico

**Ator:** Responsável do Balneário

**Objetivo:** Criar marcação direta para utente não acompanhado.

**Fluxo principal:**
1. Abrir “Marcações”.
2. Escolher horário.
3. Identifica utente.
4. Registar consumos e necessidades.

**Resultado:** Registo visível ao sistema.

### UC23 – Confirmar presença e consumos

**Ator:** Responsável do Balneário

**Objetivo:** Validar que o utente compareceu e o que utilizou.

**Fluxo principal:**
1. Abrir agenda do dia.
2. Marcar “presente”.
3. Atualizar consumos.

**Resultado:** Histórico atualizado.

### UC24 – Consultar e cancelar marcações

**Ator:** Responsável do Balneário

**Objetivo:** Consultar marcações existentes e cancelar marcações quando necessário.

**Pré-condição:** Existem marcações registadas para o Balneário.

**Fluxo principal:**
1. O responsável abre a “Agenda do Balneário”.
2. Filtra por utente, técnico ou data.
3. Seleciona a marcação pretendida.
4. Cancela a marcação e indica o motivo.

**Resultado:** A marcação é cancelada e o técnico responsável (se existir) é notificado.

### UC25 – Relatórios do balneário

**Ator:** Responsável do Balneário

**Objetivo:** Exportar relatórios de uso.

**Fluxo principal:**
1. Aceder a “Relatórios”.
2. Escolher tipo.
3. Exportar.

**Resultado:** Documento gerado.

## 4. Requisições de Material e Transporte

### UC26 – Criar requisição de material

**Ator:** Funcionário

**Objetivo:** Pedir materiais necessários à secretaria.

**Fluxo principal:**
1. Abrir “Requisições”.
2. Selecionar “Material”.
3. Preencher informações necessárias.

**Resultado:** Pedido enviado à secretaria.

### UC27 – Criar requisição de transporte

**Ator:** Funcionário

**Objetivo:** Pedir viaturas para deslocações internas.

**Fluxo principal:**
1. Abrir “Requisições”.
2. Selecionar “Transporte”.
3. Preencher informações necessárias.

**Resultado:** Pedido registado.

### UC28 – Acompanhar estado das requisições

**Ator:** Funcionário

**Objetivo:** Ver andamento das requisições criadas.

**Fluxo principal:**
1. Abrir “Minhas Requisições”.
2. Filtrar por tipo/estado.
3. Consultar observações.

**Resultado:** Transparência do processo.

### UC29 – Relatório mensal automático de materiais

**Ator:** Sistema

**Objetivo:** Gerar documento com materiais acumulados no mês.

**Fluxo principal:**
1. O sistema agrega dados ao longo do mês.
2. No final, gera relatório.
3. Envia à secretaria.

**Resultado:** Relatório entregue sem intervenção manual.

## 5. Manutenções

### UC30 – Reportar ocorrência de manutenção

**Ator:** Funcionário

**Objetivo:** Informar problemas de instalação.

**Fluxo principal:**
1. Abrir “Manutenções”.
2. Nova ocorrência.
3. Preencher categoria, prioridade, descrição e anexos.

**Resultado:** Solicitação enviada.

### UC31 – Acompanhar estado de ocorrência

**Ator:** Funcionário

**Objetivo:** Ver evolução da manutenção.

**Fluxo principal:**
1. Abrir “Ocorrências Submetidas”.
2. Consultar estado e comentários.

**Resultado:** Informação atualizada.

### UC32 – Atualizar estado pela Secretaria

**Ator:** Funcionária da Secretaria

**Objetivo:** Gerir fases da manutenção.

**Fluxo principal:**
1. Abrir “Requisitos - Manutenções”.
2. Atualizar estado: pendente, em curso, concluído.

**Resultado:** Funcionário notificado.

### UC33 – Gerir manutenções preventivas

**Ator:** Funcionária da Secretaria

**Objetivo:** Controlar lembretes periódicos.

**Fluxo principal:**
1. O sistema gera lembretes.
2. A funcionária marca como resolvido/pendente.
3. Atualiza próxima data.

**Resultado:** Painel atualizado.

## 6. Formulários Creche/ATL

### UC34 – Submeter formulário de inscrição

**Ator:** Encarregado de Educação

**Objetivo:** Submeter candidatura da Creche ou ATL para a secretaria.

**Fluxo principal:**
1. Aceder ao portal.
2. Preencher formulário.
3. Anexar documentos obrigatórios.
4. Submeter.

**Resultado:** Candidatura registada.

### UC35 – Consultar estado da candidatura

**Ator:** Encarregado de Educação

**Objetivo:** Ver estado atualizado.

**Fluxo principal:**
1. Abrir “Minhas Candidaturas”.
2. Ver estado: pendente, aprovada, incompleta, rejeitada.

**Resultado:** Informação disponível.

### UC36 – Editar e reenviar candidatura

**Ator:** Encarregado de Educação

**Objetivo:** Corrigir informação devolvida pela secretaria.

**Fluxo principal:**
1. Abrir candidatura marcada como “Correção necessária”.
2. Editar.
3. Reenviar.

**Resultado:** Envio atualizado.

### UC37 – Enviar documentação adicional

**Ator:** Encarregado de Educação

**Objetivo:** Inserir documentos pedidos após a submissão.

**Fluxo principal:**
1. Abrir candidatura.
2. “Adicionar Documento”.
3. Anexar ficheiros.

**Resultado:** Documentos disponíveis para análise.


### UC27 – Criar requisição de transporte

**Ator:** Funcionário

**Objetivo:** Pedir viaturas para deslocações internas.

**Fluxo principal:**
1. Abrir “Requisições”.
2. Selecionar “Transporte”.
3. Preencher informações necessárias.

**Resultado:** Pedido registado.

### UC28 – Acompanhar estado das requisições

**Ator:** Funcionário

**Objetivo:** Ver andamento das requisições criadas.

**Fluxo principal:**
1. Abrir “Minhas Requisições”.
2. Filtrar por tipo/estado.
3. Consultar observações.

**Result

**Fluxo principal:**
1. Aceder a “Relatórios”.
2. Escolher tipo.
3. Exportar.

**Resultado:** Documento gerado.

## 4. Requisições de Material e Transporte

### UC26 – Criar requisição de material

**Ator:** Funcionário

**Objetivo:** Pedir materiais necessários à secretaria.

**Fluxo principal:**
1. Abrir “Requisições”.
2. Selecionar “Material”.
3. Preencher informações necessárias.

**Resultado:** Pedido enviado à secretaria.

### UC27 – Criar requisição de transporte

**Ator:** Funcionário

**Objetivo:** Pedir viaturas para deslocações internas.

**Fluxo principal:**
1. Abrir “Requisições”.
2. Selecionar “Transporte”.
3. Preencher informações necessárias.

**Resultado:** Pedido registado.

### UC28 – Acompanhar estado das requisições

**Ator:** Funcionário

**Objetivo:** Ver andamento das requisições criadas.

**Fluxo principal:**
1. Abrir “Minhas Requisições”.
2. Filtrar por tipo/estado.
3. Consultar observações.

**Resultado:** Transparência do processo.

### UC29 – Relatório mensal automático de materiais

**Ator:** Sistema

**Objetivo:** Gerar documento com materiais acumulados no mês.

**Fluxo principal:**
1. O sistema agrega dados ao longo do mês.
2. No final, gera relatório.
3. Envia à secretaria.

**Resultado:** Relatório entregue sem intervenção manual.

## 5. Manutenções

### UC30 – Reportar ocorrência de manutenção

**Ator:** Funcionário

**Objetivo:** Informar problemas de instalação.

**Fluxo principal:**
1. Abrir “Manutenções”.
2. Nova ocorrência.
3. Preencher categoria, prioridade, descrição e anexos.

**Resultado:** Solicitação enviada.

### UC31 – Acompanhar estado de ocorrência

**Ator:** Funcionário

**Objetivo:** Ver evolução da manutenção.

**Fluxo principal:**
1. Abrir “Ocorrências Submetidas”.
2. Consultar estado e comentários.

**Resultado:** Informação atualizada.

### UC32 – Atualizar estado pela Secretaria

**Ator:** Funcionária da Secretaria

**Objetivo:** Gerir fases da manutenção.

**Fluxo principal:**
1. Abrir “Requisitos - Manutenções”.
2. Atualizar estado: pendente, em curso, concluído.

**Resultado:** Funcionário notificado.

### UC33 – Gerir manutenções preventivas

**Ator:** Funcionária da Secretaria

**Objetivo:** Controlar lembretes periódicos.

**Fluxo principal:**
1. O sistema gera lembretes.
2. A funcionária marca como resolvido/pendente.
3. Atualiza próxima data.

**Resultado:** Painel atualizado.

## 6. Formulários Creche/ATL

### UC34 – Submeter formulário de inscrição

**Ator:** Encarregado de Educação

**Objetivo:** Submeter candidatura da Creche ou ATL para a secretaria.

**Fluxo principal:**
1. Aceder ao portal.
2. Preencher formulário.
3. Anexar documentos obrigatórios.
4. Submeter.

**Resultado:** Candidatura registada.

### UC35 – Consultar estado da candidatura

**Ator:** Encarregado de Educação

**Objetivo:** Ver estado atualizado.

**Fluxo principal:**
1. Abrir “Minhas Candidaturas”.
2. Ver estado: pendente, aprovada, incompleta, rejeitada.

**Resultado:** Informação disponível.

### UC36 – Editar e reenviar candidatura

**Ator:** Encarregado de Educação

**Objetivo:** Corrigir informação devolvida pela secretaria.

**Fluxo principal:**
1. Abrir candidatura marcada como “Correção necessária”.
2. Editar.
3. Reenviar.

**Resultado:** Envio atualizado.

### UC37 – Enviar documentação adicional

**Ator:** Encarregado de Educação

**Objetivo:** Inserir documentos pedidos após a submissão.

**Fluxo principal:**
1. Abrir candidatura.
2. “Adicionar Documento”.
3. Anexar ficheiros.

**Resultado:** Documentos disponíveis para análise.
