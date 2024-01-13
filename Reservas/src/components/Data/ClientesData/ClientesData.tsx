import { useState } from 'react';
import styles from './ClientesData.module.css'


const ClientesData: React.FC = () => {

    const [nombre, setNombre] = useState<string>('');

    const [edad, setEdad] = useState<string>('');

    const [motivoConsulta, setMotivoConsulta] = useState<string>('');

    const handleNombreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNombre(event.target.value);
    };

    const handleEdadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEdad(event.target.value);
    };

    const handleMotivoConsultaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMotivoConsulta(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Aquí puedes realizar una llamada a la API para guardar los datos
        // Por ahora, solo imprimiremos los datos en la consola
        console.log('Datos a enviar:', { nombre, edad, motivoConsulta });

        // Limpia el formulario después de enviar
        setNombre('');
        setEdad('');
        setMotivoConsulta('');
    };

    return (
        <div className={styles.divContainer}>
            <h2>Clientes</h2>

            <form onSubmit={handleSubmit} className={styles.form} action="">

                <input type="text" placeholder="Nombre" value={nombre} onChange={handleNombreChange} />
                <input type="text" placeholder="Edad" value={edad} onChange={handleEdadChange} />
                <textarea placeholder="Motivo consulta" value={motivoConsulta} onChange={handleMotivoConsultaChange} />

                <button type="submit">Agregar cliente</button>

            </form>
        </div>
    );
};

export default ClientesData;