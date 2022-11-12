export class Product {
    private __id!: string;
    private _name!: string;
    private _description!: string;
    private _category!: string;
    private _benefits!: string[];
    private _price!: number;
    private _quantity!: number;
    private _images!: string[];
    private _width!: number;
    private _heigth!: number;
    private _depth!: number;
    private _weight!: number;
    private _insuredCost!: number;



    constructor() {
        this.images = [""];        
    }

    public get insuredCost(): number {
        return this._insuredCost;
    }
    public set insuredCost(value: number) {
        this._insuredCost = value;
    }

    public get weight(): number {
        return this._weight;
    }
    public set weight(value: number) {
        this._weight = value;
    }

    public get depth(): number {
        return this._depth;
    }
    public set depth(value: number) {
        this._depth = value;
    }

    public get heigth(): number {
        return this._heigth;
    }
    public set heigth(value: number) {
        this._heigth = value;
    }

    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }

    public get _id(): string {
        return this.__id;
    }
    public set _id(value: string) {
        this.__id = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }


    public get category(): string {
        return this._category;
    }
    public set category(value: string) {
        this._category = value;
    }

    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }

    public get quantity(): number {
        return this._quantity;
    }
    public set quantity(value: number) {
        this._quantity = value;
    }

    public getImage(index: number): string {
        return this._images[index];
    }
    public setImage(value: string) {
        this._images.push(value);
    }

    public get images(): string[] {
        return this._images;
    }
    public set images(value: string[]) {
        this._images = value;
    }

    public get benefits(): string[] {
        return this._benefits;
    }
    public set benefits(value: string[]) {
        this._benefits = value;
    }

}