import React, { useEffect, useState } from 'react';
import {View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { YokaiTribuViewModel } from "./ViewModel";  // Asegúrate de importar el ViewModel
import {DetallesYokaiInterface} from "../../../../domain/entities/Yokai";
import RenderYokai from "../../home/ItemYokai";
import {AppColors, AppFonts} from "../../../themes/AppTheme";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamlist} from "../../../../../App";
import { styles } from './StylesYokaiTribu';

const YokaiTribu = ({ route }: any) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamlist>>();
    const { idTribu } = route.params;
    const { yokais, getYokais } = YokaiTribuViewModel(idTribu);

    useEffect(() => {
        getYokais(idTribu);
    }, []);

    const tribuNombre = yokais.length > 0 ? yokais[0].yokai.tribu.nombre : "Tribu desconocida";

    if (yokais.length > 0) {
        return (
            <View style={styles.container}>
                <View style={styles.topSection}>
                    <TouchableOpacity onPress={() => navigation.navigate("Tribus")}>
                        <Image source={require("../../../../../assets/back.png")} style={styles.icon}/>
                    </TouchableOpacity>
                    <View style={styles.containerText}>
                        <Text style={styles.textCentrado}>{"Tribu " + tribuNombre}</Text>
                    </View>
                </View>
                <FlatList
                    data={yokais}
                    renderItem={({ item }: { item: DetallesYokaiInterface }) => <RenderYokai item={item}/>}
                    keyExtractor={(item) => item.id_detallesYokai.toString()}
                    ListEmptyComponent={<Text style={{ textAlign: 'center' }}>No hay Yo-kais disponibles para esta tribu.</Text>}
                />
            </View>
        );
    } else {
        return (
                <ActivityIndicator size="large" />
        );
    }
};

export default YokaiTribu;
