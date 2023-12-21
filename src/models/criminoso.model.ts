import { randomUUID } from "crypto"

export class Criminoso {
   public id: string

    constructor(public nome: string, public cpf: string,public endereco?: string, public idade?: number){
        this.id = randomUUID()
    }
}