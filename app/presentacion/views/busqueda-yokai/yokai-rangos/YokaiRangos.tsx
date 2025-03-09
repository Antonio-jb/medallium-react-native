import React, {useEffect} from "react";
import {ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamlist} from "../../../../../App";
import {DetallesYokaiInterface} from "../../../../domain/entities/Yokai";
import RenderYokai from "../../home/ItemYokai";
import {YokaiRangosViewModel} from "./ViewModel";
import {styles} from "./StylesYokaiRango";

export const YokaiRangos = ({ route }: any) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamlist>>();
    const { idRango } = route.params;
    const { yokais, getYokais } = YokaiRangosViewModel(idRango);

    useEffect(() => {
        getYokais(idRango);
    }, []);

    const rangoNombre = yokais.length > 0 ? yokais[0].yokai.rango.name : "Rango desconocido";
    if (yokais.length > 0) {

        return (
            <View style={styles.container}>
                <View style={styles.topSection}>
                    <TouchableOpacity onPress={() => navigation.navigate("Rango")}>
                        <Image source={require("../../../../../assets/back.png")} style={styles.icon}/>
                    </TouchableOpacity>
                    <View style={styles.containerText}>
                        <Text style={styles.textCentrado}>{rangoNombre}</Text>
                    </View>
                </View>
                <View style={styles.containerCardRangos}>
                    <FlatList
                        data={yokais}
                        renderItem={({ item }: { item: DetallesYokaiInterface }) => <RenderYokai item={item}/>}
                        keyExtractor={(item) => item.id_detallesYokai.toString()}
                    />
                </View>
            </View>
        );
    } else {
        return (
            <ActivityIndicator size="large" />
        );
    }
};