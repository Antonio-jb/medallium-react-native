
import { FavoritosInterface } from "../entities/Favoritos";

export interface FavoritosRepository {
    addFavoritos(userId: number, yokaiId: number): Promise<FavoritosInterface>;

    getAllFavoritos(): Promise<FavoritosInterface[]>;

    getFavoritosByUserId(userId: number): Promise<FavoritosInterface[]>;

    deleteFavoritos(userId: number, yokaiId: number): Promise<void>;
}
