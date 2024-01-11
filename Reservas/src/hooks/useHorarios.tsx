// useHorarios.ts
import { useEffect, useState } from 'react';

interface HorariosHook {
    Horarios: string[];
}

const useHorarios = (servicio: string): string[] => {

    const [horarios, setHorarios] = useState<HorariosHook>({ Horarios: [] });

    console.log(horarios);


    useEffect(() => {
        const obtenerHorarios = async () => {
            try {
                let horariosObtenidos: HorariosHook = { Horarios: [] };

                switch (servicio) {
                    case 'Botox en entrecejo':
                        horariosObtenidos = {
                            Horarios: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
                        };
                        break;
                    case 'Hidrolipoclasia':
                        horariosObtenidos = {
                            Horarios: ['08:30', '09:30', '10:30', '11:30', '12:30'],
                        };
                        break;
                    case 'Hidroxiapatita':
                        horariosObtenidos = {
                            Horarios: ['10:00', '10:30', '11:00', '11:30', '12:00'],
                        };
                        break;
                    case 'Sculptra':
                        horariosObtenidos = {
                            Horarios: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
                        };
                        break;
                    case 'Botox en patas de gallo':
                        horariosObtenidos = {
                            Horarios: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
                        };
                        break;
                    case 'Botox frontal':
                        horariosObtenidos = {
                            Horarios: ['10:00', '10:30', '11:00', '11:30', '12:00'],
                        };
                        break;
                    case 'Relleno de labios':
                        horariosObtenidos = {
                            Horarios: ['08:30', '09:30', '10:30', '11:30', '12:30'],
                        };
                        break;
                    case 'Relleno de menton':
                        horariosObtenidos = {
                            Horarios: ['10:00', '10:30', '11:00', '11:30', '12:00'],
                        };
                        break;
                    case 'Relleno de ojeras':
                        horariosObtenidos = {
                            Horarios: ['08:30', '09:30', '10:30', '11:30', '12:30'],
                        };
                        break;
                    case 'Botox full face':
                        horariosObtenidos = {
                            Horarios: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
                        };
                        break;
                    case 'Relleno de mandibula':
                        horariosObtenidos = {
                            Horarios: ['10:00', '10:30', '11:00', '11:30', '12:00'],
                        };
                        break;
                    case 'Relleno de surcos':
                        horariosObtenidos = {
                            Horarios: ['08:30', '09:30', '10:30', '11:30', '12:30'],
                        };
                        break;
                    case 'Rinomodelacion':
                        horariosObtenidos = {
                            Horarios: ['10:00', '10:30', '11:00', '11:30', '12:00'],
                        };
                        break;
                    case 'Blanqueamiento x1 zona':
                        horariosObtenidos = {
                            Horarios: ['08:30', '09:30', '10:30', '11:30', '12:30'],
                        };
                        break;
                    case 'Depilación':
                        horariosObtenidos = {
                            Horarios: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
                        };
                        break;
                    case 'Brazos':
                        horariosObtenidos = {
                            Horarios: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
                        };
                        break;
                    case 'Bozo + Axilas':
                        horariosObtenidos = {
                            Horarios: ['08:30', '09:30', '10:30', '11:30', '12:30'],
                        };
                        break;
                    case 'Pelvis + tira de cola':
                        horariosObtenidos = {
                            Horarios: ['10:00', '10:30', '11:00', '11:30', '12:00'],
                        };
                        break;
                    case 'Pelvis + tira de cola + axilas':
                        horariosObtenidos = {
                            Horarios: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
                        };
                        break;
                    case 'Espalda + abdomen + Pecho':
                        horariosObtenidos = {
                            Horarios: ['08:30', '09:30', '10:30', '11:30', '12:30'],
                        };
                        break;
                    case 'Depi Abdomen':
                        horariosObtenidos = {
                            Horarios: ['10:00', '10:30', '11:00', '11:30', '12:00'],
                        };
                        break;
                    case 'Depi Axilas':
                        horariosObtenidos = {
                            Horarios: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
                        };
                        break;
                    case 'Depilacion Definitiva Cuerpo Completo.':
                        horariosObtenidos = {
                            Horarios: ['08:30', '09:30', '10:30', '11:30', '12:30'],
                        };
                        break;
                    case 'Espalda':
                        horariosObtenidos = {
                            Horarios: ['10:00', '10:30', '11:00', '11:30', '12:00'],
                        };
                        break;
                    case 'Gluteos':
                        horariosObtenidos = {
                            Horarios: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
                        };
                        break;
                    case 'Media pierna':
                        horariosObtenidos = {
                            Horarios: ['08:30', '09:30', '10:30', '11:30', '12:30'],
                        };
                        break;
                    case 'Nuca':
                        horariosObtenidos = {
                            Horarios: ['10:00', '10:30', '11:00', '11:30', '12:00'],
                        };
                        break;
                    case 'Orejas':
                        horariosObtenidos = {
                            Horarios: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
                        };
                        break;
                    case 'Pecho':
                        horariosObtenidos = {
                            Horarios: ['08:30', '09:30', '10:30', '11:30', '12:30'],
                        };
                        break;
                    case 'Pelvis completa':
                        horariosObtenidos = {
                            Horarios: ['10:00', '10:30', '11:00', '11:30', '12:00'],
                        };
                        break;
                    case 'Pierna entera':
                        horariosObtenidos = {
                            Horarios: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
                        };
                        break;
                    case 'Pies':
                        horariosObtenidos = {
                            Horarios: ['08:30', '09:30', '10:30', '11:30', '12:30'],
                        };
                        break;
                    case 'Tira de cola':
                        horariosObtenidos = {
                            Horarios: ['10:00', '10:30', '11:00', '11:30', '12:00'],
                        };
                        break;
                    case 'Alta frecuencia por 1 zona':
                        horariosObtenidos = {
                            Horarios: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
                        };
                        break;
                    case 'Radio frecuencia 1 zona':
                        horariosObtenidos = {
                            Horarios: ['08:30', '09:30', '10:30', '11:30', '12:30'],
                        };
                        break;
                    case 'Radio Frecuencia Facial':
                        horariosObtenidos = {
                            Horarios: ['10:00', '10:30', '11:00', '11:30', '12:00'],
                        };
                        break;
                    // ...
                    case 'Adicional por zona plasma':
                        horariosObtenidos = {
                            Horarios: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
                        };
                        break;
                    case 'Plasma rico en plaquetas 1 zona':
                        horariosObtenidos = {
                            Horarios: ['08:30', '09:30', '10:30', '11:30', '12:30'],
                        };
                        break;
                    // ...
                    case 'Peptona músculo 1 ampolla + electrodos de regalo':
                        horariosObtenidos = {
                            Horarios: ['10:00', '10:30', '11:00', '11:30', '12:00'],
                        };
                        break;
                    case 'Peptonas anti age 1 ampolla':
                        horariosObtenidos = {
                            Horarios: ['09:30', '10:30', '11:30', '12:30', '13:30'],
                        };
                        break;
                    case 'Peptonas colageno 1 ampolla':
                        horariosObtenidos = {
                            Horarios: ['11:00', '11:30', '12:00', '12:30', '13:00'],
                        };
                        break;
                    // ...
                    case 'Masajes descontracturantes o relajantes 25 minutos':
                        horariosObtenidos = {
                            Horarios: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
                        };
                        break;
                    case 'Masajes descontracturantes o relajantes 55 minutos':
                        horariosObtenidos = {
                            Horarios: ['08:30', '09:30', '10:30', '11:30', '12:30'],
                        };
                        break;
                    case 'Masajes especiales 25 minutos':
                        horariosObtenidos = {
                            Horarios: ['10:00', '10:30', '11:00', '11:30', '12:00'],
                        };
                        break;
                    case 'Masajes especiales 55 minutos':
                        horariosObtenidos = {
                            Horarios: ['09:30', '10:30', '11:30', '12:30', '13:30'],
                        };
                        break;
                    // ...
                    case 'Crystal Balls':
                        horariosObtenidos = {
                            Horarios: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
                        };
                        break;
                    case 'Dermaplanig':
                        horariosObtenidos = {
                            Horarios: ['08:30', '09:30', '10:30', '11:30', '12:30'],
                        };
                        break;
                    case 'Extracciones':
                        horariosObtenidos = {
                            Horarios: ['10:00', '10:30', '11:00', '11:30', '12:00'],
                        };
                        break;
                    case 'Hydra facial':
                        horariosObtenidos = {
                            Horarios: ['09:30', '10:30', '11:30', '12:30', '13:30'],
                        };
                        break;

                    case 'Decoración de uña x1':
                        horariosObtenidos = {
                            Horarios: ['08:00', '08:30', '09:00', '09:30', '10:00'],
                        };
                        break;
                    case 'Decoración de uña x2':
                        horariosObtenidos = {
                            Horarios: ['09:00', '09:30', '10:00', '10:30', '11:00'],
                        };
                        break;
                    case 'Decoración de uña x3':
                        horariosObtenidos = {
                            Horarios: ['10:30', '11:00', '11:30', '12:00', '12:30'],
                        };
                        break;
                    case 'Decoración de uña x4':
                        horariosObtenidos = {
                            Horarios: ['08:30', '09:30', '10:30', '11:30', '12:30'],
                        };
                        break;
                    case 'Decoración de uña x5':
                        horariosObtenidos = {
                            Horarios: ['08:00', '09:00', '10:00', '11:00', '12:00'],
                        };
                        break;
                    case 'Decoración de uña x6':
                        horariosObtenidos = {
                            Horarios: ['09:30', '10:30', '11:30', '12:30', '13:30'],
                        };
                        break;
                    case 'Decoración de uña x7':
                        horariosObtenidos = {
                            Horarios: ['10:00', '11:00', '12:00', '13:00', '14:00'],
                        };
                        break;
                    case 'Decoración de uña x8':
                        horariosObtenidos = {
                            Horarios: ['08:30', '09:30', '10:30', '11:30', '12:30'],
                        };
                        break;
                    case 'Decoración de uña x9':
                        horariosObtenidos = {
                            Horarios: ['09:00', '10:00', '11:00', '12:00', '13:00'],
                        };
                        break;
                    case 'Decoración de uña x10':
                        horariosObtenidos = {
                            Horarios: ['08:30', '09:30', '10:30', '11:30', '12:30'],
                        };
                        break;
                    case 'Diseño french':
                        horariosObtenidos = {
                            Horarios: ['09:00', '09:30', '10:00', '10:30', '11:00'],
                        };
                        break;
                    case 'Esmaltado comun manos o pies':
                        horariosObtenidos = {
                            Horarios: ['08:30', '09:30', '10:30', '11:30', '12:30'],
                        };
                        break;
                    case 'Kapping gel':
                        horariosObtenidos = {
                            Horarios: ['10:00', '10:30', '11:00', '11:30', '12:00'],
                        };
                        break;
                    case 'Reconstrucción por uña':
                        horariosObtenidos = {
                            Horarios: ['09:30', '10:30', '11:30', '12:30', '13:30'],
                        };
                        break;
                    case 'Remoción esmaltado común':
                        horariosObtenidos = {
                            Horarios: ['08:00', '08:30', '09:00', '09:30', '10:00'],
                        };
                        break;
                    case 'Semipermanente en manos o pies':
                        horariosObtenidos = {
                            Horarios: ['10:00', '10:30', '11:00', '11:30', '12:00'],
                        };
                        break;
                    case 'Semipermanente en manos y pies':
                        horariosObtenidos = {
                            Horarios: ['09:00', '09:30', '10:00', '10:30', '11:00'],
                        };
                        break;
                    case 'Soft gel':
                        horariosObtenidos = {
                            Horarios: ['08:30', '09:30', '10:30', '11:30', '12:30'],
                        };
                        break;
                    case 'Spa de pies':
                        horariosObtenidos = {
                            Horarios: ['09:30', '10:30', '11:30', '12:30', '13:30'],
                        };
                        break;
                    case 'Spa de pies con semi':
                        horariosObtenidos = {
                            Horarios: ['10:00', '11:00', '12:00', '13:00', '14:00'],
                        };
                        break;
                    default:
                        console.error(`Servicio no reconocido: ${servicio}`);
                        break;

                }

                console.log('Horarios obtenidos:', horariosObtenidos);
                setHorarios(horariosObtenidos);

            } catch (error) {
                console.error('Error al obtener los horarios:', error);
            }
        };

        obtenerHorarios();

    }, [servicio]);

    return horarios.Horarios;

};

export default useHorarios;
