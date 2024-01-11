import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useState } from 'react';
import TimeSelector from '../TimeSelector/TimeSelector';
import styles from './Reservas.module.css'
import { useParams } from 'react-router-dom';

const Reservas: React.FC = () => {

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const { titulo: selectedService } = useParams<{ titulo: string }>();

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    console.log(selectedService);
    

    return (
        <section className={styles.container}>

            <h1>{selectedService}</h1>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                    value={selectedDate}
                    onChange={handleDateChange}
                />
                {selectedDate && selectedService && (
                    <TimeSelector selectedDate={selectedDate} servicio={selectedService} />
                )}
            </LocalizationProvider>

        </section>
    );
}

export default Reservas;