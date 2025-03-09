import {Image, View, Text, TouchableOpacity, ScrollView, useWindowDimensions, FlatList} from "react-native";
import React, {useEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamlist} from "../../../../App";
import stylesRango from "./StylesRango";
import {styles} from "../tribus/StylesTribus";
import {RangosViewModel} from "./ViewModel";
import {RangosInterface} from "../../../domain/entities/Yokai";
import RenderRangos from "./ItemRango";

const Rango = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamlist>>();
    const { rango, getRangos } = RangosViewModel();

    useEffect(() => {
        getRangos();
    }, []);

    return(
        <View style={stylesRango.container}>
            <View style={stylesRango.topSection}>
                <TouchableOpacity onPress={() => navigation.navigate("DrawerNavigator")}>
                    <Image source={require("../../../../assets/back.png")} style={stylesRango.icon}/>
                </TouchableOpacity>
                <View style={styles.containerText}>
                    <Text style={styles.textCentrado}>Rango</Text>
                </View>
            </View>
            <View style={stylesRango.containerCardRangos}>
                <FlatList
                    data={rango}
                    renderItem={({item}: {item: RangosInterface}) => <RenderRangos item={item}/>}
                    keyExtractor={(item, index) => item?.id_Rango?.toString() || ''}
                    ListFooterComponent={<View style={{ paddingVertical: 10 }}><Text style={{ textAlign: 'center' }}>no hay más elementos</Text></View>}
                />
            </View>
        </View>
    )
}

export default Rango;