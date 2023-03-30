// i remade this cuz why not.
import styles from '../../styles/hero.module.scss'
import { Config } from '../../utils/config'
import { Buttons } from './Buttons'


export const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.box}>
        <em>
          <h1>Hi, I'm {Config.name}.</h1>
          <h2>{Config.description}</h2>
          <ul>
            <Buttons />
          </ul>
        </em>
        <img className="rounded-3xl w-3/12 h-fit left-1105 top-290" src={Config.avatar} />
      </div>
    </div>
  )
}