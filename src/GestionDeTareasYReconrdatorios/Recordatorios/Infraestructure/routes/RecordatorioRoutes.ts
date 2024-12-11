import { Router } from 'express';
import { createRecordatorioController } from '../dependencyInyeccion';

const router = Router();

router.post('/recordatorios', async (req, res) => {
  await createRecordatorioController.handle(req, res);
});

export default router;