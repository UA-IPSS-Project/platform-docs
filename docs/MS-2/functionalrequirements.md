---
sidebar_position: 3
---

# Requisitos Funcionais

## 1. Requisitos Funcionais (RF)

### Prioridade 1.1 — Login
- **RF1.1.1** O sistema deve permitir ao utilizador criar conta.
- **RF1.1.2** O sistema deve permitir ao utilizador aceder à sua conta.
- **RF1.1.3** O sistema deve verificar automaticamente se o NIF é válido e único.
- **RF1.1.4** O sistema deve permitir recuperar a palavra-passe através de um token, via online ou presencialmente na secretaria.
- **RF1.1.5** O sistema deve permitir gerar um novo token para o acesso da conta se o token anterior estiver expirado, via online ou presencialmente na secretaria.

### Prioridade 1.2 — Secretaria
- **RF1.2.1** O sistema deve permitir à secretaria criar marcações presenciais, indicando data, hora e tipo de atendimento.
- **RF1.2.2** O sistema deve permitir cancelar marcações e notificar automaticamente os utilizadores afetados.
- **RF1.2.3** O sistema deve apresentar uma agenda central com filtros por data.
- **RF1.2.4** O sistema deve permitir atualizar o estado das marcações (Recebido, Concluído, Cancelado).
- **RF1.2.5** O sistema deve permitir atualizar o estado das requisições (em análise, aprovado, concluído, cancelado).
- **RF1.2.6** O sistema deve enviar notificações automáticas de lembretes e prazos administrativos à secretaria.
- **RF1.2.7** O sistema deve gerar relatórios de marcações, requisições e consumos em formato PDF e Excel.
- **RF1.2.8** O sistema deve permitir à secretaria consultar dados logísticos (ex.: consumo de água, produtos).
- **RF1.2.9** O sistema deve permitir criar e gerir contas de utilizadores internos.
- **RF1.2.10** O sistema deve permitir ao utilizador criar marcações remotamente, indicando data, hora e tipo de atendimento.
- **RF1.2.11** O sistema deve permitir à secretaria notificar o utilizador de documentos inválidos.
- **RF1.2.12** O sistema deve criar automaticamente uma conta de utilizador quando é feita uma marcação com um NIF válido ainda não registado.
- **RF1.2.13** O sistema deve enviar um token de acesso para o(s) contacto(s) do utilizador quando a conta é criada automaticamente.
- **RF1.2.14** O sistema deve permitir consultar e filtrar marcações passadas.
- **RF1.2.15** O sistema deve obrigar o utilizador, no acesso realizado através de token enviado automaticamente, a definir uma nova palavra-passe antes de continuar a utilizar a plataforma.

### Prioridade 2 — Balneário Social
- **RF2.1** O sistema deve permitir a técnicos marcarem um atendimento para os banhos dos utentes.
- **RF2.2** O sistema deve permitir ao responsável do balneário marcar um atendimento para os banhos dos utentes.
- **RF2.3** O sistema deve permitir ao responsável do balneário confirmar presenças.
- **RF2.4** O sistema deve permitir ao responsável do balneário atualizar consumos (roupa, produtos).
- **RF2.5** O sistema deve permitir consultar e cancelar marcações do balneário.
- **RF2.6** O sistema deve gerar relatórios de utilização e consumo mensais.

### Prioridade 3 — Requisições de Material e Transporte
- **RF3.1** O sistema deve permitir a qualquer funcionário criar requisições de material com prioridade.
- **RF3.2** O sistema deve permitir requisitar transporte interno com prioridade, indicando a(s) viatura(s) (de acordo com os lugares), data, objetivo e destino.
- **RF3.3** O sistema deve permitir acompanhar o estado das requisições submetidas.
- **RF3.4** O sistema deve gerar relatórios mensais automáticos de materiais requisitados.

### Prioridade 4 — Requisições de Manutenção
- **RF4.1** O sistema deve permitir reportar ocorrências de manutenção, com descrição e prioridade.
- **RF4.2** O sistema deve permitir acompanhar o estado das ocorrências reportadas.
- **RF4.3** O sistema deve gerar lembretes automáticos de manutenções periódicas e prazos.
- **RF4.4** O sistema deve permitir registar intervenções externas (fase futura).

### Prioridade 5 — Formulários e Processos (Creche/ATL)
- **RF5.1** O sistema deve permitir submeter formulários de inscrição para Creche e ATL.
- **RF5.2** O sistema deve permitir consultar o estado das candidaturas submetidas.
- **RF5.3** O sistema deve permitir enviar documentação adicional solicitada pela secretaria.
- **RF5.4** Sempre que é criada uma candidatura e o(s) encarregado(s) de educação não possuir conta, é criada uma conta automaticamente.
- **RF5.5** O sistema deve associar a candidatura à conta do(s) encarregado(s) de educação.
- **RF5.6** O sistema deve permitir editar e reenviar candidaturas devolvidas pela secretaria.