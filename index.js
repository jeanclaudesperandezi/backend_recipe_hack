import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes.js';
import recetteRoutes from './routes/recetteRoutes.js'

dotenv.config();

const app = express();


app.use(bodyParser.json());


app.use('/auth', authRoutes);
app.use('/recettes', recetteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
