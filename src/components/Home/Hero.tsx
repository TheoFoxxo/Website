// i remade this cuz why not.
import styles from '../../styles/hero.module.scss'
import { Config } from '../../utils/config'
import {Buttons} from './Buttons'
export const Hero = () => {
    return (
        <div className={styles.Hero}>
        <div className={styles.box}>
        <em>
          <h1>{Config.name}</h1>
          <h2>{Config.description}</h2>
         {/* <div id="wrapper">
            <Button text="Github" link={Config.github}/>
            <Button text="Twitter" link={Config.twitter}/>
          </div>*/}
          <ul>
                <Buttons/>
            </ul>
        </em>
          <img className={styles.Img_} src={Config.avatar}/>
        </div>
    </div>
    )
}