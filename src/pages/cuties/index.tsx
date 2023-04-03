import Layout from '../../components/Layout/Layout'
import styles from '../../styles/cuties.module.scss'
import Box from "../../components/cute/cutiebox";

export default function Cuties() {

  return (
    <Layout>
      <div className={styles.center}>
        <p className={styles.p}><strong>Cuties</strong></p>
        <h2 className={styles.owos}></h2>

        {/** code here! */}

        <Box paths="cuties" name="Pauplogini" image="paup" extension="png" desc="a super cute cuite" />
        <Box paths="cuties" name="Alex" image="alex" extension="png" desc="Alex Cute" />

      </div>
    </Layout>
  )
}
