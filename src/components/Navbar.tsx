import Link from "next/link";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
    return (
        <>
            <section className={styles.navbar}>
                <ul className={styles.navbarList}>
                    <li><Link href="">Home</Link></li>
                    <li><Link href="">Sobre</Link></li>
                    <li><Link href="">Skills</Link></li>
                    <li><Link href="">Projetos</Link></li>
                    <li><Link href="">Contato</Link></li>
                </ul>
            </section>
        </>
    )
}