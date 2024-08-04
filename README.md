# Everest TODO Challenge

## Descrição

Este é um projeto de aplicação de lista de tarefas (TODO) desenvolvido com React e typescript. A aplicação permite gerenciar tarefas, com funcionalidades para adicionar, aprovar, deletar e marcar tarefas como concluídas. Inclui também a capacidade de filtrar tarefas e exibir mensagens de erro e sucesso.

## Tecnologias Utilizadas

- **Front-End:**
  - React
  - TypeScript
  - styled-components
  - Axios (para consumo de API)
  

## Estrutura do Projeto

- **src/**
  - **api/**: Comunicação com Endpoint
  - **components/**: Componentes React da aplicação.
  - **pages/**: Paginas da aplicação
  - **services/**: Serviços para manipulação de dados e consumo de API.
  - **types/**: Definições de tipos e enums.
  - **App.tsx**: Componente principal da aplicação.
  
- **public/**: Arquivos públicos, como imagens e o arquivo `index.html`.
  
- **styles/**: Arquivos de estilização, como CSS e styled components.

## Telas

![Tela TodoPage - Submmit a form and validate](/src/assets/image_0.jpg)
![Tela TodoPage - Error to approve a Task, must be checked first](/src/assets/image_1.jpg)
![Tela TodoPage - Task approved and assigned on In Progress](/src/assets/image_2.jpg)
![Tela TodoPage - Task approved and assigned on Concluded](/src/assets/image_3.jpg)

## Instalação e Configuração

### Front-End

1. Clone o repositório:

   ```bash
   git clone https://github.com/usuario/repo.git
   cd repo