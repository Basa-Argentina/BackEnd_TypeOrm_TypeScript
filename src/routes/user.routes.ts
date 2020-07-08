import { Router } from "express";

import { getPersonas } from '../controllers/persona.controller';
const router = Router();

import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} from "../controllers/user.controller";

router.get("/luis/users", getUsers);
router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
// Persona
router.get("/personas", getPersonas);

export default router;
