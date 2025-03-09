import React, { useState, useEffect } from "react";
import { DatosCombateInterface } from "../../../domain/entities/Yokai";
import { DatosCombateUseCase } from "../../../domain/useCases/yokai/YokaiUseCase";

export const DatosCombateViewModel = (idYokai: number) => {
    const [datosCombate, setDatosCombate] = useState<DatosCombateInterface[]>([]);

    const getDatosCombate = async () => {
        try {
            const response = await DatosCombateUseCase();
            // Solo se filtra los datos que coincidan con el idYokai
            const datosFiltrados = response.filter((dato: DatosCombateInterface) => dato.yokai.id_Yokai === idYokai);
            setDatosCombate(datosFiltrados);
        } catch (error) {
            console.error("Error cargando los datos combate:", error);
        }
    };

    useEffect(() => {
        getDatosCombate()
    }, [idYokai]); //Cada vez que cambia el id, se actualiza los datos combate

    return {
        datosCombate,
    };
};
