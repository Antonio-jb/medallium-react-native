import React, {useEffect, useState} from "react";
import {LoginAuthUseCase} from "../../../domain/useCases/auth/LoginAuth";
import {SaveUserUseCase} from "../../../domain/useCases/UserLocal/SaveUser";
import {UserLogin, UserLoginInterface} from "../../../domain/entities/User";
import {ApiDelivery} from "../../../data/sources/remote/api/ApiDelivery";
import useUserLocalStorage from "../../hooks/useUserLocalStorage";

const LoginViewModel = () =>{
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [values, setValues] = useState({
        email: "",
        password: "",
    })
    const {user, getUserSession} = useUserLocalStorage();

    const onChangeLogin = (property: string, value: any) => {
        setValues({...values, [property]: value})
    }

    const login = async () => {
        if (validateForm()){
            const response = await LoginAuthUseCase(values as UserLoginInterface)
            console.log("Respuesta de login:", response);
            if(!response.success){
                setErrorMessage(response.message)
            } else{
                await SaveUserUseCase(response.data as UserLogin)
                getUserSession()
            }
        }
    }

    const validateForm = () => {
        if (values.email === "") {
            setErrorMessage("Correo electrónico obligatorio")
            return false;
        }
        if (values.password === "") {
            setErrorMessage("Contraseña obligatoria")
            return false;
        }
        return true
    }

    return{
        ...values,
        onChangeLogin,
        login,
        errorMessage,
        user
    }
}

const RegisterViewModel = () =>{
    const [errorMessage, setErrorMessage] = useState(String);
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        user: "",
        email:"",
        password: "",
    })
    const onChangeRegister = (property: string, value: any) => {
        setValues({...values, [property]: value})
    }
    const register = async () => {
        if (validateForm()){
            const response = await ApiDelivery.post("/users/create", values)
            console.log("RESULT: " + JSON.stringify(response))
        }
    }
    const validateForm = () => {
        if (values.firstName === "") {
            setErrorMessage("Nombre obligatorio")
            return false;
        }
        if (values.lastName === "") {
            setErrorMessage("Apellido obligatorio")
            return false;
        }
        if (values.user === "") {
            setErrorMessage("Usuario obligatorio")
            return false;
        }
        if (values.email === "") {
            setErrorMessage("Correo obligatorio")
            return false;
        }
        if (values.password === "") {
            setErrorMessage("Contraseña obligatoria")
            return false;
        }
        return true;
    }

    return {
        ...values,
        onChangeRegister,
        register,
        errorMessage,
        validateForm
    }
}
export default {LoginViewModel, RegisterViewModel};
