"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.configDotenv)();
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.json("hello");
});
console.log(process.env.PORT);
app.listen(process.env.PORT, () => console.log(`Listening at PORT: https://localhost:${process.env.PORT}`));
