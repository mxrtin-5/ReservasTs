import { Card, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import styles from './ServicioCard.module.css'
import SubServicioCard from "../SubServicioCard/SubServicioCard";


interface Subservicio {
    id: string;
    titulo: string;
    precio?: string;
    tiempo?: string;
    explicacion?: string;
}

interface Categoria {
    id: string;
    titulo: string;
    descripcion: string;
    path: string;
    subservicios: Subservicio[];
}

interface ServicioCardProps {
    servicio: Categoria;
    onSelect: (titulo: string) => void;
}

const ServicioCard: React.FC<ServicioCardProps> = ({ servicio, onSelect }) => {

    const [mostrarSubservicios, setMostrarSubservicios] = useState(false);

    const handleSelect = () => {
        setMostrarSubservicios(!mostrarSubservicios);
    };

    const handleSubservicioSelect = (subservicioTitulo: string) => {
        onSelect(subservicioTitulo);
    };

    return (
        <Card className={styles.cardContainer} onClick={handleSelect} style={{ cursor: "pointer" }}>
            <CardContent className={styles.cardContent}>
                <Typography variant="h5" component="div">
                    {servicio.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {servicio.descripcion}
                </Typography>
                {mostrarSubservicios && (
                    <div className={styles.gridContainer}>
                        {servicio.subservicios.map((subservicio) => (
                            <div key={subservicio.id}>
                                <SubServicioCard
                                    subservicio={subservicio}
                                    onSelect={handleSubservicioSelect}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default ServicioCard;

