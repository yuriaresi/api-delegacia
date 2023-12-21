import { Request, Response } from "express";
import { Criminoso } from "../models/criminoso.model";
import { PrismaClient } from "@prisma/client";
import { erroServidor } from "./response.helper";
const repository = new PrismaClient()

export class CriminosoController {
    public async cadastrarCriminoso(req: Request, res: Response) {
        try {
            //1- entrada

            const { nome, cpf, endereco, idade } = req.body
            if (!nome || !cpf || !endereco) {
                return res.status(400).send({
                    ok: false,
                    messagem: "Os campos obrigatorios não foram informados."
                })
            }

            //2- processamento

            const criminoso = new Criminoso(nome, cpf, endereco, idade)
            const result = await repository.criminoso.create({ data: criminoso })

            //3- saida
            return res.status(201).send({
                ok: true,
                message: 'Criminoso Cadastrado com sucesso.',
                data: result
            })



        } catch (error: any) {
            return erroServidor(res, error)
        }

    }

    public async listarCriminosos(req: Request, res: Response) {
        try {
            const result = await repository.criminoso.findMany()
            if (result.length === 0) {
                return res.status(404).send(
                    {
                        ok: false,
                        mesage: 'Nenhum criminoso cadastrado.'
                    }
                )
            }

            return res.status(201).send({
                ok: true,
                data: result
            })
        } catch (error: any) { return erroServidor(res, error) }
    }

    public async buscarCriminoso(req: Request, res: Response) {
        try {
            const { id } = req.params

            const result = await repository.criminoso.findFirst(
                {
                    where: { id },
                    include: { crime: true }
                }
            )

            if (!result) {
                return res.status(404).send(
                    {
                        ok: false,
                        mesage: 'Nenhum criminoso encontrado.'
                    }
                )
            }

            return res.status(201).send(
                {
                    ok: true,
                    data: result
                }
            )
        } catch (error: any) { return erroServidor(res, error) }


    }
}