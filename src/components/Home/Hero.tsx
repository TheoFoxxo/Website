// i remade this cuz why not.
import styles from '../../styles/heroo.module.scss'
import { Config } from '../../utils/config'
import {Buttons} from './Buttons'
export const Hero = () => {
    return (
        <div className={styles.Hero}>
        <div className={styles.box}>
        <img className={styles.Img_} src={Config.avatar} />
        <div>
          <h1>{Config.name}</h1>
          <h2>{Config.hobby}</h2>
          <h3>{Config.description}</h3>
         {/* <div id="wrapper">
            <Button text="Github" link={Config.github}/>
            <Button text="Twitter" link={Config.twitter}/>
          </div>*/}
          <ul>
                <Buttons/>
            </ul>
        </div>
      </div>
    </div>
    )
}