import { Config } from '../../utils/config'
import Link from 'next/link'
import styles from '../../styles/Navbar.module.scss'

export const NavBar = () => {
    const hmm = "mailto:"+Config.email
    return (
            <div className='place-items-center'>
            <em  className={styles.em}>No Mobile Support :{"("} It Coming soon tho :3</em>
            <nav className={styles.nav}>
                <h2>
                    <Link className={styles.logo} href="/">
                        Theo
                    </Link>
                </h2>

                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/cuties">Cuties</Link></li>
                 {/* <li><a onClick={alertv2}>Blogs</a></li> */}
                </ul>
                <button type="button"><Link href={hmm} >Contact</Link></button>
            </nav>
            </div>
    )
    
    function alertv2() {
        alert("lazy")
    } 
}
