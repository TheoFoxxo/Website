import React from "react";
import styles from '../../styles/footer.module.scss'

export default function Footer() {
  return (
    <>
    <div className={styles.foot} >
      &copy; {new Date().getFullYear()} Theodore
    </div>
    </>
  );
}