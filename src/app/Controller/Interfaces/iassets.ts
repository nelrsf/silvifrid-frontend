import { Observable } from "rxjs";

export interface Iassets {
    getAllAssets: ()=>Observable<Object>;
    getAssetByID: (id:string)=>Observable<Object>;
}
