import { useState } from "react";
import styles from './ServiciosData.module.css';

interface Categoria {
    id: string;
    titulo: string;
}

interface Servicio {
    id: string;
    titulo: string;
    precio: string;
    tiempo: string;
    explicacion: string;
    categoriaId: string;
}

const ServiciosData: React.FC = () => {
    const [titulo, setTitulo] = useState<string>('');
    const [precio, setPrecio] = useState<string>('');
    const [tiempo, setTiempo] = useState<string>('');
    const [explicacion, setExplicacion] = useState<string>('');
    const [categoria, setCategoria] = useState<string>(''); // Aquí guardaremos el ID de la categoría seleccionada
    const [servicios, setServicios] = useState<Servicio[]>([]);
    const [categorias] = useState<Categoria[]>([
        { id: 'categoriaA', titulo: 'Tratamientos Faciales' },
        { id: 'categoriaB', titulo: 'Blanqueamientos' },
        { id: 'categoriaC', titulo: 'Depilacion Definitiva' },
        { id: 'categoriaD', titulo: 'Alta frecuencia' },
        { id: 'categoriaE', titulo: 'Radio frecuencia' },
        { id: 'categoriaF', titulo: 'Plasma rico en plaquetas' },
        { id: 'categoriaG', titulo: 'Peptonas' },
        { id: 'categoriaH', titulo: 'Masajes' },
        { id: 'categoriaI', titulo: 'Faciales' },
        { id: 'categoriaJ', titulo: 'Manicuria' },
    ]);

    const handleTituloChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitulo(event.target.value);
    };

    const handlePrecioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrecio(event.target.value);
    };

    const handleTiempoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTiempo(event.target.value);
    };

    const handleExplicacionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setExplicacion(event.target.value);
    };

    const handleCategoriaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCategoria(event.target.value);
    };

    const handleAgregarServicio = () => {
        const nuevoServicio: Servicio = {
            id: `servicio${servicios.length + 1}`,
            titulo,
            precio,
            tiempo,
            explicacion,
            categoriaId: categoria,
        };

        setServicios([...servicios, nuevoServicio]);

        // Limpiar los campos después de agregar un servicio
        setTitulo('');
        setPrecio('');
        setTiempo('');
        setExplicacion('');
        setCategoria('');
    };

    return (
        <div>
            <h2>Servicios</h2>
            <form className={styles.form}>
                <label htmlFor="titulo">Título:</label>
                <input type="text" id="titulo" value={titulo} onChange={handleTituloChange} />

                <label htmlFor="precio">Precio:</label>
                <input type="text" id="precio" value={precio} onChange={handlePrecioChange} />

                <label htmlFor="tiempo">Tiempo:</label>
                <input type="text" id="tiempo" value={tiempo} onChange={handleTiempoChange} />

                <label htmlFor="explicacion">Explicación:</label>
                <input type="text" id="explicacion" value={explicacion} onChange={handleExplicacionChange} />

                <label htmlFor="categoria">Categoría:</label>
                <select id="categoria" value={categoria} onChange={handleCategoriaChange}>
                    <option value="">Selecciona una categoría</option>
                    {categorias.map((c) => (
                        <option key={c.id} value={c.id}>
                            {c.titulo}
                        </option>
                    ))}
                </select>

                <button type="button" onClick={handleAgregarServicio}>
                    Agregar Servicio
                </button>
            </form>

            <h3>Servicios Agregados:</h3>
            <ul>
                {servicios.map((s) => (
                    <li key={s.id}>
                        {s.titulo} - {s.precio} - {s.tiempo} - {s.explicacion} - Categoría: {categorias.find(c => c.id === s.categoriaId)?.titulo}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServiciosData;
