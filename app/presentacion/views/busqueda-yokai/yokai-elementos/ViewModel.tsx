import {useEffect, useState} from "react";
import {DetallesYokaiInterface} from "../../../../domain/entities/Yokai";
import {YokaiByElementoUseCase, YokaiByRangoUseCase} from "../../../../domain/useCases/yokai/YokaiUseCase";

export const YokaiElementosViewModel = (idElemento: number) => {
    const [yokais, setYokais] = useState<DetallesYokaiInterface[]>([]);

    const getYokais = async (idElemento: number) => {
        try {
            const response = await YokaiByElementoUseCase(idElemento);
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
