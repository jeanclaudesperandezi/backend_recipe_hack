import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createRecette = async (req, res) => {
  try {
    const { titre, image, description, id_utilisateur } = req.body;

    const recette = await prisma.recette.create({
      data: { titre, image, description, id_utilisateur },
    });

    res.status(201).json({ message: 'Recette créée avec succès', recette });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de la recette', error: error.message });
  }
};

export const getAllRecettes = async (req, res) => {
  try {
    const recettes = await prisma.recette.findMany({
      include: { utilisateur: true }, // Inclut les informations de l'utilisateur lié
    });

    res.status(200).json(recettes);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des recettes', error: error.message });
  }
};

export const getRecetteById = async (req, res) => {
  try {
    const { id } = req.params;

    const recette = await prisma.recette.findUnique({
      where: { id_recette: Number(id) },
      include: { utilisateur: true },
    });

    if (!recette) {
      return res.status(404).json({ message: 'Recette non trouvée' });
    }

    res.status(200).json(recette);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération de la recette', error: error.message });
  }
};

export const updateRecette = async (req, res) => {
  try {
    const { id } = req.params;
    const { titre, image, description } = req.body;

    const recette = await prisma.recette.update({
      where: { id_recette: Number(id) },
      data: { titre, image, description },
    });

    res.status(200).json({ message: 'Recette mise à jour avec succès', recette });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour de la recette', error: error.message });
  }
};

export const deleteRecette = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.recette.delete({
      where: { id_recette: Number(id) },
    });

    res.status(200).json({ message: 'Recette supprimée avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression de la recette', error: error.message });
  }
};
