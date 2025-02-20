import {Image, View, Text, TouchableOpacity, ScrollView} from "react-native";
import CardTribu from "../../componentes/CardTribu";
import React from "react";
import {TextPrincipales} from "../../componentes/TextPrincipales";
import {CardYoKai} from "../../componentes/CardYoKai";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamalist} from "../../../../App";
import {styles} from "./StylesElementos";

const Elementos = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamalist>>();
    return(
        <View style={styles.container}>
            <View style={styles.topSection}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Image source={require("../../../../assets/back.png")} style={styles.icon}/>
                </TouchableOpacity>
                <TextPrincipales text={"Elementos"}/>
            </View>
            <ScrollView style={styles.containerCardElementos}>
                <CardTribu nombre={"Guapa"}
                           nombreJapones={"かわいい"}
                           iconTribu={require("../../../../assets/guapa2.png")}/>
            </ScrollView>
        </View>
    )
}

export default Elementos;