
---

### **README - API de Gerenciamento de Tarefas**

---

## **Sobre o projeto**  
Essa API foi desenvolvida para gerenciar tarefas, permitindo a criação, leitura, atualização e exclusão de tarefas (CRUD). Durante o desenvolvimento, foi utilizada a metodologia **TDD (Test-Driven Development)**, garantindo que todas as funcionalidades fossem implementadas com testes bem definidos desde o início.

A API é modular e organizada para facilitar a manutenção e a escalabilidade, sendo um exemplo prático de como criar APIs RESTful robustas e testáveis.

---

## **Estrutura de Pastas**  
```plaintext
src/                  # Código-fonte principal
  app/
    controllers/      # Controladores de rotas (lógica de negócios)
      TaskController.js
    models/           # Modelos de dados do MongoDB
      Task.js
  database/           # Configuração e conexão com o banco de dados
    index.js
  app.js              # Configuração da aplicação Express
  routes.js           # Rotas principais da API
  server.js           # Inicialização do servidor
__tests__/            # Testes automatizados (TDD)
  integration/        # Testes de integração das rotas
    task.routes.test.js
jest.config.js        # Configuração do Jest para testes
```

---

## **Tecnologias Utilizadas**  
- **Node.js**: Ambiente de execução JavaScript no servidor.  
- **Express.js**: Framework minimalista para APIs RESTful.  
- **MongoDB**: Banco de dados NoSQL para armazenamento das tarefas.  
- **Mongoose**: ODM para modelagem e interação com o MongoDB.  
- **Jest**: Biblioteca de testes para garantir a confiabilidade do código.  
- **TDD (Test-Driven Development)**: Metodologia de desenvolvimento guiado por testes.

---

## **Requisitos**  
Antes de iniciar, certifique-se de ter os seguintes softwares instalados:  
- Node.js 16+  
- MongoDB 5+  
- NPM ou Yarn  

---

## **Rodando o projeto localmente**  

### **1. Clone o repositório**  
```bash
git clone https://github.com/Thyago-ES/api-gerenciamento-tarefas.git
cd api-gerenciamento-tarefas
```

### **2. Instale as dependências**  
```bash
npm install
```

### **3. Configure as variáveis de ambiente**  
Crie um arquivo `.env` na raiz do projeto com as variáveis:  
```
MONGO_URI=mongodb://localhost:27017/taskmanager
PORT=3000
```

### **4. Inicie o servidor**  
```bash
npm start
```

### **5. Execute os testes automatizados**  
Como o projeto segue TDD, os testes são uma parte essencial do fluxo de desenvolvimento.  
```bash
npm test
```

---

## **Funcionalidades da API**  

### **1. Listar todas as tarefas**  
**GET :: `/tasks`**  
> Retorna uma lista de todas as tarefas.  

---

### **2. Buscar uma tarefa pelo ID**  
**GET :: `/tasks/:id`**  
> Retorna os detalhes de uma tarefa específica.  

---

### **3. Criar uma nova tarefa**  
**POST :: `/tasks`**  
> Cria uma nova tarefa no banco de dados.  

---

### **4. Atualizar uma tarefa existente**  
**PUT :: `/tasks/:id`**  
> Atualiza os dados de uma tarefa.  

---

### **5. Deletar uma tarefa**  
**DELETE :: `/tasks/:id`**  
> Remove uma tarefa do banco de dados.  

---

## **Metodologia TDD**  
O projeto foi desenvolvido utilizando **TDD (Test-Driven Development)**, garantindo que todas as funcionalidades sejam guiadas por testes automatizados.  

### **Ciclo TDD aplicado no projeto**:  
1. Escreva um teste que falhe para a funcionalidade desejada.  
2. Implemente o código para passar no teste.  
3. Refatore o código mantendo os testes aprovados.  

Os testes de integração cobrem as rotas principais e garantem a estabilidade do sistema.  

---

## **Testes Automatizados**  
Os testes automatizados estão localizados na pasta `__tests__/integration` e cobrem todos os cenários principais das rotas de tarefas.  

### **Executando os testes**  
```bash
npm test
```

---

## **Contribuições**  
Contribuições são bem-vindas!  
1. Faça um fork do repositório.  
2. Crie uma nova branch (`git checkout -b feature/minha-feature`).  
3. Faça suas alterações e commit (`git commit -m 'Adiciona nova feature'`).  
4. Envie um pull request para revisão.  

---

## **Licença**  
Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.

--- 
