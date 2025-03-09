import {useEffect, useState} from "react";
import {DetallesYokaiInterface} from "../../../../domain/entities/Yokai";
import {YokaiByRangoUseCase} from "../../../../domain/useCases/yokai/YokaiUseCase";

export const YokaiRangosViewModel = (idRango: number) => {
    const [yokais, setYokais] = useState<DetallesYokaiInterface[]>([]);

    const getYokais = async (idRango: number) => {
        try {
            const response = await YokaiByRangoUseCase(idRango);
            setYokais(response);
        } catch (error) {
            console.error("Error fetching Yokais:", error);
        }
    };

    return {
        yokais,
        getYokais,
    };
};
