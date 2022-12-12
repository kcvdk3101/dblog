"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config/config");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// Connect to mongodb
mongoose_1.default.set('strictQuery', false);
mongoose_1.default
    .connect(config_1.MONGO_URL, {
    retryWrites: true,
    writeConcern: {
        w: 'majority',
    },
})
    .then((response) => {
    console.log(`[server]: Server is connected to MongoDB with HOST: ${response.connection.host}`);
})
    .catch(() => {
    console.error(`[server]: Connection between Server and MongoDB is fail`);
});
app.get('/', (req, res, next) => {
    res.send('Express + Typescript Server connected');
});
app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});