import { AxiosError } from "axios";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import {YokaiRepository} from "../../domain/repositories/YokaiRepository";
import {
    DetallesYokaiInterface,
    TribusInterface,
    ElementosInterface,
    DatosCombateInterface, RangosInterface
} from "../../domain/entities/Yokai";

export class YokaiRepositoryImpl implements YokaiRepository{
    async getAllYokais(): Promise<DetallesYokaiInterface[]> {
        try {
            const response = await ApiDelivery.get("/detalles/get-detallesYokai");

            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log("Error: " + JSON.stringify(e.response?.data));
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)));
        }
    }

    async getAllTribus(): Promise<TribusInterface[]> {
        try {
            const response = await ApiDelivery.get("/tribus/get-tribus");
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log("Error: " + JSON.stringify(e.response?.data));
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)));
        }
    }

    async getAllElementos(): Promise<ElementosInterface[]> {
        try {
            const response = await ApiDelivery.get("/elemento/get-all-elementos");
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log("Error: " + JSON.stringify(e.response?.data));
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)));
        }
    }

    async getAllRangos(): Promise<RangosInterface[]> {
        try {
            const response = await ApiDelivery.get("/rango/get-rango");
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log("Error: " + JSON.stringify(e.response?.data));
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)));
        }
    }

    async getAllDatosCombate(): Promise<DatosCombateInterface[]>{
        try {
            const response = await ApiDelivery.get("/datosCombate/get-tDatosCombate");
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log("Error: " + JSON.stringify(e.response?.data));
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)));
        }
    }

    async getYokaiByTribu(idTribu: number): Promise<DetallesYokaiInterface[]> {
        try {
            const response = await ApiDelivery.get(`/detalles/getByTribu/${idTribu}`);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = error as AxiosError;
            console.log("Error: " + JSON.stringify(e.response?.data));
            return Promise.reject(e.response?.data);
        }
    }
    async getYokaiByRango(idRango: number): Promise<DetallesYokaiInterface[]> {
        try {
            const response = await ApiDelivery.get(`/detalles/getByRango/${idRango}`);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = error as AxiosError;
            console.log("Error: " + JSON.stringify(e.response?.data));
            return Promise.reject(e.response?.data);
        }
    }
    async getYokaiByElemento(idElemento: number): Promise<DetallesYokaiInterface[]> {
        try {
            const response = await ApiDelivery.get(`/detalles/getByElemento/${idElemento}`);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = error as AxiosError;
            console.log("Error: " + JSON.stringify(e.response?.data));
            return Promise.reject(e.response?.data);
        }
    }

}
