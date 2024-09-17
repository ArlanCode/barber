# FSW Barber

Bem-vindo ao **FSW Barber**, um aplicativo web desenvolvido para barbearias, oferecendo uma experiência intuitiva e prática para agendamentos online de serviços de barbearia. Os clientes podem visualizar, marcar e gerenciar seus agendamentos, além de escolher entre diferentes barbearias e serviços. O projeto inclui autenticação via conta do Google para maior comodidade e segurança.

Acesse o sistema em produção aqui: [FSW Barber](https://barber-bay-one.vercel.app/)

Obs: O layout foi projetado para dispositivos móveis. Caso esteja acessando via desktop, utilize o DevTools (F12) para simular um ambiente mobile.

## Funcionalidades

- **Login e Autenticação**: Faça login com sua conta Google para maior segurança e conveniência.
- **Visualizar e Marcar Agendamentos**: Veja a disponibilidade de horários e agende seus serviços de barbearia com facilidade.
- **Gerenciamento de Agendamentos**: Cancele ou altere seus agendamentos de forma simples e rápida.
- **Seleção de Barbearias e Serviços**: Escolha entre várias barbearias cadastradas e selecione o serviço desejado.
- **Interface Responsiva**: Interface amigável e adaptada para todos os dispositivos.

## Tecnologias Utilizadas

- **Next.js**
- **React.js**
- **PostgreSQL**
- **Tailwind CSS**
- **Prisma**
- **Node.js**
- **ShadCN**
- **TypeScript**
- **JavaScript**

## Como Executar o Projeto Localmente

Siga as instruções abaixo para rodar o projeto localmente:

### Pré-requisitos
  Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:


### Passos
1. Clone o repositório

2. Configure o banco de dados:

  . Crie um banco de dados PostgreSQL

  . Defina as variáveis de ambiente no arquivo .env com as credenciais do banco
  
  . Exemplo de configuração no .env:

      DATABASE_URL="postgresql://usuario:senha@localhost:5432/fswbarber"

      GOOGLE_CLIENT_ID="sua_google_client_id"

      GOOGLE_CLIENT_SECRET="sua_google_client_secret"

      NEXT_AUTH_SECRET="secret"

3. Instale as dependências:  
    npm install

4. Execute o projeto:  
    npm run dev

5. Acesse a aplicação:  
    Abra o navegador e acesse http://localhost:3000.
