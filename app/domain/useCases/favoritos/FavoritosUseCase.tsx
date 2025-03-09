import { FavoritosRepositoryImpl } from "../../../data/repositories/FavoritosRepository";

const { addFavoritos } = new FavoritosRepositoryImpl();
const { getAllFavoritos } = new FavoritosRepositoryImpl();
const { getFavoritosByUserId } = new FavoritosRepositoryImpl();
const { deleteFavoritos } = new FavoritosRepositoryImpl();

export const AddFavoritosUseCase = async (userId: number, yokaiId: number) => {
    return await addFavoritos(userId, yokaiId);
};

export const GetAllFavoritosUseCase = async () => {
    return await getAllFavoritos();
};

export const GetFavoritosByUserIdUseCase = async (userId: number) => {
    return await getFavoritosByUserId(userId);
};

export const DeleteFavoritosUseCase = async (userId: number, yokaiId: number) => {
    return await deleteFavoritos(userId, yokaiId);
};
