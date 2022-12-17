<div align="center">
  <a href="https://github.com/kcvdk3101">
    <img src="./dblog-logo.svg" alt="dblog-logo" width="150">
  </a>
  <h2 align="center">A blog website for developers</h2>
</div>
<br/>

# Installation

```bash
git clone https://github.com/kcvdk3101/dblog
```

# Usage

## Server
```bash
cd server
yarn start:dev
```

## Client
```bash
cd client
yarn dev
```

# Run tests

## Server
```bash
yarn test
```

## Client
```bash
yarn test:unit
```

# Environemnt variables

| KEY              | VALUE          
| -----------------|----------------|
| *DB_CONN_STRING* | `mongodb+srv://<username>:<password>@<cluster>.mongodb.net/test`
| *DB_NAME*        | `your-mongo-db-name`     
| *PORT*           | `your-port`   

# Technology Stack

### Database
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

### Backend
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![ExpressJS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![ts-node](https://img.shields.io/badge/ts--node-3178C6?style=for-the-badge&logo=ts-node&logoColor=white) ![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

### Frontend
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E) ![VueJS](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D) ![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

### Others
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white) ![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white) ![Eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)


# License
Copyright (c) 2022-2023 [Khoi Vuong](https://github.com/kcvdk3101).<br />
This project is [MIT](./LICENSE) licensed.

# References

[How to Handle Errors in Express with TypeScript](https://www.codeconcisely.com/posts/how-to-handle-errors-in-express-with-typescript/)