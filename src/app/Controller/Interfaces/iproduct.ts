import { Observable } from "rxjs";

export interface IProduct {
    getAllProducts: () => Observable<Object>;
    getProductByID: (id: string) => Observable<Object>;
}
