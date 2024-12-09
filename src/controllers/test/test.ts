import { Request, Response } from "express";

// Se define el tipo del objeto controller como un objeto que puede tener claves de tipo string
// y cuyos valores son funciones que toman Request y Response como parámetros
// y no devuelven nada (void).
interface Controller { 
    [key: string]: (req: Request, res: Response) => void
};

const controller:Controller = {};

// Dado que test es una propiedad de controller y controller implementa la interfaz Controller,
// el tipo de controller.test se deduce automáticamente
controller.test = (req, res) => {
    res.json({
        status: 200,
        success: true,
        message: "It's working!"
    });
};

export default controller;
