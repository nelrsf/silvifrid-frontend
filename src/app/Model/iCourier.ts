import { productQuantity } from "./cart";

export interface ICourier {
    productQuantities: productQuantity[],
    cityId: number
}