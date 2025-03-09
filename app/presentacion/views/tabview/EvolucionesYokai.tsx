import React from "react";
import {View, Image, Text, StyleSheet} from "react-native";
import {AppFonts} from "../../themes/AppTheme";

const EvolucionesYokai = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Próximamente</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        paddingTop:20,
        paddingHorizontal: 20
    },
    text:{
        paddingVertical: 10,
        fontSize: 16,
        fontFamily: AppFonts.bold
    }

})


export default EvolucionesYokai;