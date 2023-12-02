"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = require("body-parser");
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use((0, cors_1.default)({ origin: true }));
app.get("/", function (req, res) {
    res.send("Server is connected !!!");
});
const port = 3000;
app.listen(port, () => {
    console.log("Server is listening on port 3000");
});
exports.default = app;
