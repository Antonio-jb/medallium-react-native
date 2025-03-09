import { useState, useEffect } from "react";
import { AddFavoritosUseCase, GetFavoritosByUserIdUseCase, DeleteFavoritosUseCase } from "../../../domain/useCases/favoritos/FavoritosUseCase";
import { FavoritosInterface } from "../../../domain/entities/Favoritos";

const FavoritosViewModel = () => {
    const [favoritos, setFavoritos] = useState<FavoritosInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getFavoritos = async (userId: number) => {
        setLoading(true);
        try {
            const response = await GetFavoritosByUserIdUseCase(userId);
            setFavoritos(response);
        } catch (error) {
            console.error("Error fetching favoritos:", error);
        }
        setLoading(false);
    };

    const addFavorito = async (userId: number, yokaiId: number) => {
        setLoading(true);
        try {
            const response = await AddFavoritosUseCase(userId, yokaiId);
            setFavoritos((prevFavoritos) => [...prevFavoritos, response]); // Si response es un solo favorito, lo agregamos al array
        } catch (error) {
            console.error("Error adding favorito:", error);
        }
        setLoading(false);
    };

    const deleteFavorito = async (userId: number, yokaiId: number) => {
        setLoading(true);
        try {
            await DeleteFavoritosUseCase(userId, yokaiId);
            setFavoritos((prevFavoritos) =>
                prevFavoritos.filter((fav) => fav.yokai.yokai.id_Yokai !== yokaiId)
            );
        } catch (error) {
            console.error("Error deleting favorito:", error);
        }
        setLoading(false);
    };

    return {
        favoritos,
        loading,
        getFavoritos,
        addFavorito,
        deleteFavorito,
    };
};

export default FavoritosViewModel;
