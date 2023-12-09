import Layout from '../../components/Layout/Layout'
import styles from '../../styles/cuties.module.scss'
import Box from "../../components/cute/cutiebox";

export default function Cuties() {

  return (
    <Layout>
      <div className={styles.center}>
        <p className={styles.p}><strong>Cuties</strong></p>
        <h2 className={styles.owos}></h2>

        <Box paths="cuties" name="Pauplogini" image="paup" extension="png" desc={["Awwww Theo more cute","paup"]} />
        <Box paths="cuties" name="Alex" image="alex" extension="png" desc={[`i love paup milk`, `alex`]} />
      </div>
    </Layout>
  )
}
