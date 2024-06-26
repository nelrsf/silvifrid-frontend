import { Product } from "./product";
import { User } from "./user";


export interface productQuantity {
    product: Product,
    quantity: number
}

export class Cart {
    private _products!: productQuantity[];
    private _user!: User;

    constructor() {
        this.products = [];
    }

    public get user(): User {
        return this._user;
    }
    public set user(value: User) {
        this._user = value;
    }

    public get products(): productQuantity[] {
        return this._products;
    }
    public set products(value: productQuantity[]) {
        this._products = value;
    }

    public addProduct(product: productQuantity) {
        this.products.push(product);
        this.groupProducts();
    }

    public clearCart() {
        this.products = [];
    }

    groupProducts() {
        this.sortProducts();
        let arrayQuantitys: productQuantity[] = [];
        let count = 0;
        this.products.reduce<productQuantity>((pv, cv, index, arrP) => {
            let cvOnArraQty = arrayQuantitys.find(
                aq => {
                    return aq.product._id === cv.product._id;
                });
            if (!cvOnArraQty) {
                arrayQuantitys.push(cv);
            } else {
                cvOnArraQty.quantity += cv.quantity;
            }
            return cv;
        }, {
            product: new Product(),
            quantity: 0
        });
        this.products = arrayQuantitys;
    }

    sortProducts() {
        this.products.sort((a, b) => {
            if (a.product._id < b.product._id) {
                return -1;
            }
            if (a.product._id > b.product._id) {
                return 1;
            }
            return 0;
        })
    }

    getTotalQuantity() {
        let totalQuantity = 0;
        this.products.forEach(prodQ => {
            if (isNaN(prodQ.quantity)) {
                totalQuantity += prodQ.quantity;
            }
        });
        return totalQuantity;
    }

    getTotalPrice() {
        let totalPrice = 0;
        this.products.forEach(prodQ => {
            if (!isNaN(prodQ.quantity)) {
                totalPrice += prodQ.quantity * prodQ.product.price;
            }
        });
        return totalPrice;
    }
}