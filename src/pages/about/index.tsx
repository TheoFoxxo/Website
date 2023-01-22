import Image from "next/image";
import { Layout } from '../../components/Layout/Layout'
import styles from '../../styles/about.module.sass'

export default function About() {

    const THEO = "./Images/hero/1.png";
    const THEO_BLOCKQUOTE = "Hello, my name is Theodore, and I enjoy making new friends and playing games.";

    return (
        <>
            <Layout />
            <div className={` ${styles.wrapper}, ${styles.body}`}>
                <div className={styles.hmm}>
                <article className={styles.article}>
                    <h1>About Me</h1>
                    <Image className={styles.img} src="/Images/hero/1.png" alt="ImCuteRight??"/>
                    <h2 className={styles.h2}><strong className={styles.strong}>^w^</strong></h2>
                    <blockquote className={styles.blockquote}>
                        {THEO_BLOCKQUOTE}
                    </blockquote>
                </article>
                </div>
            </div>
        </>
    )
}
