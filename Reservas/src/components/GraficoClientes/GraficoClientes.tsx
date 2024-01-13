import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

interface ClienteData {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
    }[];
}

interface GraficoClientesProps {
    data: ClienteData;
    title: string;
    selectedMonth: string;
}

const GraficoClientes: React.FC<GraficoClientesProps> = ({ data, title, selectedMonth }) => {

    // Define la función filterDataByMonth en un archivo separado si es necesario
    const filterDataByMonth = (data: ClienteData , targetMonth: string): ClienteData  => {
        const filteredData: ClienteData  = {
            labels: [],
            datasets: [],
        };

        if (targetMonth === 'Todos') {
            return data;
        }

        // Filtra los datos por el mes seleccionado
        data.labels.forEach((label: string, index: number) => {
            const date = new Date(label);
            const month = date.toLocaleString('en-US', { month: 'long' });

            if (month.toLowerCase() === targetMonth.toLowerCase()) {
                filteredData.labels.push(label);

                // Copia los datos de cada conjunto de datos presente en el original
                data.datasets.forEach((dataset, datasetIndex) => {
                    if (!filteredData.datasets[datasetIndex]) {
                        // Si aún no existe el conjunto de datos en el resultado, inicialízalo
                        filteredData.datasets[datasetIndex] = { label: dataset.label, data: [] };
                    }

                    filteredData.datasets[datasetIndex].data.push(dataset.data[index]);
                });
            }
        });

        return filteredData;
    };

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
                    text: 'Número de clientes',
                },
            },
        },
    };

    const filteredData: ClienteData = filterDataByMonth(data, selectedMonth);

    return (
        <div style={{ width: '800px', height: '400px' }}>
            <h2>{title}</h2>
            <Bar data={filteredData} options={options} />
        </div>
    );
};

export default GraficoClientes;
