import { Router } from "express";
import Person from "../model/Person";

const personController = Router();

/**
 * Obtiene la lista de personas
 */
personController.get('/', (req, res) => {
    res.json({
        success: true,
        message: "Hello Person!",
        result: []
    })
});

/**
 * Obtiene una persona por dni
 */
personController.get('/:dni', (req, res) => {
    res.json({
        success: true,
        message: "Hello Person!",
        result: []
    })
});

/**
 * Guarda una persona
 */
personController.post("/", async (req, res) => {
    console.log(req);
    const entity = new Person({
        firstName: "",
        lastName: ""
    });
    await entity.save();
    console.log(entity);
    res.json({
        success: true,
        message: "Hello Person!",
        result: null
    });
});

/**
 * Actualiza una persona
 */
personController.put('/:dni', (req, res) => {

});

/**
 * Elimina una persona
 */
personController.delete('/:dni', (req, res) => {

});

export default personController;