import { Request, Response, request, response } from "express";
import { erroServidor } from "./response.helper";
import { PrismaClient } from "@prisma/client";
import repository from "../database/prisma.ripository";


export class CrimeController {
    public async CadastrarCrime(req: Request, res: Response) {
        try {
            //1- entrada
            const { id } = req.params
            const { nome, data, local, tipoDoCrime, descricao } = req.body

            if (!nome || !data || !local || !tipoDoCrime || !descricao) {
                return res.status(400).send(
                    {
                        ok: false,
                        message: 'Preencha todos os campos.'
                    }
                )
            }


            //2- processamento
            const aluno = await repository.criminoso.findFirst(
                { where: { id } }
            )
            if (!aluno) {
                return res.status(404).send({
                    ok: false,
                    message: 'Criminoso não encontrado'
                })
            }


            //3- saida
        } catch (error: any) { return erroServidor(res, error) }
    }
}