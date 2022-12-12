"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGO_URL = void 0;
exports.MONGO_URL = process.env.DB_CONN_STRING || 'mongodb://localhost:27017';
