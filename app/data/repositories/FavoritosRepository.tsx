import { AxiosError } from "axios";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { FavoritosRepository } from "../../domain/repositories/FavoritosRepository";
import { FavoritosInterface } from "../../domain/entities/Favoritos";  // Importa la interfaz

export class FavoritosRepositoryImpl implements FavoritosRepository {

    async addFavoritos(userId: number, yokaiId: number): Promise<FavoritosInterface> {
        try {
            const response = await ApiDelivery.post("/favoritos/add", null, {
                params: { userId, yokaiId }
            });
            return Promise.resolve(response.data);
        } catch (error) {
            let e = error as AxiosError;
            console.log("Error al agregar favorito: " + JSON.stringify(e.response?.data));
            return Promise.reject(e.response?.data);
        }
    }

    async getAllFavoritos(): Promise<FavoritosInterface[]> {
        try {
            const response = await ApiDelivery.get("/favoritos/all");
            return Promise.resolve(response.data);
        } catch (error) {
            let e = error as AxiosError;
            console.log("Error al obtener favoritos: " + JSON.stringify(e.response?.data));
            return Promise.reject(e.response?.data);
        }
    }

    async getFavoritosByUserId(userId: number): Promise<FavoritosInterface[]> {
        try {
            const response = await ApiDelivery.get(`/favoritos/user/${userId}`);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = error as AxiosError;
            console.log("Error al obtener favoritos por usuario: " + JSON.stringify(e.response?.data));
            return Promise.reject(e.response?.data);
        }
    }

    async deleteFavoritos(userId: number, yokaiId: number): Promise<void> {
        try {
            await ApiDelivery.delete("/favoritos/delete", {
                params: { userId, yokaiId }
            });
            return Promise.resolve();
        } catch (error) {
            let e = error as AxiosError;
            console.log("Error al eliminar favorito: " + JSON.stringify(e.response?.data));
            return Promise.reject(e.response?.data);
        }
    }
}
