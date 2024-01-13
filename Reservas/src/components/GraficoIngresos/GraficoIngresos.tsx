import { Bar } from 'react-chartjs-2';

interface GraficoIngresosProps {
    data: {
        labels: string[]; // Días
        datasets: {
            label: string; // Etiqueta del conjunto de datos
            data: number[]; // Ingresos por día
            backgroundColor: string; // Color de fondo de las barras
        }[];
    };
    title: string;
    selectedMonth: string; // Nuevo prop para el filtro de mes
}

interface Dataset {
    label: string;
    data: number[];
}

interface ChartData {
    labels: string[];
    datasets: Dataset[];
}

const GraficoIngresos: React.FC<GraficoIngresosProps> = ({ data, title, selectedMonth }) => {

    const filterDataByMonth = (data: ChartData, targetMonth: string): ChartData => {
        // Convierte la fecha de cada etiqueta a un objeto Date para comparar meses
        const filteredData: ChartData = data.labels.reduce(
            (acc: ChartData, label: string, index: number) => {
                const date = new Date(label);
                const month = date.toLocaleString('en-US', { month: 'long' }); // Obtiene el nombre del mes

                // Filtra los datos que corresponden al mes deseado, semana y año
                if ( month.toLowerCase() === targetMonth.toLowerCase() ) {
                    // Agrega los datos correspondientes al nuevo conjunto de datos filtrado
                    acc.labels.push(data.labels[index]);
                    acc.datasets[0].data.push(data.datasets[0].data[index]);
                }

                return acc;
            },
            { labels: [], datasets: [{ label: data.datasets[0].label, data: [] }] }
        );

        return filteredData;
    };

    const filteredData = selectedMonth !== 'Todos' ? filterDataByMonth(data, selectedMonth) : data;



    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Ingresos',
                },
            },
        },
    };

    return (
        <div style={{ width: '800px', height: '400px' }}>
            <h2>{title}</h2>
            <Bar data={filteredData} options={options} />
        </div>
    );
};

export default GraficoIngresos;
