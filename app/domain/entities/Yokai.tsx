export interface YokaiInterface {
    id_Yokai: number;
    name: string;
    id_rango: number;
    id_tribu: number;
    id_Elemento: number;
    id_fase: number;
    tribu: TribusInterface;
    elemento: ElementosInterface;
    rango: RangosInterface;
}

export interface DetallesYokaiInterface {
    id_detallesYokai: number;
    image: string;
    medalla: string;
    comida: string;
    descripcion: string;
    nombreJapo: string;
    yokai: YokaiInterface;
}

export interface TribusInterface {
    id_Tribu: number;
    nombre: string;
    caracteristicasGenerales: string;
    tipoBonus: string;
    descripcion: string;
    image: string;
    nombreJapones: string;
    imagenPixel: string;
}

export interface DatosCombateInterface {
    id_datosCombate: number;
    puntosVida: number;
    fuerza: number;
    defensa: number;
    velocidad: number;
    habilidad: string;
    espiritacion: number;
    total: number;
    yokai: YokaiInterface;
}

export interface ElementosInterface {
    id_Elemento: number;
    nombre: string;
    fortaleza: string;
    debilidad: string;
    descripcion: string;
    image: string;
}

export interface RangosInterface {
    id_Rango: number;
    name: string;
    descripcion: string
    caracteristicasGenerales: string;
    tipoBonus: string;
    image: string;
}
