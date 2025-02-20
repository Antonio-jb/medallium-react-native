import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import Login from "./app/presentacion/views/auths/Login";
import Registro from "./app/presentacion/views/auths/Registro";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./app/presentacion/views/home/Home";
import Profile from "./app/presentacion/views/profile/Profile";
import DetailYoKai from "./app/presentacion/views/detail-yokai/DetailYoKai";
import Tribus from "./app/presentacion/views/tribus/Tribus";
import {useFonts} from "expo-font";
import {DetallesYokaiInterface} from "./app/domain/entities/Yokai";
import {Fases} from "./app/presentacion/views/fases/Fases";
import Elementos from "./app/presentacion/views/elementos/Elementos";

const Stack=createNativeStackNavigator<RootStackParamlist>();
export type RootStackParamlist={
    Login: undefined,
    Registro: undefined,
    Home: undefined,
    Profile: undefined,
    DetailYoKai: undefined,
    Tribus: undefined,
    Elementos: undefined,
    Fases: undefined
}

export default function App() {
    const [fontsLoaded] = useFonts({
        'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
        'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-light': require('./assets/fonts/Montserrat-Light.ttf'),
    });
    if (!fontsLoaded) {
        return <ActivityIndicator size={"large"} color={"#000"}></ActivityIndicator>
    }
    return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>
              <Stack.Screen name={"Login"} component={Login} ></Stack.Screen>
              <Stack.Screen name={"Registro"} component={Registro} ></Stack.Screen>
              <Stack.Screen name={"Home"} component={Home}></Stack.Screen>
              <Stack.Screen name={"Profile"} component={Profile}></Stack.Screen>
              <Stack.Screen name={"DetailYoKai"} component={DetailYoKai}></Stack.Screen>
              <Stack.Screen name={"Tribus"} component={Tribus}></Stack.Screen>
              <Stack.Screen name={"Elementos"} component={Elementos}></Stack.Screen>
              <Stack.Screen name={"Fases"} component={Fases}></Stack.Screen>
          </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
