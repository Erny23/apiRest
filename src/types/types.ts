import { Request, Response } from "express";

export type ReqRest = { 
    (req: Request, res: Response): void
};
