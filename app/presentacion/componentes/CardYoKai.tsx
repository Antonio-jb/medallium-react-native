import React from "react";
import {Image, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import {AppColors, AppFonts} from "../themes/AppTheme";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamlist} from "../../../App";

interface Props{
    nombre: string,
    nombreJapones: string,
    iconHeart: any,
    imagenYoKai: any,
    iconTribu: any,
    iconElemento: any,
    iconRango: any,
    id_Tribu: number,
    onPressHeart: () => void
}

const tribuColors: { [key: number]: string } = {
    2: AppColors.tribuGuapo,
    3: AppColors.tribuValiente,
    4: AppColors.tribuMisterioso,
    5: AppColors.tribuRobusto,
    6: AppColors.tribuOscuro,
    7: AppColors.tribuSiniestro,
    8: AppColors.tribuAmable,
    9: AppColors.tribuMalefico,
    10: AppColors.tribuEscurridizo,
};

export const CardYoKai =  ({nombre, nombreJapones, iconHeart, imagenYoKai, iconTribu, iconElemento, iconRango, id_Tribu, onPressHeart}: Props) => {
    const borderColor = tribuColors[id_Tribu] || '#000000'; // Color por defecto si id_Tribu no se encuentra
    return(
        <View style={[styles.card, { borderColor }]}>
            <View style={styles.textContainer}>
                <Text style={styles.textNombre}>{nombre}</Text>
                <Text style={styles.textNombre}>{nombreJapones}</Text>
            </View>
            <View style={styles.containerCorazon}>
                <TouchableOpacity onPress={onPressHeart}>
                    <Image source={iconHeart} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
            </View>
            <View style={styles.containerImagenYoKai}>
                <Image
                    source={imagenYoKai}
                    style={styles.image}
                />
            </View>
            <View style={styles.containerIcons}>
                <Image source={iconTribu}
                       style={styles.icons}
                />
                <Image source={iconElemento}
                       style={styles.icons}/>
                <Image source={iconRango}
                       style={styles.icons}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
        card: {
        width: "100%",
        padding:20,
        borderRadius: 15,
        borderWidth: 3.5,
        borderColor: AppColors.tribuGuapo,
        backgroundColor: '#fff',
        position: 'relative',
        marginVertical: 5
        },
        textContainer: {
        alignItems: 'flex-start',
        },
        textNombre:{
        fontFamily: AppFonts.semiBold,
        fontSize: 18,
        },
        containerCorazon:{
        position: "absolute",
        top: 15,
        right: 20,
        padding: 5,
        },
        containerImagenYoKai:{
        alignItems: "flex-end",
        position: "absolute",
        top: 20,
        right: 55,
    },
        image: {
        width: 80,
        height: 100,
            resizeMode: "contain",

        },
        containerIcons: {
        width: "35%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingTop: 18
    },
        icons: {
        width: 30,
        height: 30,
        resizeMode: "contain",
    }
    })