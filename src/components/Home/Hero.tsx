// i remade this cuz why not.
import styles from '../../styles/hero.module.scss'
import { Config } from '../../utils/config'
import Buttons from './Buttons'


export const Hero = () => {
  const ihatevercel = `Hi, I'm ${Config.name}.`
  return (
    <div className={styles.Hero}>
      <div className={styles.box}>
        <em>
          <h1>{ihatevercel}</h1>
          <h2>{Config.description}</h2>
          <ul>
            <Buttons linkFuck={Config.github} faIcon={"fa fa-github-square"}/>
            <Buttons linkFuck={Config.twitter} faIcon={"fa fa-twitter-square"}/>
          </ul>
        </em>
        <img className="rounded-3xl w-3/12 h-fit left-1105 top-290" src={Config.avatar} />
      </div>
    </div>
  )
}