import { Doughnut } from 'react-chartjs-2';

interface GraficoEdadProps {
    data: {
        labels: string[]; // Rangos de edad
        datasets: {
            data: number[]; // Número de clientes en cada rango de edad
            backgroundColor: string[]; // Colores de fondo de las porciones del pastel
        }[];
    };
    title: string;
}

const GraficoEdad: React.FC<GraficoEdadProps> = ({ data, title }) => {
    
    const options = {
        maintainAspectRatio: true, // Permite personalizar el tamaño del gráfico
        plugins: {
            legend: {
                display: true,
            },
        },
        hoverOffset: 5,
    };

    return (
        <div style={{ width: '400px', height: '400px' }}>
            <h2>{title}</h2>
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default GraficoEdad;
