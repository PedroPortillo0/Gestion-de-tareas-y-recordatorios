"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dependencyInyection_1 = require("../dependencyInyection");
const userRouter = (0, express_1.Router)();
userRouter.post('/create', (req, res) => {
    dependencyInyection_1.createUserController.handle(req, res);
});
exports.default = userRouter;
