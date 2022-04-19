import express from "express";
import {
  createCars,
  deleteCars,
  getCars,
  getCarsById,
  updateCars,
} from "../Controllers/carController.js";
const router = express.Router();

router.get("/cars", getCars),
  router.get("/cars/:id", getCarsById),
  router.post("/cars/", createCars),
  router.put("/cars/:id", updateCars),
  router.delete("/cars/:id", deleteCars);

export default router;
