export class Asset {
    private _type!: string;
    private _src!: string;

    public get type(): string {
        return this._type;
    }
    public set type(value: string) {
        this._type = value;
    }

    public get src(): string {
        return this._src;
    }
    public set src(value: string) {
        this._src = value;
    }
}
