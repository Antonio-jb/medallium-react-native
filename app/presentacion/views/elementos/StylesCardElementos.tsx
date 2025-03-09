import {StyleSheet} from "react-native";
import {AppColors, AppFonts} from "../../themes/AppTheme";

const stylesCardElementos = StyleSheet.create({
    card: {
        width: "100%",
        padding:20,
        borderRadius: 15,
        borderWidth: 3.5,
        borderColor: AppColors.tribuValiente,
        backgroundColor: '#fff',
        position: 'relative',
        marginVertical: 5,
    },
    containerNombre:{
        width:"100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    nombre:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        fontFamily:AppFonts.semiBold,
        marginBottom: 25,
        fontSize:23,
    },
    descripcion:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        fontFamily:AppFonts.secondary,
        marginBottom: 5,
        fontSize:20,
    },
    logo: {
        width:"100%",
        height:"80%",
        alignItems: 'flex-end',
        position: 'absolute',
        marginVertical: 17,
    },
    textVerYokais:{
        fontSize: 18,
        fontFamily: AppFonts.semiBold,
        textDecorationLine: "underline"
    }
})

export default stylesCardElementos;