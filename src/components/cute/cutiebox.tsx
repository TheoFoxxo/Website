import styles from '../../styles/cuties.module.scss'

interface Iprops {
    /** don't add the extension... */
    image: String;
    /** Name of the cutie you want to add */
    name: String;
    /** file extension for the image dont add the "."*/
    extension: String;
    /** a super cute cuite */
    desc?: Array<String>;
    /** Path in images folder! */
    paths: String;
}

export default function Box({ image, name, extension, desc, paths }: Iprops) {
    return (
        <div className={styles.box} id={styles.right}>
            <img src={`/./Images/${paths}/${image}.${extension}`} alt="img" className={styles.boximg} />
            <h1 className={styles.center}><strong>{name}</strong></h1>
            <h3 className={styles.center}><strong>{`${desc![0]} ~ ${desc![1]}`}</strong></h3>
        </div>
    )
}
