import React, {useEffect} from "react";
import {ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamlist} from "../../../../../App";
import {DetallesYokaiInterface} from "../../../../domain/entities/Yokai";
import RenderYokai from "../../home/ItemYokai";
import { styles } from "./StylesYokaiElementos";
import {YokaiElementosViewModel} from "./ViewModel";

export const YokaiElementos = ({ route }: any) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamlist>>();
    const { idElemento } = route.params;
    const { yokais, getYokais } = YokaiElementosViewModel(idElemento);

    useEffect(() => {
        getYokais(idElemento);
    }, []);

    const elementoNombre = yokais.length > 0 ? yokais[0].yokai.elemento.nombre : "Elemento desconocido";

    if (yokais.length > 0) {

        return (
            <View style={styles.container}>
                <View style={styles.topSection}>
                    <TouchableOpacity onPress={() => navigation.navigate("Elementos")}>
                        <Image source={require("../../../../../assets/back.png")} style={styles.icon}/>
                    </TouchableOpacity>
                    <View style={styles.containerText}>
                        <Text style={styles.textCentrado}>{elementoNombre}</Text>
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