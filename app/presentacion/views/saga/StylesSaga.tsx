import {StyleSheet} from "react-native";
import {AppColors, AppFonts} from "../../themes/AppTheme";

export const styles = StyleSheet.create({
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
    icon: {
        width: 23,
        height: 23,
    },
    containerCardSaga:{
        width: "100%",
        maxHeight: "90%"
    },
    sagaLogo: {
        width: "100%",
        height: 250,
        flexDirection: "row",
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        resizeMode: "contain",
    },
    containerText: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textCentrado: {
        fontSize: 20,
        fontFamily: AppFonts.bold
    },
})
