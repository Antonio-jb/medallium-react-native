import {
    DatosCombateInterface,
    DetallesYokaiInterface,
    ElementosInterface, RangosInterface,
    TribusInterface,
} from "../entities/Yokai";


export interface YokaiRepository {
    getAllYokais: () => Promise<DetallesYokaiInterface[]>;
    getAllTribus: () => Promise<TribusInterface[]>;
    getAllElementos: () => Promise<ElementosInterface[]>;
    getAllRangos: () => Promise<RangosInterface[]>;
    getAllDatosCombate: () => Promise<DatosCombateInterface[]>;
    getYokaiByTribu: (idTribu: number) => Promise<DetallesYokaiInterface[]>;
    getYokaiByRango: (idRango: number) => Promise<DetallesYokaiInterface[]>;
    getYokaiByElemento: (idElemento: number) => Promise<DetallesYokaiInterface[]>;

}