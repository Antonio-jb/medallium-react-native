import * as React from 'react';
import {View, useWindowDimensions, Text, StyleSheet} from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import DescripcionYokai from "./DescripcionYokai";
import EstadisticasYokai from "./EstadisticasYokai";
import EvolucionesYokai from "./EvolucionesYokai";
import {DetallesYokaiInterface} from "../../../domain/entities/Yokai";
import { DatosCombateViewModel } from './ViewModel';

interface Props{
    yokai: DetallesYokaiInterface;
}

const FirstRoute = ({ yokai, datosCombate }: { yokai: DetallesYokaiInterface, datosCombate: any[] }) => {
    const comidaArray = yokai.comida ? yokai.comida.split(",").map(item => item.trim()) : [];
    const { habilidad } = datosCombate[0] || {};

    return (
        <DescripcionYokai
            descripcion={yokai.descripcion}
            comidaYK1={comidaArray[0]}
            comidaYK2={comidaArray[1]}
            comidaYK3={comidaArray[2]}
            habilidad={habilidad}
            medalla={{uri: yokai.medalla}}
        />
    )
}

const SecondRoute = ({datosCombate}: {datosCombate: any[]}) => {
    const { puntosVida, fuerza, espiritacion, defensa, velocidad, total } = datosCombate[0] || {};
    return(
        <EstadisticasYokai
            pv={puntosVida}
            fuerza={fuerza}
            espiritu={espiritacion}
            defensa={defensa}
            velocidad={velocidad}
            total={total}
        />
    );
};

const ThirdRoute = () => (
    <EvolucionesYokai />
);

export default function TabViewInfo({yokai}: Props) {
    const { datosCombate } = DatosCombateViewModel(yokai.yokai.id_Yokai);
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Descripción' },
        { key: 'second', title: 'Estadísticas' },
        { key: 'third', title: 'Evoluciones' },
    ]);

    const renderScene = ({ route }: { route: { key: string } }) => {
        switch (route.key) {
            case 'first':
                return <FirstRoute yokai={yokai} datosCombate={datosCombate} />;
            case 'second':
                return <SecondRoute datosCombate={datosCombate}/>;
            case 'third':
                return <ThirdRoute/>;
            default:
                return null;
        }
    };

    const renderTabBar = (props: any) => (
        <TabBar
            {...props}
            activeColor={'black'}
            inactiveColor={'#525252'}
            style={{backgroundColor: '#E1E1E1'}}
            indicatorStyle={{ backgroundColor: 'black', height: 2}}
        />
    );

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            style={styles.container}
            lazy
        />
    );
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        flex: 1,
        backgroundColor: '#DCDCDC',
        borderRadius: 25,
        marginBottom: 20,
    },
})