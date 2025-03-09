import {StyleSheet} from "react-native";
import {AppColors, AppFonts} from "../../themes/AppTheme";

const stylesRango = StyleSheet.create({
    container: {
        backgroundColor: AppColors.background,
        paddingHorizontal: 30,
        paddingTop: 30
    },
    topSection: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginVertical: 15
    },
    imagen: {
        width: 50,
        height: 50,
        resizeMode: "contain",
        borderRadius: 50
    },
    icon: {
        width: 23,
        height: 23,
    },
    containerCardYoKai:{
        width: "100%",
        maxHeight: 400
    },
    containerText: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    textCentrado: {
        fontSize: 20,
        fontFamily: AppFonts.bold
    },
    containerCardRangos:{
        width: "100%",
        maxHeight: "90%"
    }
})

export default stylesRango;