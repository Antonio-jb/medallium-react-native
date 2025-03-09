import React from "react";
import {View, Image, Text, TouchableOpacity} from "react-native";
import { styles } from "./StylesDetailYoKai";
import {ElementoRareza} from "../../componentes/ElementoRareza";
import {TopInfoYokai} from "../../componentes/TopInfoYokai";
import TabViewInfo from "../tabview/TabView";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamlist} from "../../../../App";

type DetailYoKaiRouteProp = RouteProp<RootStackParamlist, 'DetailYoKai'>;

const DetailYoKai = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamlist>>();
    const route = useRoute<DetailYoKaiRouteProp>();
    const { yokai } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require("../../../../assets/back.png")} style={styles.icon}/>
                </TouchableOpacity>
                <Image source={require("../../../../assets/heartw.png")} style={styles.icon} />
            </View>
            <TopInfoYokai nombre={yokai.yokai.name} nombreJapones={yokai.nombreJapo} yokaiImagen={{uri: yokai.image}} tribuImagen={{uri: yokai.yokai.tribu.imagenPixel}} id_Tribu={yokai.yokai.tribu.id_Tribu}/>
            <View style={styles.bottomSection}>
                <Image source={require("../../../../assets/addyokai.png")} style={styles.iconAdd} />
                <ElementoRareza
                    text={yokai.yokai.elemento.nombre}
                    icon={{uri: yokai.yokai.elemento.image}}/>
                <ElementoRareza
                    text={yokai.yokai.rango.name}
                    icon={{uri: yokai.yokai.rango.image}}/>
            </View>
            <TabViewInfo yokai={yokai}/>
        </View>
    );
};

export default DetailYoKai;
