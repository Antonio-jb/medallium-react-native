import React, { memo } from 'react';
import {ElementosInterface, TribusInterface} from "../../../domain/entities/Yokai";
import CardTribu from "../../componentes/CardTribu";
import CardElemento from "../../componentes/CardElemento";

interface Props{
    item: ElementosInterface;
    index: number;
}

const RenderElementos = ({ item, index }: Props) => {
    return (
        <CardElemento
            id_elementos={index}
            nombre={item.nombre}
            descripcion={item.descripcion}
            image={{uri: item.image}}
            item={item}
        />
    );
};

//memo memoriza la salida renderizada y evita renderizaciones innecesarias.
export default memo(RenderElementos);
