import Image from "next/image";
import Layout from '../../components/Layout/Layout'
import styles from '../../styles/cuties.module.scss'

export default function Cuties() {

const PAUP_IMAGE = "./Images/cuties/paup.png";
const ALEX_IMAGE = "./Images/cuties/alex.png";  

const TextA = "Cuties";

return (
    <>
    <Layout/>
    <div className={styles.center}>
        <p className={styles.p}><strong>{TextA}</strong></p>
        <h2 className={styles.owos}></h2>
          <div className={styles.box} id={styles.right}>
          <img src={PAUP_IMAGE} alt="paup" className={styles.boximg} />
          <h1><strong>Pauplogini</strong></h1>
          </div>
  {/* ez*/}
          <div className={styles.box} id={styles.left}>
          <img src={ALEX_IMAGE} alt="Alex" className={styles.boximg} />
          <h1><strong>Alex</strong></h1>
          </div>
        </div>
</>
  )
}
