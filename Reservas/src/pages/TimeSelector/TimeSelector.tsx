import React, { useEffect, useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import useHorarios from "../../hooks/useHorarios";
import { useNavigate } from "react-router-dom";
import { useTime } from "../../hooks/useTimes";

interface TimeSelectorProps {
    selectedDate: Date;
    servicio: string;
}

const MAX_TURNOS_POR_HORARIO = 5;

const TimeSelector: React.FC<TimeSelectorProps> = ({ selectedDate, servicio }) => {

    const [turnosReservados, setTurnosReservados] = useState<{ [key: string]: number }>({});//* turnosReservados espera un objeto donde las claves son cadenas (strings) y los valores son números.

    const horarios = useHorarios(servicio);

    const { selectedTime, setSelectedTime } = useTime();

    const navigate = useNavigate();

    useEffect(() => {
        const getStorageKey = () => `reservas_${selectedDate.toLocaleString().slice(0, 10)}`;//*getStorageKey devuelve una cadena única utilizada como clave para almacenar los turnos reservados en el localStorage. La cadena generada es "reservas_" seguido de selectedDate formateada como una cadena en formato ISO 
        const storedTurnosReservados = localStorage.getItem(getStorageKey());

        if (storedTurnosReservados) {
            setTurnosReservados(JSON.parse(storedTurnosReservados));
        }

    }, [selectedDate]); //*cargar y actualizar los turnos reservados desde el almacenamiento local cuando la fecha seleccionada (selectedDate) cambia

    const handleTimeChange = (event: SelectChangeEvent<string>) => {//*SelectChangeEvent<string>. SelectChangeEvent es un tipo proporcionado por la librería @mui/material para representar eventos de cambio en un componente Select de Material-UI.
        const selectedTime = event.target.value as string;
        //*En un evento de cambio (onChange) de un componente Select, el valor seleccionado está disponible en event.target.value. En este caso, se está extrayendo ese valor y utilizando as string para decirle a
        //*TypeScript que lo interprete como una cadena (string). Esto puede ser necesario si TypeScript no puede inferir automáticamente el tipo correctamente.
        const dateTime = new Date(selectedTime);
        /*selectedTime es una cadena que representa la hora seleccionada en el formato de fecha y hora de JavaScript.
        Se utiliza new Date(selectedTime) para convertir esa cadena en un objeto Date.
        Esto es útil para realizar operaciones relacionadas con fechas y horas, y también para almacenar la información de la hora seleccionada en el estado del componente (setSelectedTime(dateTime)).
        En resumen, se está convirtiendo la cadena de tiempo seleccionado en un objeto Date para un manejo más fácil y preciso de las fechas en JavaScript.*/
        setSelectedTime(dateTime);
    };

    const generateTimeOptions = () => {

        if (horarios.length === 0) {
            return [];
        }

        const timeOptions = horarios.map((hour) => {
            const [hourPart, minutePart] = hour.split(":");
            const newDate = new Date(selectedDate);

            // Set hours in the local time zone
            newDate.setHours(Number(hourPart), Number(minutePart), 0, 0);

            return newDate.toISOString();

        });

        return timeOptions;

    };

    const timeOptions: string[] = generateTimeOptions();

    console.log(timeOptions);


    const handleBooking = () => {
        if (selectedTime) {
            const existingTurnos = turnosReservados[selectedTime.toLocaleString()] || 0;

            if (existingTurnos < MAX_TURNOS_POR_HORARIO) {
                const updatedTurnos = {
                    ...turnosReservados,
                    [selectedTime.toLocaleString()]: existingTurnos + 1,
                };

                // Guardar en localStorage con la versión actualizada
                const currentDateKey = selectedTime.toISOString().slice(0, 10);
                const getStorageKey = () => `reservas_${currentDateKey}`;
                localStorage.setItem(getStorageKey(), JSON.stringify(updatedTurnos));
                console.log(selectedTime.toLocaleString());
                // Guardar información adicional en localStorage
                const userInfo = {
                    fecha: selectedDate.toLocaleString(),
                    horario: selectedTime.toLocaleString(),
                    servicio,
                };

                const checkoutStorageKey = "checkout_info";
                localStorage.setItem(checkoutStorageKey, JSON.stringify(userInfo));

                navigate(`/checkout?fecha=${selectedDate.toISOString()}&horario=${selectedTime.toISOString()}&servicio=${encodeURIComponent(servicio)}`);
            } else {
                alert(`La cantidad máxima de turnos para este horario (${MAX_TURNOS_POR_HORARIO}) ha sido alcanzada.`);
                return;
            }
        }
    };

    const currentDate = new Date();

    return (
        <div>
            <p>{`Servicio Seleccionado: ${servicio}`}</p>
            <p>{`Fecha Seleccionada: ${selectedDate instanceof Date ? selectedDate.toLocaleDateString() : 'N/A'}`}</p>

            <Select placeholder="Selecciona un horario" onChange={handleTimeChange}>
                {timeOptions.map((time) => (
                    <MenuItem key={time} value={time}>
                        {new Date(time).toLocaleTimeString()}
                    </MenuItem>
                ))}
            </Select>

            {selectedTime && selectedDate >= currentDate && (
                <>
                    <Button variant="contained" color="primary" onClick={handleBooking}>
                        Reservar Turno
                    </Button>
                    <p>{`Turnos Reservados: ${turnosReservados[selectedTime.toISOString()] || 0} / ${MAX_TURNOS_POR_HORARIO}`}</p>
                </>
            )}
        </div>
    );
};

export default TimeSelector;
