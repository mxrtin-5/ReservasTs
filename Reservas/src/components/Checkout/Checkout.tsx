import { Container, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import styles from './Checkout.module.css'
import { useTime } from "../../hooks/useTimes";

const Checkout: React.FC = () => {

    const [nombre, setNombre] = useState<string>('');

    const [apellido, setApellido] = useState<string>('');

    const [telefono, setTelefono] = useState<string>('');

    const [email, setEmail] = useState<string>('');

    const { selectedTime } = useTime();

    const checkoutStorageKey = "checkout_info";

    const userInfoString = localStorage.getItem(checkoutStorageKey);

    const handleCheckout = (e: React.FormEvent) => {
        e.preventDefault();

        const userInfo = {
            nombre,
            apellido,
            telefono,
            email,
            selectedTime
        };

        if (userInfoString) {
            const userInfo = JSON.parse(userInfoString);

            console.log('Nombre:', userInfo.nombre);
            console.log('Apellido:', userInfo.apellido);
            console.log('Teléfono:', userInfo.telefono);
            console.log('Email:', userInfo.email);
            console.log('Servicio Seleccionado:', userInfo.servicio);
            console.log('Horario Seleccionado:', userInfo.horario);
            console.log('Día Seleccionado:', userInfo.fecha);
        } else {
            console.error('No se encontró información de checkout en el localStorage.');
        }

        localStorage.setItem(checkoutStorageKey, JSON.stringify(userInfo));

        console.log('Nombre:', nombre);
        console.log('Apellido:', apellido);
        console.log('Teléfono:', telefono);
        console.log('Email:', email);
    };

    return (
        <Container className={styles.container} maxWidth="sm">
            <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
                <Typography variant="h4" gutterBottom>
                    Checkout
                </Typography>

                <form>
                    <TextField
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        margin="normal"
                    />

                    <TextField
                        label="Apellido"
                        variant="outlined"
                        fullWidth
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        margin="normal"
                    />

                    <TextField
                        label="Teléfono"
                        variant="outlined"
                        fullWidth
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        margin="normal"
                    />

                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        margin="normal"
                    />

                    <button
                        className={styles.btn}
                        onClick={handleCheckout}
                    >
                        Finalizar Reserva
                    </button>
                </form>

                <div>
                    {nombre && apellido && telefono && email ? (
                        <p>{`El pedido a nombre de ${nombre} ${apellido}, con el número ${telefono} y el email ${email}`}</p>
                    ) : (
                        <p>Alguno de los campos está indefinido.</p>
                    )}
                </div>
            </Paper>
        </Container>
    );
};

export default Checkout;