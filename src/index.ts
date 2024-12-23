import express from 'express';
import userRoutes from './user/Infraestructure/Routes/userRoutes';
import tareaRoutes from './GestionDeTareasYReconrdatorios/Tareas/Infraestructure/routes/TareaRoutes';
import recordatorioRoutes from './GestionDeTareasYReconrdatorios/Recordatorios/Infraestructure/routes/RecordatorioRoutes';
import createConnection from './_config/mysql.config';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/tareas', tareaRoutes);
app.use('/api/v1/recordatorios', recordatorioRoutes);

// Verificar la conexión a la base de datos
createConnection()
  .then(() => {
    console.log('Conexión a la base de datos establecida exitosamente');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});