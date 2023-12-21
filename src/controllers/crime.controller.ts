import { Request, Response, request, response } from "express";
import { erroServidor } from "./response.helper";
import { PrismaClient } from "@prisma/client";
import repository from "../database/prisma.ripository";
import { Criminoso } from "../models/criminoso.model";
import { Crime } from "../models/crime.model";


export class CrimeController {
    public async CadastrarCrime(req: Request, res: Response) {
        try {
            //1- entrada
            const { id } = req.params
            const { data, local, tipoDoCrime, descricao } = req.body

            if (!data || !local || !tipoDoCrime || !descricao) {
                return res.status(400).send(
                    {
                        ok: false,
                        message: 'Preencha todos os campos.'
                    }
                )
            }


            //2- processamento
            const criminoso = await repository.criminoso.findFirst(
                { where: { id } }
            )
            if (!criminoso) {
                return res.status(404).send({
                    ok: false,
                    message: 'Criminoso não encontrado'
                })
            }

            const criminosoBackend = new Criminoso(criminoso.nome, criminoso.cpf, criminoso.endereco ?? undefined, criminoso.idade ?? undefined)

            const crime = new Crime(criminosoBackend, data, local, tipoDoCrime, descricao)

            const result = await repository.crime.create({
                data: {
                    idCriminoso: criminoso.id,
                    data: crime.data,
                    local: crime.local,
                    tipoDoCrime: crime.tipoDoCrime,
                    descricao: crime.descricao
                }
            })


            //3- saida
            return res.status(201).send({
                ok: true,
                message: 'Crime cadastrado com sucesso.',
                data: result
            })


        } catch (error: any) { return erroServidor(res, error) }
    }

    public async ListarCrimes(req: Request, res: Response) {
        try {
            const result = await repository.crime.findMany()
            if (result.length === 0) {
                return res.status(404).send(
                    {
                        ok: false,
                        message: 'Nenhum crime encontrando.'
                    }
                )
            };
            return res.status(201).send({
                ok: true,
                data: result
            })
        } catch (error: any) { return erroServidor(res, error) }
    }
}