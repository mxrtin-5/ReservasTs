import { useState } from "react";
import styles from './IngresosData.module.css'



const IngresosData: React.FC = () => {

    const [cantidad, setCantidad] = useState<number>(0);

    const [descripcion, setDescripcion] = useState<string>('');

    const handleCantidadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCantidad(Number(event.target.value));
    };

    const handleDescripcionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescripcion(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Aquí puedes realizar una llamada a la API para guardar los datos
        // Por ahora, solo imprimiremos los datos en la consola
        console.log('Datos a enviar:', { cantidad, descripcion });

        setCantidad(0);
        setDescripcion('');
    };

    return (
        <div className={styles.divContainer}>
            <h2>Ingresos</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="number" placeholder="Cantidad" value={cantidad} onChange={handleCantidadChange} />
                <textarea placeholder="Descripción" value={descripcion} onChange={handleDescripcionChange} />
                <button type="submit">Agregar Ingreso</button>
            </form>
        </div>
    );
};

export default IngresosData;