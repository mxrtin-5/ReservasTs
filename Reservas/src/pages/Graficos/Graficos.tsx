import { useState } from "react";
import GraficoClientes from "../../components/GraficoClientes/GraficoClientes";
import GraficoEdad from "../../components/GraficoEdad/GraficoEdad";
import GraficoIngresos from "../../components/GraficoIngresos/GraficoIngresos";
import styles from './Graficos.module.css';

const Graficos = () => {
    const [selectedMonth, setSelectedMonth] = useState('Todos');
    const [selectedYear, setSelectedYear] = useState('Todos');

    const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMonth(event.target.value);
    };

    const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(event.target.value);
    };

    const generateClientesData = () => {
        // Aquí puedes modificar tus datos según el mes y año seleccionados
        // Puedes usar selectedMonth y selectedYear en tu lógica de generación de datos
        // Por ahora, solo mostraré un ejemplo simple
        const dataPorMes = {
            Enero: [50, 80, 30, 100, 60],
            Todos: [30, 45, 25, 50, 35],
        };

        return {
            labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
            datasets: [
                {
                    label: 'Número de clientes',
                    data: dataPorMes[selectedMonth as keyof typeof dataPorMes],
                    backgroundColor: 'rgba(75,192,192,0.2)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderWidth: 1,
                },
            ],
        };
    };

    const generateIngresosData = () => {
        // Aquí también puedes modificar tus datos según el mes y año seleccionados
        const dataPorMes = {
            Enero: [800, 1200, 500, 1500, 1000],
            Todos: [1000, 1500, 800, 2000, 1200],
        };

        return {
            labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
            datasets: [
                {
                    label: 'Ingresos Diarios',
                    data: dataPorMes[selectedMonth as keyof typeof dataPorMes],
                    backgroundColor: 'rgba(75,192,192,0.6)',
                },
            ],
        };
    };

    const generateEdadData = () => {
        // Puedes mantener la generación de datos de edad como está, ya que no depende de meses o años
        return {
            labels: ['18-25', '26-35', '36-45', '46+'],
            datasets: [
                {
                    data: [10, 20, 15, 5],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                    ],
                },
            ],
        };
    };

    return (
        <div className={styles.graficos}>
            <main className={styles.main}>
                <label htmlFor="monthSelector">Filtrar por Mes:</label>
                <select id="monthSelector" value={selectedMonth} onChange={handleMonthChange}>
                    <option value="Todos">Todos</option>
                    <option value="Enero">Enero</option>
                    {/* Agrega más opciones de meses según sea necesario */}
                </select>

                <label htmlFor="yearSelector">Filtrar por Año:</label>
                <select id="yearSelector" value={selectedYear} onChange={handleYearChange}>
                    <option value="Todos">Todos</option>
                    <option value="2022">2022</option>
                </select>
            </main>
            <div className={styles.divGrafico}>
                <GraficoClientes data={generateClientesData()} title="Clientes" selectedMonth={selectedMonth} />
                <GraficoIngresos data={generateIngresosData()} title="Ingresos Diarios" selectedMonth={selectedMonth} />
            </div>
            <div className={styles.edad}>
                <GraficoEdad data={generateEdadData()} title="Distribución de Clientes por Edad" />
            </div>
        </div>
    );
}

export default Graficos;
