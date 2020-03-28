# Be The Hero

Projeto desenvolvido na Semana OmniStack 11.0, disponibilizada pela [Rocketseat](https://rocketseat.com.br/).

### Objetivo

Aprender e praticar as tecnologias NodeJS, React, React Native e o seu 'ecossistema'.

### Tecnologias

Utilizamos Javascript para desenvolver todo o projeto, desde o back-end, front-end até o aplicativo mobile (IOS e Android).

#### Como isso foi possível?

#### Back-end

Utilizando NodeJS como *runtime built*, desenvolvemos todas as funcionalidades, regras e recursos necessários.

SQLite como banco de dados trouxe uma grande facilidade de configuração para o projeto, e atendeu a necessidade para os objetivos do projeto. 

[Knex](http://knexjs.org/) foi utilizado para a integração e gerenciamento entre o banco de dados e a aplicação back-end.

[Express](https://expressjs.com/pt-br/) foi utilizado como *framework* da aplicação, gerenciando as rotas e recursos.

[Celebrate](https://github.com/arb/celebrate) foi utilizado como *middleware* para validar os parametros recebidos através da API, e também retornar possíveis erros de uma forma padronizada.

[Jest](https://jestjs.io/) e [SuperTest](https://github.com/visionmedia/supertest) foram utilizados em conjunto para criar alguns casos de testes para a aplicação.

#### Front-end

[React](https://pt-br.reactjs.org/) foi utilizado, de uma formal geral, como responsavel pela renderização da UI e o comportamento como uma SPA.

[Axios](https://github.com/axios/axios) foi utilizado para executar as *requests* para a aplicação do back-end (API).

[React Router](https://reacttraining.com/react-router/web/guides/quick-start) foi utilizado para gerenciar as rotas e seus respectivos componentes, garantido um comportamento como SPA.

#### Mobile

[Expo](https://expo.io/), ferramenta que permitiu o desenvolvimento e emulação do aplicativo sem instalação dos *SDKs*.

[React Native](https://reactnative.dev/) foi utilizado como *framework* para o desenvolvimento, e permite gerar as versões IOS e Android do aplicativo.

[Axios](https://github.com/axios/axios) foi utilizado para executar as *requests* para a aplicação do back-end (API), sim o mesmo Axios do front-end.

[React Navigation](https://reactnavigation.org/) foi utilizado para gerenciar as rotas e navegações dentro do aplicativo.

## Requerimentos para rodar o projeto

1. Instalar o [NodeJS e o NPM](https://nodejs.org/en/) em sua máquina local.
2. Na **pasta raiz** de cada prjeto (backend, frontend, mobile) execute **'npm install'**, para instalar todas as dependencias de cada um.
3. Na **pasta raiz** de cada prjeto (backend, frontend, mobile) execute **'npm start'**, para executar cada um dos projetos.

Depois de executar todas as estapas você deve ter o backend respondento em **http://localhost:3333/**, o frontend em **http://localhost:3000/**.

Já o aplicativo **mobile** irá precisar de um pouco mais de **atenção** para ser utilizado!

Ao executar o comando **npm start** na raiz do projeto **mobile**, você deve ter acesso ao **QRCode** que emulará o aplicativo em seu celular. Mas antes você deve instalar o aplicativo do **Expo** em seu celular, e este será responsável por fazer o *build* do código e rodar o mesmo em seu dispositivo.

Outro ponto de **atenção** é o arquivo **api.js**, encontrado em */mobile/src/services/api.js* que faz a **conexão** com a aplicação **backend**. Você precisa alterar este arquivo, modificando a *baseURL* do método *axios.create()* para o **IP** da sua **máquina local**, onde está executando a aplicação do **backend**.

Exemplo: 
```
const api = axios.create({
    baseURL: 'http://192.168.0.101:3333'
});
```
