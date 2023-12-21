import { randomUUID } from "crypto"
import { Criminoso } from "./criminoso.model"

export class Crime {
    public id: string

    constructor(public criminoso: Criminoso,
        public data: string,
        public local: string,
        public tipoDoCrime: string,
        public descricao: string) {
        this.id = randomUUID()
    }
}