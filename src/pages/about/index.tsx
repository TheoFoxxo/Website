import Image from "next/image";
import styles from '../../styles/about.module.scss'
import { Config } from '../../utils/config'
import Layout from '../../components/Layout/Layout'
import styless from '../../styles/cuties.module.scss'
import Footer from '../../components/Layout/Footer'
import UseLanyard from "@/components/inter/UseLanyard";
import Space from "@/components/Layout/Space";

export default function About() {

    const THEO_BLOCKQUOTE = "Hello, my name is Theodore, and I enjoy making new friends and playing games.";
    const THEO_1 = "I'm a full stack web developer who enjoys working on projects.";

    return (
        <Layout>
            <div className={` ${styles.wrapper}, ${styles.body}`}>
                <p className={styless.p}><strong>About</strong></p>
                <h2 className={styless.owos}></h2>
                <Space />
                <UseLanyard discordid="664017668629856266"/>
                <Space />
                <div className={styles.hmm}>
                    <article className={styles.article}>
                        {/* <img className={styles.img} src={Config.avatar} alt="ImCuteRight??"/> */}
                        <blockquote className={styles.blockquote}>
                            {THEO_BLOCKQUOTE}
                        </blockquote>
                        <blockquote className={styles.blockquote}>
                            {THEO_1}
                        </blockquote>
                    </article>
                </div>
            </div>

            <Space />
        </Layout >
    )
}
