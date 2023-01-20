import styles from '@/styles/NavBar.module.scss'
import { Config } from '@/utils/config'

export const NavBar = () => {
    return (
        <div>
            <nav className={styles.nav}>
                <h2><a className={styles.logo} href="/">Theodore</a></h2>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a onClick={() => alert("Lazy FUICK")}>Blogs</a></li>
                    <li><a href="/cuties">Cuties</a></li>
                    <li><a href="/about ">About Me</a></li>
                </ul>
                <button className={styles.button} type="button"> <a href={Config.email} >Contact</a></button>
            </nav>
        </div>
    )
}