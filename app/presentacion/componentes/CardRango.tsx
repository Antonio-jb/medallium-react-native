import {Image, StyleSheet, Text, View} from "react-native";
import {AppColors, AppFonts} from "../themes/AppTheme";
import {RangosInterface, TribusInterface} from "../../domain/entities/Yokai";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamlist} from "../../../App";

interface Props{
    rango: string;
    imagenRango: any;
    descripcion: string;
    caracteristicas: string;
    tipoBonus: string;
    id_Rango: number;
    item: RangosInterface;
}

const RangoColors: { [key: number]: string } = {
    1: AppColors.elementoSanacion,
    2: AppColors.elementoRelampago,
    3: AppColors.elementoHielo,
    4: AppColors.elementoTierra,
    5: AppColors.elementoAgua,
    6: AppColors.elementoAbsorcion,
};


export const CardRango = ({rango, descripcion, caracteristicas, tipoBonus, imagenRango, id_Rango, item}: Props) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamlist>>();
    const borderColor = RangoColors[id_Rango] || '#000000';

    return(
        <View style={[stylesCardElementos.card, {borderColor}]}>
            <View>
                <Text style={stylesCardElementos.nombre}>{rango}</Text>
            </View>
            <View style={stylesCardElementos.logo}>
                <Image source={imagenRango} style={{width:65, height:45, resizeMode:"contain"}} />
            </View>
            <View>
                <Text style={stylesCardElementos.text}>Descripción</Text>
                <Text style={stylesCardElementos.descripcion}>{descripcion}</Text>
            </View>
            <View>
                <Text style={stylesCardElementos.text}>Caracteristicas generales</Text>
                <Text style={stylesCardElementos.descripcion}>{caracteristicas}</Text>
            </View>
            <View>
                <Text style={stylesCardElementos.text}>Tipo de bonus</Text>
                <Text style={stylesCardElementos.descripcion}>{tipoBonus}</Text>
            </View>
            <View>
                <Text style={stylesCardElementos.textVerYokais}  onPress={() => navigation.navigate("YokaiRangos", { idRango: item?.id_Rango })}>Ver Yo-kais de este elemento</Text>
            </View>
        </View>
    )
}

const stylesCardElementos = StyleSheet.create({
    card: {
        width: "100%",
        padding:20,
        borderRadius: 15,
        borderWidth: 3.5,
        borderColor: AppColors.tribuValiente,
        backgroundColor: '#fff',
        position: 'relative',
        marginVertical: 5,
    },
    containerNombre:{
        width:"100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    nombre:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        fontFamily:AppFonts.semiBold,
        marginBottom: 25,
        fontSize:23,
    },
    text:{
        fontFamily:AppFonts.semiBold,
        marginBottom: 5,
        fontSize:20,
    },
    descripcion:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        fontFamily:AppFonts.secondary,
        marginBottom: 5,
        fontSize:20,
    },
    logo: {
        width:"100%",
        height:"80%",
        alignItems: 'flex-end',
        position: 'absolute',
        marginVertical: 17,
    },
    textVerYokais:{
        fontSize: 18,
        fontFamily: AppFonts.semiBold,
        textDecorationLine: "underline"
    }
})