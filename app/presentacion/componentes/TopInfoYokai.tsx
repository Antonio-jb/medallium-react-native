import {Image, Text, View, StyleSheet} from "react-native";
import React from "react";
import {AppColors, AppFonts} from "../themes/AppTheme";

interface Props{
    nombre: string,
    nombreJapones: string,
    yokaiImagen: any,
    tribuImagen: any,
    id_Tribu: number,
}

const yokaiColors: { [key: number]: string } = {
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


export const TopInfoYokai = ({nombre, nombreJapones, yokaiImagen, tribuImagen, id_Tribu}: Props) => {
    const backgroundColor = yokaiColors[id_Tribu] || '#000000'; // Color por defecto si id_Tribu no se encuentra


    return(
        <View style={styles.yoKaiContainer}>
            <View style={[styles.yoKai, {backgroundColor}]}>
                <Text style={styles.yoKaiName}>{nombre}</Text>
                <Text style={styles.yoKaiName}>{nombreJapones}</Text>
                <Image source={yokaiImagen} style={styles.yoKaiImage} />
            </View>
            <View style={styles.tribu}>
                <Image source={tribuImagen} style={styles.tribuImagen} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    yoKaiContainer: {
        alignItems: "center",
        width: "100%",
    },
    yoKai: {
        width: 250,
        height: 250,
        backgroundColor: AppColors.tribuGuapo,
        borderRadius: 200,
        alignItems: "center",
        justifyContent: "center",
    },
    yoKaiName: {
        fontSize: 18,
        fontFamily: AppFonts.semiBold,
    },
    yoKaiImage: {
        width: 140,
        height: 140,
        resizeMode: "contain",
        marginVertical: 5,
    },
    tribu:{
        width: "100%",
        justifyContent:"center",
        alignItems: "center",
        marginVertical: 6
    },
    tribuImagen: {
        width: 50,
        height: 50,
        resizeMode: "contain",
        position: "absolute"
    },
})