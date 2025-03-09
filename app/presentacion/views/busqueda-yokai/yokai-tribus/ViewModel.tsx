import React, { useState, useEffect } from "react";
import {DetallesYokaiInterface} from "../../../../domain/entities/Yokai";
import {YokaiByTribuUseCase} from "../../../../domain/useCases/yokai/YokaiUseCase";

export const YokaiTribuViewModel = (idTribu: number) => {
    const [yokais, setYokais] = useState<DetallesYokaiInterface[]>([]);

    const getYokais = async (idTribu: number) => {
        try {
            const response = await YokaiByTribuUseCase(idTribu);
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
