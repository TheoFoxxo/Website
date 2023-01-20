import styles from '@/styles/NavBar.module.scss'
import { Config } from '@/utils/config'
import Link from 'next/link'

export const NavBar = () => {
    return (
        <div>
            <nav className={styles.nav}>
                <h2><a className={styles.logo} href="/">Theodore</a></h2>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><a onClick={() => alert("Lazy FUICK")}>Blogs</a></li>
                    <li><Link href="/cuties">Cuties</Link></li>
                    <li><Link href="/about ">About Me</Link></li>
                </ul>
                <button className={styles.button} type="button"> <a href={Config.email} >Contact</a></button>
            </nav>
        </div>
    )
}