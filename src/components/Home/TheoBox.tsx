import Image from "next/image";
import styles from '../../styles/hero.module.scss'

import { oldConfig, Config } from '../../utils/config'
import Buttons from './Buttons'

//** This is fucking deprecated */
export const TheoBox = () => {
    const ihatevercel = `Hi, I'm ${Config.name}.`
    return (
        <div className={styles.box}>
            <img src={Config.avatar} alt="ImCuteRight?" className={styles.box_img} />
            <h1>{ihatevercel}</h1>
            <h5>{oldConfig.hobby}</h5>
            <p>{Config.description}</p>
            <ul>
                <Buttons linkFuck={undefined} faIcon={undefined}/>
            </ul>
        </div>
    )
}