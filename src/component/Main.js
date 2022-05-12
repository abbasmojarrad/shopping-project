import React from 'react'
import styles from "./main.module.css";
import Hero from './Hero'
function Main() {
  return (
    <main className={styles.main}>
        <div className={styles.container}>
        <Hero/>
        </div>
    </main>
  )
}

export default Main