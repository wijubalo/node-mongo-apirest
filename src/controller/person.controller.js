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
    console.log('request', req.body);
    const entity = new Person({
        dni: req.body.dni,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });
    try {
        await entity.save();
        res.json({
            success: true,
            message: "La persona ha sido registrada con éxito",
            result: entity
        });
    } catch (error) {
        res.json({
            success: false,
            message: "Ha ocurrido un error: " + error.message,
            result: null
        });
    }    
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