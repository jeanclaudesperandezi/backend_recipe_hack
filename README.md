# API Documentation

Bienvenue dans l'API de gestion des utilisateurs. Cette API permet de gérer les utilisateurs et les recettes pour une application de cuisine.

### URL de Base
(https://backend-recipe-hack.onrender.com)
https://localhost:3000/auth
https://localhost:3000/recettes

### Format des Réponses
- **Format** : JSON
- **En-tête obligatoire** :
  - `Content-Type: application/json`
  - `Authorization: Bearer <token>`

### Authentification
- Utilisez un jeton JWT. Pour obtenir un jeton, connectez-vous via l'endpoint `/login`.

- ## Endpoints

- **Utilisateur**
  - `POST /register` : Inscription d'un nouvel utilisateur.
  - `POST /login` : Authentification et génération d'un token JWT.
- **Recette**
  - `GET /recipes` : Récupère toutes les recettes.
  - `POST /recipes` : Crée une nouvelle recette.
  - `GET /recipes/:id` : Récupère une recette par son ID.
  - `PUT /recipes/:id` : Met à jour une recette.
  - `DELETE /recipes/:id` : Supprime une recette.
 - ** modelisation de la base de donnee**
    {
  "name": "string",
  "email": "string",
  "password": "string"

},

  {

    "titre": "string",
    "image": "string",
    "description": "string",
    "id_utilisateur": 
  },
 







