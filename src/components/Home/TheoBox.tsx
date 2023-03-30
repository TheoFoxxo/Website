import Image from "next/image";
import styles from '../../styles/hero.module.scss'

import { Config } from '../../utils/config'
import { Buttons } from './Buttons'

export const TheoBox = () => {
    const ihatevercel = `Hi, I'm ${Config.name}.`
    return (
        <div className={styles.box}>
            <img src={Config.avatar} alt="ImCuteRight?" className={styles.box_img} />
            <h1>{ihatevercel}</h1>
            <h5>{Config.hobby}</h5>
            <p>{Config.description}</p>
            <ul>
                <Buttons/>
            </ul>
        </div>
    )
}