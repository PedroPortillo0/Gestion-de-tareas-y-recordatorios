import { Router } from 'express';
import { createTareaController } from '../dependencyInyeccion';

const router = Router();

router.post('/tareas', async (req, res) => {
  try {
	await createTareaController.handle(req, res);
  } catch (error) {
  if (error instanceof Error) {
    res.status(500).send(error.message);
  } else {
    res.status(500).send('An unknown error occurred');
  }
  }
});

export default router;