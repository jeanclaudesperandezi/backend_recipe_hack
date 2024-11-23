import express from 'express';
import {
  createRecette,
  getAllRecettes,
  getRecetteById,
  updateRecette,
  deleteRecette,
} from '../controllers/recetteController.js';

const router = express.Router();

router.post('/', createRecette); 

router.get('/', getAllRecettes); 

router.get('/:id', getRecetteById); 

router.put('/:id', updateRecette); 

router.delete('/:id', deleteRecette); 

export default router;
