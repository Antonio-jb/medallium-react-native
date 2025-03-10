import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CardYoKai } from '../../componentes/CardYoKai';
import { DetallesYokaiInterface } from '../../../domain/entities/Yokai';
import { RootStackParamlist } from '../../../../App';
import YokaiViewModel from "./ViewModel";

interface Props{
    item: DetallesYokaiInterface;
}

const RenderYokai = ({ item }: Props) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamlist>>();
    const { favorites, toggleFavorite } = YokaiViewModel();
    const isFavorite = favorites[item.yokai.id_Yokai];

    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate("DetailYoKai", {yokai: item});
        }}>
            <CardYoKai
                id_Tribu={item.yokai.tribu.id_Tribu}
                nombre={item.yokai.name}
                nombreJapones={item.nombreJapo}
                iconHeart={isFavorite
                    ? require("../../../../assets/Heart.png")
                    : require("../../../../assets/heartw.png")
                }
                imagenYoKai={{ uri: item.image }}
                iconTribu={{uri: item.yokai.tribu.imagenPixel}}
                iconElemento={{uri: item.yokai.elemento.image}}
                iconRango={{uri: item.yokai.rango.image}}
                onPressHeart={() => toggleFavorite(item.yokai.id_Yokai)}
            />
        </TouchableOpacity>
    );
};

//memo memoriza la salida renderizada y evita renderizaciones innecesarias.
export default memo(RenderYokai);
