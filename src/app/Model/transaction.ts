import { productQuantity } from "./cart";

export class Transaction {
    _id!: string;
    dirección!: {
        ciudad: string,
        dirección: string,
        adicional: string
    };
    divisa!: string;
    total!: number;
    productos!: Array<productQuantity>;
    telefono!: string;
    nombre!: string;
    hash!: string;
    costoEnvio!: ICourierCost;
}

export interface ICourierCost { value: number, signature: string, city: number };
