import { Router } from 'express';
import { createUserController } from '../dependencyInyection';

const userRouter = Router();

userRouter.post('/create', (req, res) => {
    createUserController.handle(req, res);
});

export default userRouter;