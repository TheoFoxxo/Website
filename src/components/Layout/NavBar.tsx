import { Config } from '../../utils/config'
import Link from 'next/link'
import styles from '../../styles/Navbar.module.scss'
import Container from "./Container";

export const NavBar = () => {
    return (
        <Container>
            <nav className={styles.nav}>
                <h2><Link className={styles.logo} href="/">Theodore</Link></h2>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/cuties">Cuties</Link></li>
                    <li><a onClick={() => alert("<3")}>Blogs</a></li>
                    <li><Link href="/about ">About Me</Link></li>
                </ul>
                <button className={styles.button} type="button"><Link href={Config.email} >Contact</Link></button>
            </nav>
        </Container>
    )
}