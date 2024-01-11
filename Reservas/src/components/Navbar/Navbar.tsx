import { Link } from "react-router-dom";
import styles from './Navbar.module.css'


const Navbar = () => {
    return (
        <header className={styles.navbar}>
            <Link className={styles.titulo} to={'/'}><h1>Nombre</h1></Link>

            <div className={styles.divP}>
                <Link className={styles.link} to={'/reservas'} >Reservas</Link>
                <Link className={styles.link} to={'/reservas'} >Reservas</Link>
                <Link className={styles.link} to={'/reservas'} >Reservas</Link>
                <Link className={styles.link} to={'/reservas'} >Reservas</Link>
            </div>
        </header>
    );
}

export default Navbar;