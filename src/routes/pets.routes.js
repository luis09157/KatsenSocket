import { Router } from "express";
import { join, dirname } from "path";
import __dirname from '../dir.js';
import { validateCreate } from "../validators/VPets.js";

import { methods as petController } from "./../controllers/pet.controller.js";

const router = Router();    

router.get('/api/newPet', (req, res) => {
    res.render(join( __dirname + '/views/Admin/Pet/newPet.ejs'));
})
router.get('/api/detailPet/:id', (req, res) => {
    res.render(join( __dirname + '/views/Admin/Pet/detailPet.ejs'));
})
router.get('/api/navbar', (req, res) => {
    res.render(join( __dirname + '/views/NavBar/nav.ejs'));
})
router.get('/formulario', (req, res) => {
    res.render(join( __dirname + '/views/Admin/Pet/formulario.ejs'));
})

router.post("/api/pet", validateCreate ,  petController.addPet);
router.put("/api/pet/:id", petController.updatePet);
router.delete("/api/pet/:id", petController.deletePet);
router.get("/api/pet", petController.getPets);
router.get("/api/pet/:id", petController.getPet);


export default router;
