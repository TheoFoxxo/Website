import styles from '../../styles/cuties.module.scss'

interface Iprops {
    /** don't add the extension... */
    image: String;
    /** Name of the cutie you want to add */
    name: String;
    /** file extension for the image dont add the "."*/
    extension: String;
    /** a super cute cuite */
    desc?: String;
    /** Path in images folder! */
    paths: String;
}

export default function Box({ image, name, extension, desc, paths }: Iprops) {

    /** Fucking path for the images */
    const path = `/./Images/${paths}/${image}.${extension}`

    return (
        <div className={styles.box} id={styles.right}>
            <img src={path} alt="img" className={styles.boximg} />
            <h1 className={styles.center}><strong>{name}</strong></h1>
            <h3 className={styles.center}><strong>{desc}</strong></h3>
        </div>
    )
}
