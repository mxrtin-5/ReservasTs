import { Container, Grid } from '@mui/material'
import ServicioCard from '../../components/ServicioCard/ServicioCard';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css'

const Home = () => {

    const navigate = useNavigate();

    const servicios = [
        {
            id: 'categoriaA',
            titulo: 'Tratamientos Faciales',
            descripcion: 'Variedad de tratamientos faciales para realzar tu belleza.',
            path: `/reservas`,
            subservicios: [
                { id: 'servicioA2', titulo: 'Botox en entrecejo', precio: '$200', tiempo: '45 minutos', explicacion: 'Tratamiento para reducir arrugas en el entrecejo.' },
                { id: 'servicioA3', titulo: 'Hidrolipoclasia', precio: '$150', tiempo: '60 minutos', explicacion: 'Procedimiento para eliminar grasa localizada mediante ultrasonido.' },
                { id: 'servicioA4', titulo: 'Hidroxiapatita', precio: '$180', tiempo: '50 minutos', explicacion: 'Relleno dérmico para mejorar la apariencia de la piel.' },
                { id: 'servicioA5', titulo: 'Sculptra', precio: '$250', tiempo: '75 minutos', explicacion: 'Inyección para estimular la producción de colágeno.' },
                { id: 'servicioA6', titulo: 'Botox en patas de gallo', precio: '$180', tiempo: '40 minutos', explicacion: 'Tratamiento para reducir líneas de expresión alrededor de los ojos.' },
                { id: 'servicioA7', titulo: 'Botox frontal', precio: '$200', tiempo: '45 minutos', explicacion: 'Tratamiento para suavizar las líneas de la frente.' },
                { id: 'servicioA8', titulo: 'Relleno de labios', precio: '$150', tiempo: '30 minutos', explicacion: 'Relleno dérmico para dar volumen y definición a los labios.' },
                { id: 'servicioA9', titulo: 'Relleno de menton', precio: '$170', tiempo: '35 minutos', explicacion: 'Relleno dérmico para mejorar el contorno del mentón.' },
                { id: 'servicioA10', titulo: 'Relleno de ojeras', precio: '$120', tiempo: '25 minutos', explicacion: 'Tratamiento para reducir la apariencia de ojeras.' },
                { id: 'servicioA11', titulo: 'Botox full face', precio: '$300', tiempo: '90 minutos', explicacion: 'Tratamiento completo de Botox para toda la cara.' },
                { id: 'servicioA12', titulo: 'Relleno de mandibula', precio: '$200', tiempo: '40 minutos', explicacion: 'Relleno dérmico para mejorar la apariencia de la mandíbula.' },
                { id: 'servicioA13', titulo: 'Relleno de surcos', precio: '$180', tiempo: '35 minutos', explicacion: 'Relleno dérmico para suavizar los surcos faciales.' },
                { id: 'servicioA14', titulo: 'Rinomodelacion', precio: '$220', tiempo: '50 minutos', explicacion: 'Procedimiento para mejorar la forma y apariencia de la nariz.' },
            ],
        },
        {
            id: 'categoriaB',
            titulo: 'Blanqueamientos',
            descripcion: 'Servicios de blanqueamiento para una sonrisa radiante.',
            path: `/reservas`,
            subservicios: [
                { id: 'servicioB1', titulo: 'Blanqueamiento x1 zona', precio: '$120', tiempo: '30 minutos', explicacion: 'Tratamiento para blanquear dientes en una zona específica.' },
            ],
        },
        {
            id: 'categoriaC',
            titulo: 'Depilacion Definitiva',
            descripcion: 'Eliminación permanente del vello no deseado.',
            path: `/reservas`,
            subservicios: [
                { id: 'servicioC1', titulo: 'Brazos', precio: '$80', tiempo: '20 minutos', explicacion: 'Depilación definitiva de brazos.' },
                { id: 'servicioC2', titulo: 'Bozo + Axilas', precio: '$120', tiempo: '30 minutos', explicacion: 'Combo de depilación para bozo y axilas.' },
                { id: 'servicioC3', titulo: 'Pelvis + tira de cola', precio: '$150', tiempo: '40 minutos', explicacion: 'Combo de depilación para pelvis y tira de cola.' },
                { id: 'servicioC4', titulo: 'Pelvis + tira de cola + axilas', precio: '$180', tiempo: '50 minutos', explicacion: 'Combo completo de depilación para pelvis, tira de cola y axilas.' },
                { id: 'servicioC5', titulo: 'Espalda + abdomen + Pecho', precio: '$200', tiempo: '60 minutos', explicacion: 'Combo completo de depilación para espalda, abdomen y pecho.' },
                { id: 'servicioC6', titulo: 'Depi Abdomen', precio: '$90', tiempo: '25 minutos', explicacion: 'Depilación definitiva de abdomen.' },
                { id: 'servicioC7', titulo: 'Depi Axilas', precio: '$70', tiempo: '15 minutos', explicacion: 'Depilación definitiva de axilas.' },
                { id: 'servicioC8', titulo: 'Depilacion Definitiva Cuerpo Completo.', precio: '$250', tiempo: '90 minutos', explicacion: 'Depilación completa del cuerpo de forma definitiva.' },
                { id: 'servicioC9', titulo: 'Espalda', precio: '$120', tiempo: '40 minutos', explicacion: 'Depilación definitiva de espalda.' },
                { id: 'servicioC10', titulo: 'Gluteos', precio: '$100', tiempo: '30 minutos', explicacion: 'Depilación definitiva de glúteos.' },
                { id: 'servicioC11', titulo: 'Media pierna', precio: '$80', tiempo: '25 minutos', explicacion: 'Depilación definitiva de media pierna.' },
                { id: 'servicioC12', titulo: 'Nuca', precio: '$60', tiempo: '15 minutos', explicacion: 'Depilación definitiva de nuca.' },
                { id: 'servicioC13', titulo: 'Orejas', precio: '$40', tiempo: '10 minutos', explicacion: 'Depilación definitiva de orejas.' },
                { id: 'servicioC14', titulo: 'Pecho', precio: '$100', tiempo: '30 minutos', explicacion: 'Depilación definitiva de pecho.' },
                { id: 'servicioC15', titulo: 'Pelvis completa', precio: '$150', tiempo: '45 minutos', explicacion: 'Depilación definitiva de pelvis completa.' },
                { id: 'servicioC16', titulo: 'Pierna entera', precio: '$120', tiempo: '50 minutos', explicacion: 'Depilación definitiva de pierna entera.' },
                { id: 'servicioC17', titulo: 'Pies', precio: '$50', tiempo: '15 minutos', explicacion: 'Depilación definitiva de pies.' },
                { id: 'servicioC18', titulo: 'Tira de cola', precio: '$60', tiempo: '20 minutos', explicacion: 'Depilación definitiva de tira de cola.' },
            ],
        },
        {
            id: 'categoriaD',
            titulo: 'Alta frecuencia',
            descripcion: 'Variedad de tratamientos de alta frecuencia para realzar tu belleza.',
            path: `/reservas`,
            subservicios: [
                { id: 'servicioD1', titulo: 'Alta frecuencia por 1 zona', precio: '$120', tiempo: '30 minutos', explicacion: 'Tratamiento de alta frecuencia para una zona específica.' },
            ],
        },
        {
            id: 'categoriaE',
            titulo: 'Radio frecuencia',
            descripcion: 'Variedad de tratamientos faciales para realzar tu belleza.',
            path: `/reservas`,
            subservicios: [
                { id: 'servicioE1', titulo: 'Radio frecuencia 1 zona', precio: '$140', tiempo: '35 minutos', explicacion: 'Tratamiento de radio frecuencia para una zona específica.' },
                { id: 'servicioE2', titulo: 'Radio Frecuencia Facial', precio: '$180', tiempo: '50 minutos', explicacion: 'Tratamiento de radio frecuencia para todo el rostro.' },
            ],
        },
        {
            id: 'categoriaF',
            titulo: 'Plasma rico en plaquetas',
            descripcion: 'Variedad de tratamientos de alta frecuencia para realzar tu belleza.',
            path: `/reservas`,
            subservicios: [
                { id: 'servicioF1', titulo: 'Adicional por zona plasma', precio: '$50', tiempo: '15 minutos', explicacion: 'Adicional por zona en tratamiento de plasma rico en plaquetas.' },
                { id: 'servicioF2', titulo: 'Plasma rico en plaquetas 1 zona', precio: '$180', tiempo: '45 minutos', explicacion: 'Tratamiento de plasma rico en plaquetas para una zona específica.' },
            ],
        },
        {
            id: 'categoriaG',
            titulo: 'Peptonas',
            descripcion: 'Variedad de tratamientos faciales para realzar tu belleza.',
            path: `/reservas`,
            subservicios: [
                { id: 'servicioG1', titulo: 'Peptona músculo 1 ampolla + electrodos de regalo', precio: '$160', tiempo: '40 minutos', explicacion: 'Tratamiento de peptonas para músculos con electrodos de regalo.' },
                { id: 'servicioG2', titulo: 'Peptonas anti age 1 ampolla', precio: '$120', tiempo: '30 minutos', explicacion: 'Tratamiento de peptonas anti envejecimiento.' },
                { id: 'servicioG3', titulo: 'Peptonas colageno 1 ampolla', precio: '$130', tiempo: '35 minutos', explicacion: 'Tratamiento de peptonas con colágeno.' },
            ],
        },
        {
            id: 'categoriaH',
            titulo: 'Masajes',
            descripcion: 'Variedad de tratamientos de alta frecuencia para realzar tu belleza.',
            path: `/reservas`,
            subservicios: [
                { id: 'servicioH1', titulo: 'Masajes descontracturantes o relajantes 25 minutos', precio: '$70', tiempo: '25 minutos', explicacion: 'Masajes para aliviar contracturas o brindar relajación en 25 minutos.' },
                { id: 'servicioH2', titulo: 'Masajes descontracturantes o relajantes 55 minutos', precio: '$120', tiempo: '55 minutos', explicacion: 'Masajes para aliviar contracturas o brindar relajación en 55 minutos.' },
                { id: 'servicioH3', titulo: 'Masajes especiales 25 minutos', precio: '$80', tiempo: '25 minutos', explicacion: 'Masajes especiales para necesidades específicas en 25 minutos.' },
                { id: 'servicioH4', titulo: 'Masajes especiales 55 minutos', precio: '$150', tiempo: '55 minutos', explicacion: 'Masajes especiales para necesidades específicas en 55 minutos.' },
            ],
        },
        {
            id: 'categoriaI',
            titulo: 'Faciales',
            descripcion: 'Variedad de tratamientos faciales para realzar tu belleza.',
            path: `/reservas`,
            subservicios: [
                { id: 'servicioI1', titulo: 'Crystal Balls', precio: '$180', tiempo: '40 minutos', explicacion: 'Tratamiento facial con Crystal Balls para mejorar la textura de la piel.' },
                { id: 'servicioI2', titulo: 'Dermaplanig', precio: '$150', tiempo: '35 minutos', explicacion: 'Exfoliación y eliminación de vellos faciales con Dermaplaning.' },
                { id: 'servicioI3', titulo: 'Extracciones', precio: '$120', tiempo: '30 minutos', explicacion: 'Eliminación de impurezas y puntos negros mediante extracciones.' },
                { id: 'servicioI4', titulo: 'Hydra facial', precio: '$200', tiempo: '45 minutos', explicacion: 'Tratamiento facial hidratante y rejuvenecedor con tecnología Hydra Facial.' },
                { id: 'servicioI5', titulo: 'Limpieza profunda + cauterización', precio: '$250', tiempo: '60 minutos', explicacion: 'Limpieza profunda facial con cauterización para una piel radiante.' },
                { id: 'servicioI6', titulo: 'Limpieza cutis c/ espátula ultrasónica', precio: '$160', tiempo: '40 minutos', explicacion: 'Limpieza de cutis utilizando espátula ultrasónica para una piel suave.' },
                { id: 'servicioI7', titulo: 'Microneedling', precio: '$220', tiempo: '50 minutos', explicacion: 'Estimulación de colágeno mediante micropunciones para mejorar la piel.' },
                { id: 'servicioI8', titulo: 'Peeling Algas', precio: '$180', tiempo: '45 minutos', explicacion: 'Peeling facial con extracto de algas para renovar la piel.' },
                { id: 'servicioI9', titulo: 'Peeling mecanico + punta de diamante', precio: '$190', tiempo: '50 minutos', explicacion: 'Exfoliación con peeling mecánico y punta de diamante para una piel suave.' },
                { id: 'servicioI10', titulo: 'Peeling quimico', precio: '$200', tiempo: '55 minutos', explicacion: 'Peeling facial químico para mejorar la textura y apariencia de la piel.' },
            ],
        },
        {
            id: 'categoriaJ',
            titulo: 'Manicuria',
            descripcion: 'Variedad de tratamientos faciales para realzar tu belleza.',
            path: `/reservas`,
            subservicios: [
                { id: 'servicioJ1', titulo: 'Decoración de uña x1', precio: '$180', tiempo: '40 minutos', explicacion: 'Tratamiento facial con Crystal Balls para mejorar la textura de la piel.' },
                { id: 'servicioJ2', titulo: 'Decoración de uña x2', precio: '$150', tiempo: '35 minutos', explicacion: 'Exfoliación y eliminación de vellos faciales con Dermaplaning.' },
                { id: 'servicioJ3', titulo: 'Decoración de uña x3', precio: '$120', tiempo: '30 minutos', explicacion: 'Eliminación de impurezas y puntos negros mediante extracciones.' },
                { id: 'servicioJ4', titulo: 'Decoración de uña x4', precio: '$200', tiempo: '45 minutos', explicacion: 'Tratamiento facial hidratante y rejuvenecedor con tecnología Hydra Facial.' },
                { id: 'servicioJ5', titulo: 'Decoración de uña x5', precio: '$250', tiempo: '60 minutos', explicacion: 'Limpieza profunda facial con cauterización para una piel radiante.' },
                { id: 'servicioJ6', titulo: 'Decoración de uña x6', precio: '$160', tiempo: '40 minutos', explicacion: 'Limpieza de cutis utilizando espátula ultrasónica para una piel suave.' },
                { id: 'servicioJ7', titulo: 'Decoración de uña x7', precio: '$220', tiempo: '50 minutos', explicacion: 'Estimulación de colágeno mediante micropunciones para mejorar la piel.' },
                { id: 'servicioJ8', titulo: 'Decoración de uña x8', precio: '$180', tiempo: '45 minutos', explicacion: 'Peeling facial con extracto de algas para renovar la piel.' },
                { id: 'servicioJ9', titulo: 'Decoración de uña x9', precio: '$190', tiempo: '50 minutos', explicacion: 'Exfoliación con peeling mecánico y punta de diamante para una piel suave.' },
                { id: 'servicioJ10', titulo: 'Decoración de uña x10', precio: '$200', tiempo: '55 minutos', explicacion: 'Peeling facial químico para mejorar la textura y apariencia de la piel.' },
                { id: 'servicioJ11', titulo: 'Diseño french', precio: '$200', tiempo: '55 minutos', explicacion: 'Peeling facial químico para mejorar la textura y apariencia de la piel.' },
                { id: 'servicioJ12', titulo: 'Esmaltado comun manos o pies', precio: '$200', tiempo: '55 minutos', explicacion: 'Peeling facial químico para mejorar la textura y apariencia de la piel.' },
                { id: 'servicioJ13', titulo: 'Kapping gel', precio: '$200', tiempo: '55 minutos', explicacion: 'Peeling facial químico para mejorar la textura y apariencia de la piel.' },
                { id: 'servicioJ14', titulo: 'Reconstrucción por uña', precio: '$200', tiempo: '55 minutos', explicacion: 'Peeling facial químico para mejorar la textura y apariencia de la piel.' },
                { id: 'servicioJ15', titulo: 'Remoción esmaltado común', precio: '$200', tiempo: '55 minutos', explicacion: 'Peeling facial químico para mejorar la textura y apariencia de la piel.' },
                { id: 'servicioJ16', titulo: 'Semipermanente en manos o pies', precio: '$200', tiempo: '55 minutos', explicacion: 'Peeling facial químico para mejorar la textura y apariencia de la piel.' },
                { id: 'servicioJ17', titulo: 'Semipermanente en manos y pies', precio: '$200', tiempo: '55 minutos', explicacion: 'Peeling facial químico para mejorar la textura y apariencia de la piel.' },
                { id: 'servicioJ18', titulo: 'Soft gel', precio: '$200', tiempo: '55 minutos', explicacion: 'Peeling facial químico para mejorar la textura y apariencia de la piel.' },
                { id: 'servicioJ19', titulo: 'Spa de pies', precio: '$200', tiempo: '55 minutos', explicacion: 'Peeling facial químico para mejorar la textura y apariencia de la piel.' },
                { id: 'servicioJ20', titulo: 'Spa de pies con semi', precio: '$200', tiempo: '55 minutos', explicacion: 'Peeling facial químico para mejorar la textura y apariencia de la piel.' },
            ],
        },
    ];

    const handleServiceSelect = (titulo: string) => {
        navigate(`/reservas/${encodeURIComponent(titulo)}`);
    };

    return (
        <div className={styles.cardContainer}>
            <h1>Pagina inicio</h1>
            <Container>
                <Grid container spacing={3}>
                    {servicios.map((servicio) => (
                        <ServicioCard
                            key={servicio.id}
                            servicio={servicio}
                            onSelect={handleServiceSelect}
                        />
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default Home;

/* 
//!asi debe quedar con un fetch a la db
import { Container, Grid } from '@mui/material';
import ServicioCard from '../../components/ServicioCard/ServicioCard';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'; // Importa useState y useEffect
import styles from './Home.module.css';

const Home = () => {
    const navigate = useNavigate();
    const [servicios, setServicios] = useState<any[]>([]);

    useEffect(() => {
        // Aquí debes realizar la lógica para obtener los servicios desde la base de datos
        // Por ahora, solo utilizo un array vacío como ejemplo
        // Reemplaza esta lógica con la llamada real a tu base de datos
        setServicios([]);
    }, []); // La dependencia vacía asegura que useEffect se ejecute solo una vez al montar el componente

    const handleServiceSelect = (titulo: string) => {
        navigate(`/reservas/${encodeURIComponent(titulo)}`);
    };

    return (
        <div className={styles.cardContainer}>
            <h1>Página de inicio</h1>
            <Container>
                <Grid container spacing={3}>
                    {servicios.map((servicio) => (
                        <ServicioCard
                            key={servicio.id}
                            servicio={servicio}
                            onSelect={handleServiceSelect}
                        />
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default Home;
*/