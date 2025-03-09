import React from "react";
import {View, Text, StyleSheet, Image, ScrollView} from "react-native";
import {AppFonts} from "../../themes/AppTheme";

interface Props{
    descripcion: string,
    habilidad: string,
    comidaYK1: string,
    comidaYK2: string,
    comidaYK3: string,
    medalla: any
}
const DescripcionYokai = ({descripcion, habilidad, comidaYK1, comidaYK2, comidaYK3, medalla}: Props) => {
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={{ paddingVertical: 5, fontSize: 15, paddingBottom:15 }}>{descripcion}</Text>
                <View>
                    <Text style={styles.text}>Comida favorita</Text>
                    <View  style={styles.containerRow}>
                        <View>
                            <Text style={styles.textRow}>Yo-kai Watch</Text>
                            <Text style={{textAlign: 'center'}}>{comidaYK1}</Text>
                        </View>
                        <View>
                            <Text style={styles.textRow}>Yo-kai Watch 2</Text>
                            <Text style={{textAlign: 'center'}}>{comidaYK2}</Text>
                        </View>
                        <View>
                            <Text style={styles.textRow}>Yo-kai Watch 3</Text>
                            <Text style={{textAlign: 'center'}}>{comidaYK3}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.containerOtro}>
                    <View style={styles.containerHabilidad}>
                        <View style={styles.containerSeparado}>
                            <Text style={styles.textRow}>Habilidad</Text>
                            <Text style={{marginTop: 5}}>{habilidad}</Text>
                        </View>
                        <View style={styles.containerMedalla}>
                            <Text style={styles.textRow}>Medalla</Text>
                            <Image source={medalla} style={styles.medalla} />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical:15,
        paddingHorizontal: 15
    },
    text: {
        fontSize: 16,
        paddingVertical: 5,
        fontFamily: AppFonts.bold,
        textAlign: "center"
    },
    containerRow:{
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 5
    },
    textRow:{
        fontFamily: AppFonts.semiBold,
    },
    medalla:{
        width: 55,
        height: 55,
        resizeMode: "contain",
        marginTop: 5
    },
    containerHabilidad:{
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 5,
    },
    containerOtro:{
        width: "100%",
        paddingVertical: 20,
        alignItems: "center",
    },
    containerSeparado: {
        width: '50%',
        alignItems: "center",
    },
    containerMedalla: {
        width: '50%',
        justifyContent: "center",
        alignItems: "center",
    }
})

export default DescripcionYokai;