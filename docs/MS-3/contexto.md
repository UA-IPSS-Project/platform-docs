# Contexto Atual

### Dificuldades durante o desenvolvimento do *MVP*:

    - Integração do *Backend* com *Frontend*;
    - Configuração de contentores dos vários módulos (Marcações, *Frontend*, Base de dados, ...);
    - Funcionalidades de gestão de Calendário;
    - Integridade de Marcações.

### O que foi desenvolvido para o *MVP*

#### Sistema de Autentificação Completo

O *MVP* contém funcionalidades de *login*, registo e criação de contas para os utentes e para os funcionários da secretaria.
Para o registo dos funcionários em seguida é subsequentemente necessária a aprovação de um outro funcionário da secretaria, para permitir avançar para o sistema.
A criação automática de contas ocorre quando um utente faz uma marcação presencial e não tem conta no sistema, é criado uma conta com os dados do utente sendo disponibilizado um *OTP* para fazer o acesso da conta, sendo-lhe pedido, de seguida, que altere a palavra-passe.
O *Login* dos utentes é feito pelo NIF, enquanto o dos funcionários é efetuado através do email institucional.

#### Gestão Inteligente de Calendário

Implementamos lógica para evitar sobreposições e para bloquear automaticamente fins de semana e feriados. Ainda há possibilidade de bloquear dias, para o caso de férias da instituição ou imprevistos que impeçam o funcionamento da secretaria.

#### Perfis distintos

Atualmente temos dois perfis:

    - **Utente**: Gestão das suas marcações;
    - **Secretaria**: Controlo total de todas as marcações.

#### Funcionalidade de Apoio

Ainda é possível exportar o calendário com as marcações da semana em vários formatos como *PDF*, *CSV*, *EXCEL* e *iCalendar*. 
Bem como o histórico de ações e atualização do perfil dos utilizadores.

### Futura implementação

Pretendemos implementar no futuro para secretaria o seguinte:

    - **Gestão Documental** (Envio de documentos e pesquisa de documentos)
    - **Sistema de Notificações** (Alertas para os utilizadores);
    - **Integridade de Dados** (Validação robusta dos dados);
    - **Gestão Administrativa** (Melhoria no controlo de utilizadores);
    - **Experiência do utilizador** (Melhoria na responsividade e na navegação do sistema).

Ainda no futuro esperamos conseguir implementar os módulos para **Candidatura**, **Requisições** e **Balneário**.