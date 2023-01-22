import styles from '../../styles/NavBar.module.scss'
import { Config } from '@/utils/config'
import Link from 'next/link'

export const NavBar = () => {
    return (
        <div>
            <nav className={styles.nav}>
                <h2><Link className={styles.logo} href="/">Theodore</Link></h2>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/cuties">Cuties</Link></li>
                    <li><Link href="/about ">About Me</Link></li>
                </ul>
                <button className={styles.button} type="button"><Link href={Config.email} >Contact</Link></button>
            </nav>
        </div>
    )
}