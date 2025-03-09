import { YokaiRepositoryImpl } from "../../../data/repositories/YokaiRepository";
import { YokaiRepository } from "../../repositories/YokaiRepository";
import { ApiDeliveryResponse } from "../../../data/sources/remote/models/ResponseApiDelivery";
import { DetallesYokaiInterface } from "../../../domain/entities/Yokai";

const {getAllYokais} = new YokaiRepositoryImpl();
const {getAllTribus} = new YokaiRepositoryImpl();
const {getAllElementos} = new YokaiRepositoryImpl();
const {getAllRangos} = new YokaiRepositoryImpl();
const {getAllDatosCombate} = new YokaiRepositoryImpl();
const { getYokaiByTribu } = new YokaiRepositoryImpl();
const { getYokaiByRango } = new YokaiRepositoryImpl();
const { getYokaiByElemento } = new YokaiRepositoryImpl();

export const YokaiUseCase = async () => {
    return await getAllYokais();
}

export const TribusUseCase = async () => {
    return await getAllTribus();
}

export const ElementosUseCase = async () => {
    return await getAllElementos();
}

export const RangosUseCase = async () => {
    return await getAllRangos();
}

export const DatosCombateUseCase = async () => {
    return await getAllDatosCombate();
}

export const YokaiByTribuUseCase = async (idTribu: number) => {
    return await getYokaiByTribu(idTribu);
};

export const YokaiByRangoUseCase = async (idRango: number) => {
    return await getYokaiByRango(idRango);
};

export const YokaiByElementoUseCase = async (idElemento: number) => {
    return await getYokaiByElemento(idElemento);
};