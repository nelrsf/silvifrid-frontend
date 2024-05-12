export class Product {
    private __id!: string;
    private _nombre!: string;
    private _descripcion!: string;
    private _categoria!: string;
    private _beneficios!: string[];
    private _precio!: number;
    private _cantidad!: number;
    private _imagenes!: string[];
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
        return this._nombre;
    }
    public set name(value: string) {
        this._nombre = value;
    }

    public get description(): string {
        return this._descripcion;
    }
    public set description(value: string) {
        this._descripcion = value;
    }


    public get category(): string {
        return this._categoria;
    }
    public set category(value: string) {
        this._categoria = value;
    }

    public get price(): number {
        return this._precio;
    }
    public set price(value: number) {
        this._precio = value;
    }

    public get quantity(): number {
        return this._cantidad;
    }
    public set quantity(value: number) {
        this._cantidad = value;
    }

    public getImage(index: number): string {
        return this._imagenes[index];
    }
    public setImage(value: string) {
        this._imagenes.push(value);
    }

    public get images(): string[] {
        return this._imagenes;
    }
    public set images(value: string[]) {
        this._imagenes = value;
    }

    public get benefits(): string[] {
        return this._beneficios;
    }
    public set benefits(value: string[]) {
        this._beneficios = value;
    }

}