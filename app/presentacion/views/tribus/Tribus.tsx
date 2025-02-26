import React, { useEffect, useState } from 'react';
import { Image, View, Text, TouchableOpacity, FlatList, Modal, Button } from 'react-native';
import { TextPrincipales } from "../../componentes/TextPrincipales";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamlist } from "../../../../App";
import { styles } from "./StylesTribus";
import {ModalTribuStyle} from "./ModalTribuStyle";
import { TribusInterface } from "../../../domain/entities/Yokai";
import { TribusViewModel } from "./ViewModel";
import RenderTribus from "./ItemTribus";

const Tribus = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamlist>>();
    const {tribus, getTribus} = TribusViewModel();
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState<TribusInterface | null>(null);

    useEffect(() => {
        getTribus();
    }, []);

    const handleItemPress = (item: TribusInterface) => {
        setSelectedItem(item);
        setModalVisible(true);
    };

    // Accede de manera segura a id_detallesYokai, convierte a cadena o devuelve una cadena vacía si está indefinido
    // const keyExtractor = (item: TribusInterface) => item?.id_Tribu?.toString() || '';

    return(
        <View style={styles.container}>
            <View style={styles.topSection}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Image source={require("../../../../assets/back.png")} style={styles.icon}/>
                </TouchableOpacity>
                <TextPrincipales text={"Tribus"}/>
            </View>
            <View style={styles.containerCardTribu}>
                <FlatList
                    data={tribus}
                    renderItem={({ item }: { item: TribusInterface }) => (
                        <TouchableOpacity onPress={() => handleItemPress(item)}>
                            <RenderTribus item={item} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item?.id_Tribu?.toString() || ''}
                    initialNumToRender={10}
                    windowSize={10}
                    ListFooterComponent={<View style={{ paddingVertical: 10 }}><Text style={{ textAlign: 'center' }}>no hay más elementos</Text></View>}
                />
            </View>
            {selectedItem && (
                <Modal
                    visible={modalVisible}
                    transparent={true}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={ModalTribuStyle.centeredView}>
                        <View style={ModalTribuStyle.modalView}>
                            {selectedItem?.image && (
                                <Image source={{ uri: selectedItem.image }} style={ModalTribuStyle.tribuLogo} />
                            )}
                            <Text style={ModalTribuStyle.titleText}>{selectedItem?.nombre}</Text>
                            <Text style={ModalTribuStyle.modalText}>{selectedItem?.descripcion}</Text>
                            <TouchableOpacity
                                style={[ModalTribuStyle.button, ModalTribuStyle.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={ModalTribuStyle.textCerrar}>X</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[ModalTribuStyle.buttonVerYokais, ]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={ModalTribuStyle.textVerYokais}> Ver Yo-kais de esta tribu</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}
        </View>
    )
}

export default Tribus;