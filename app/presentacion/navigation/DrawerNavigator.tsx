import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../views/home/Home";
import Profile from "../views/profile/Profile";
import {Favoritos} from "../views/favoritos/Favoritos";
import {MisYokais} from "../views/mis-yokai/MisYokais";
import {Image, StyleSheet} from "react-native";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
            <Drawer.Navigator
                initialRouteName="Inicio"
                screenOptions={{
                    drawerActiveBackgroundColor: '#F1F1F1',
                    drawerActiveTintColor: '#000'
                }}
            >
                <Drawer.Screen
                    name="Inicio"
                    component={Home}
                    options={{
                        headerShown: false,
                        drawerIcon: () => (
                            <Image
                                source={require("../../../assets/home.png")}
                                style={styles.iconNavbar}/>
                        )
                    }} />
                <Drawer.Screen
                    name="Favoritos"
                    component={Favoritos}
                    options={{
                        headerShown: false,
                        drawerIcon: () => (
                            <Image
                                source={require("../../../assets/heartblack.png")}
                                style={styles.iconNavbar}/>
                    )
                }} />
                <Drawer.Screen
                    name="Mis Yokai"
                    component={MisYokais}
                    options={{
                        headerShown: false,
                        drawerIcon: () => (
                            <Image
                                source={require("../../../assets/yokai.png")}
                                style={styles.iconNavbar}/>
                        )
                }}/>
                <Drawer.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        headerShown: false,
                        drawerIcon: () => (
                            <Image
                                source={require("../../../assets/perfil.png")}
                                style={styles.iconNavbar}/>
                        )
                    }}/>
            </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    iconNavbar: {
        width: 25,
        height: 25,
        resizeMode: "contain",
    }
})

export default DrawerNavigator;