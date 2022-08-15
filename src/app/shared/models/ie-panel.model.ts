import { Observable } from "rxjs";

export interface InputsData {
    intervals: number;
    emissions: number;
}

export interface Obs {
    mergeMapObs$: Observable<any>;
    switchMapObs$: Observable<any>;
    concatmapObs$: Observable<any>;
}
