import {View, Text, Image, StyleSheet} from "react-native";
import {AppColors, AppFonts} from "../themes/AppTheme";
import stylesCardTribu from "../views/tribus/StylesCardTribu";
import stylesCardElementos from "../views/elementos/StylesCardElementos";
import {ElementosInterface, RangosInterface} from "../../domain/entities/Yokai";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamlist} from "../../../App";

interface Props{
    id_elementos: number,
    nombre: string,
    descripcion: string,
    image: any,
    item: ElementosInterface,

}

const elementosColors: { [key: number]: string } = {
    0: AppColors.elementoHielo,
    1: AppColors.elementoViento,
    2: AppColors.elementoRelampago,
    3: AppColors.elementoAbsorcion,
    4: AppColors.elementoSanacion,
    5: AppColors.elementoAgua,
    6: AppColors.elementoFuego,
    7: AppColors.elementoTierra,
};

const CardElemento = ({id_elementos, nombre, descripcion, image, item} : Props) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamlist>>();
    const borderColor = elementosColors[id_elementos] || '#000000'

    return(
        <View style={[stylesCardElementos.card, { borderColor }]}>
            <View style={stylesCardTribu.containerNombre}>
                <Text style={stylesCardElementos.nombre}>{nombre}</Text>
            </View>
            <View style={stylesCardElementos.logo}>
                <Image source={image} style={{width:65, height:45, resizeMode:"contain"}} />
            </View>
            <View>
                <Text style={stylesCardElementos.descripcion}>{descripcion}</Text>
            </View>
            <View>
                <Text style={stylesCardElementos.textVerYokais} onPress={() => navigation.navigate("YokaiElementos", { idElemento: item?.id_Elemento })}>Ver Yo-kais de este elemento</Text>
            </View>
        </View>
    )
}

export default CardElemento;