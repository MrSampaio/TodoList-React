 # TodoList-React

Projeto de lista de tarefas (Todo List) desenvolvido com foco em experiência do usuário, integração backend robusta e tecnologias modernas.

## Principais Características

- **Frontend em React**: Utiliza React Hooks para gerenciamento de estado e efeitos, garantindo uma interface reativa, dinâmica e de fácil usabilidade.
- **Consumo de API com Axios**: Todas as comunicações entre frontend e backend são feitas através do Axios, proporcionando requisições HTTP seguras, rápidas e com fácil manipulação de respostas.
- **Backend com Node.js e MongoDB**: O servidor (`server/server.js`) gerencia dados persistidos em uma base MongoDB, oferecendo operações CRUD eficientes para tarefas.
- **Arquitetura Modular**: Separação clara entre frontend (`src`), backend (`server`) e componentes/formulário específico (`todo-form`).

## Como Rodar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/MrSampaio/TodoList-React.git
   cd TodoList-React
   ```

2. **Instale as dependências do frontend e backend:**
   ```bash
   npm install
   cd server
   npm install
   npm install axios
   npm install prisma
   npm install cors
   cd ..
   cd todo-form
   npm install tailwindcss @tailwindcss/vite
   npm install lucide-react
   ```

3. **Configure o MongoDB**
   - Certifique-se de ter um serviço MongoDB rodando localmente ou forneça a URI de conexão adequada no backend.

4. **Inicie o backend:**
   ```bash
   cd server
   node server.js
   ```

5. **Inicie o frontend:**
   ```bash
   npm start
   ```

6. **Acesse a aplicação**
   - Normalmente estará disponível em `http://localhost:3000`

## Pontos Fortes

- **React Hooks**: O uso extensivo de hooks como `useState` e `useEffect` proporciona uma experiência fluida, com renderizações otimizadas e lógica de componentes simplificada.
- **Axios**: Abstração das chamadas HTTP, facilitando integração com APIs REST, tratamento de erros e interceptação de requisições.
- **MongoDB**: Persistência escalável e flexível, permitindo fácil expansão das funcionalidades e integração com outros serviços.
- **Código Limpo e Modular**: Separação por pastas e arquivos, facilitando manutenção, testes e evolução do projeto.

## Estrutura do Projeto

- `.gitignore` — Arquivos e pastas ignorados pelo Git
- `package.json` / `package-lock.json` — Dependências e scripts do projeto
- `src/` — Código-fonte do frontend React
- `server/` — Backend Node.js + MongoDB
  - `server.js` — Servidor principal
  - `prisma/` — (Estrutura para integração futura ou atual com Prisma)
- `todo-form/` — Componentes/formulários específicos para tarefas

## Contribua

Pull requests são bem-vindos! Sinta-se livre para sugerir melhorias ou reportar problemas.

---
Desenvolvido por [MrSampaio](https://github.com/MrSampaio)
