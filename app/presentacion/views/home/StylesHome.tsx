import {StyleSheet} from "react-native";
import {AppColors} from "../../themes/AppTheme";

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.background,
        paddingHorizontal: 30,
        paddingTop: 30
    },
    navbar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 70,
    },
    navbarLeft: {
        flex: 1,
        alignItems: "flex-start",
    },
    navbarCenter: {
        flex: 1,
        alignItems: "center",
    },
    navbarRight: {
        flex: 1,
        alignItems: "flex-end",
    },
    list: {
        width: 25,
        height:25,
    },
    imagen: {
        width: 50,
        height: 50,
        resizeMode: "contain",
        borderRadius: 50
    },
    logo: {
        width: 130,
        height: 130,
        resizeMode: "contain",
    },
    containerBotones: {
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    botonFiltro: {
        width: "48%",
        height: 50,
        borderRadius: 25,
        backgroundColor: AppColors.botonTribus,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15
    },
    botonFiltro2: {
        width: "48%",
        height: 50,
        borderRadius: 25,
        backgroundColor: AppColors.botonElementos,
        justifyContent: "center",
        alignItems: "center"
    },
    botonFiltro3: {
        width: "48%",
        height: 50,
        borderRadius: 25,
        backgroundColor: AppColors.botonRango,
        justifyContent: "center",
        alignItems: "center"
    },
    botonFiltro4: {
        width: "48%",
        height: 50,
        borderRadius: 25,
        backgroundColor: AppColors.botonFase,
        justifyContent: "center",
        alignItems: "center"
    },
    containerCardYoKai: {
        width: "100%",
        maxHeight: 400
    },
});

export default styles;