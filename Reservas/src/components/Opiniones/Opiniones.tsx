import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import styles from './Opiniones.module.css'

interface Opinion {
    calificacion: number;
    comentario: string;
}

const Opiniones: React.FC = () => {

    const [opinion, setOpinion] = useState<Opinion>({
        calificacion: 0,
        comentario: "",
    });

    const [error, setError] = useState<string | null>(null);

    const handleCalificacionChange = (newRating: number) => {
        setOpinion((prevOpinion) => ({
            ...prevOpinion,
            calificacion: newRating,
        }));
    };

    const handleComentarioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOpinion((prevOpinion) => ({
            ...prevOpinion,
            comentario: e.target.value,
        }));
    };

    const enviarOpinion = () => {

        if (opinion.calificacion === 0) {
            setError('La calificación es obligatoria.');
            console.log(error);
            return;
        }

        if (opinion.comentario.trim() === '') {
            setError('El comentario es obligatorio.');
            console.log(error);
            return;
        }

        setOpinion({
            calificacion: 0,
            comentario: "",
        });

        console.log(opinion);

        setError(null);

    };

    return (
        <div className={styles.container}>
            <Typography variant="h4" gutterBottom>
                Deja tu Opinión
            </Typography>

            <ReactStars
                count={5}
                size={60}
                value={opinion.calificacion}
                onChange={handleCalificacionChange}
                activeColor="#ffd700"
            />

            <TextField
                label="Comentario"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={opinion.comentario}
                onChange={handleComentarioChange}
                margin="normal"
            />

            <Button
                variant="contained"
                color="primary"
                onClick={enviarOpinion}
                style={{ marginTop: "16px" }}
            >
                Enviar Opinión
            </Button>
        </div>
    );
};

export default Opiniones;