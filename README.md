# 🚀 Introdução a Node.js e Express (API de Usuários)

Este é o meu primeiro projeto de backend, desenvolvido para aprender os fundamentos de uma **API RESTful**, utilizando o padrão de arquitetura **MVC** (Model-View-Controller) e persistência de dados em memória.

## 📋 Sobre o Projeto
O projeto consiste em um sistema de gerenciamento de usuários onde é possível criar, listar, atualizar e excluir registros (CRUD). O foco principal foi entender como o fluxo de uma requisição funciona, desde a rota até a manipulação dos dados no modelo.

## 🛠️ Tecnologias Utilizadas
* **Node.js**: Ambiente de execução Javascript.
* **Express.js**: Framework para construção de rotas e APIs.
* **MVC**: Padrão de organização para separar responsabilidades (Rotas, Controladores e Modelos).

## 📁 Estrutura de Pastas
```text
├── controllers/
│   └── UsuariosController.js  # Gerencia a lógica e as respostas HTTP
├── models/
│   └── UsuarioModel.js       # Gerencia os dados (Simulação de Banco de Dados)
├── rotas/
│   └── UsuarioRotas.js       # Define os caminhos (endpoints) da API
├── server.js                 # Arquivo principal que inicia o servidor
├── package.json              # Manifesto do projeto e dependências
└── README.md                 # Documentação do projeto.
```

## 🚀 Como Executar o Projeto
* **1**: Clone o repositório ou baixe os arquivos.
* **2**: Instale as dependências.
npm install
* **3**: Inicie o servidor.
npm start

| Método | Rotas | Descrição| JSON|
| :--- | :---: | ---: | ---: |
| GET | /usuarios | Lista todos os usuários. | N/A |
| GET | /usuarios/1 | Lista usuários expecífico. | N/A |
| POST | /usuarios | Cadastra um novo usuário. | {"nome": "Dev", "email": "dev@teste.com"} |
| put | /usuarios/:id | Atualiza os dados de um usuário. | {"nome": "Nome Atualizado", email": "email@atualizado.com"} |
| GET | /usuarios/:id | Remove um usuário. | N/A |