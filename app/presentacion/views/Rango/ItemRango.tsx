import React, { memo } from 'react';
import {RangosInterface} from '../../../domain/entities/Yokai';
import {CardRango} from "../../componentes/CardRango";

interface Props{
    item: RangosInterface;
}

const RenderRangos = ({ item }: Props) => {
        return (
            <CardRango
                id_Rango={item.id_Rango}
                rango={item.name}
                imagenRango={{uri: item.image}}
                descripcion={item.descripcion}
                caracteristicas={item.caracteristicasGenerales}
                tipoBonus={item.tipoBonus}
                item={item}
            />
    );
};

//memo memoriza la salida renderizada y evita renderizaciones innecesarias.
export default memo(RenderRangos);
