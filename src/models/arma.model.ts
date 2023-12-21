import { randomUUID } from "crypto"
import { Crime } from "./crime.model"

export class Arma {
    public id: string

    constructor(public crime: Crime, public nome: string, public tipo: string, public numeroDeSerie: string, public marca: string) {
        this.id = randomUUID()
    }
}