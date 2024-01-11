import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import styles from './SubServicioCard.module.css'


interface Subservicio {
    id: string;
    titulo: string;
    precio?: string;
    tiempo?: string;
    explicacion?: string;
}


const SubServicioCard: React.FC<{ subservicio: Subservicio; onSelect: (titulo: string) => void }> = ({
    subservicio,
    onSelect,
}) => (
    <Box sx={{ flexGrow: 2 }}>
        <Grid container
            direction="row"
            marginTop={5}>
            <Card style={{ width: 300, height: 250, backgroundColor: "#e4e4e4" }}>
                <CardContent>
                    <Typography variant="h6" component="div">
                        {subservicio.titulo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {subservicio.explicacion}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Precio: {subservicio.precio}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Tiempo: {subservicio.tiempo}
                    </Typography>
                    <button className={styles.btn} onClick={() => onSelect(subservicio.titulo)}>
                        Seleccionar
                    </button>
                </CardContent>
            </Card>
        </Grid>
    </Box>
);


export default SubServicioCard