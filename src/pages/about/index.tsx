import Image from "next/image";
import styles from '../../styles/about.module.scss'
import { Config } from '../../utils/config'

export default function About() {

    const THEO_BLOCKQUOTE = "Hello, my name is Theodore, and I enjoy making new friends and playing games.";

    return (
        <>
            <div className={` ${styles.wrapper}, ${styles.body}`}>
                <div className={styles.hmm}>
                <article className={styles.article}>
                    <h1>About Me</h1>
                    <img className={styles.img} src={Config.avatar} alt="ImCuteRight??"/>
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
