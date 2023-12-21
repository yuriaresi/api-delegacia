import { error } from "console";
import { Request, Response } from "express";

export function erroServidor(res: Response, error:any){
    return res.status(500).send(
        {ok:false,
        message: error.toString()}
    )
}