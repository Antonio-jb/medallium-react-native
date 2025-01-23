
import React from "react";
import {Image, KeyboardType, StyleSheet, Text, TextInput, View} from "react-native";
import {AppColors} from "../themes/AppTheme";

interface Props {
    placeholder: string,
    keyboardType: KeyboardType,
    secureTextEntry: boolean,
    text: string
}

const FormInput = ({text, placeholder, keyboardType, secureTextEntry}: Props)=> {
    return(
        <View>
            <Text style={styles.textInput}>{text}</Text>
            <TextInput style={styles.input}
                       placeholder={placeholder}
                       keyboardType={keyboardType}
                       secureTextEntry={secureTextEntry}
            ></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        width:"95%",
        display:"flex",
        margin: "auto",
        marginBottom: 7,
    },
    input: {
        backgroundColor: "white",
        marginBottom: 13,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderColor: AppColors.primary,
        borderWidth: 1,
        height: 40,
    },
})

export default FormInput;
