import {Image, View, Text, TouchableOpacity, ScrollView, FlatList} from "react-native";
import React, {useEffect} from "react";
import {TextPrincipales} from "../../componentes/TextPrincipales";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamlist} from "../../../../App";
import {styles} from "./StylesElementos";
import CardElemento from "../../componentes/CardElemento";
import {ElementosViewModel} from "./ViewModel"
import {ElementosInterface} from "../../../domain/entities/Yokai";
import RenderElementos from "./ItemElementos";

const Elementos = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamlist>>();
    const {elemento, getElementos} = ElementosViewModel();

    useEffect(() => {
        getElementos();
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.topSection}>
                <TouchableOpacity onPress={() => navigation.navigate("DrawerNavigator")}>
                <Image source={require("../../../../assets/back.png")} style={styles.icon}/>
                </TouchableOpacity>
                <View style={styles.containerText}>
                    <Text style={styles.textCentrado}>Elementos</Text>
                </View>
            </View>
            <View style={styles.containerCardElementos}>
                <FlatList
                    data={elemento}
                    renderItem={({ item, index }: { item: ElementosInterface, index: number }) => <RenderElementos index={index} item={item} />}
                    keyExtractor={(item) => item?.id_Elemento?.toString()}
                    initialNumToRender={8}
                    windowSize={8}
                    ListFooterComponent={<View style={{paddingVertical: 10 }}><Text style={{ textAlign: 'center' }}>no hay más elementos</Text></View>}
                />
            </View>
        </View>
    )
}

export default Elementos;