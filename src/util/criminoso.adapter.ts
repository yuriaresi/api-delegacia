import { Criminoso } from "@prisma/client";
import { Criminoso as CriminosoBackend } from "../models/criminoso.model";

export function adapterCriminosoPrisma(criminoso: Criminoso): CriminosoBackend {

    const novoCriminoso = new CriminosoBackend(
        criminoso.nome,
        criminoso.cpf,
        criminoso.endereco ?? undefined,
        criminoso.idade ?? undefined);

    novoCriminoso.id = criminoso.id

    return novoCriminoso
}


