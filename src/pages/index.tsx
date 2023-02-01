// import Image from 'next/image'
import styles from '../styles/home.module.scss'
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO title="Tony Carvalho" excludeTitleSuffix />
      <main className={styles.mainContainer}>
        <div className={styles.card}>
          <h1>Testing</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam voluptates facere, quis ex repellendus dolore ducimus eos in reprehenderit sapiente vitae reiciendis necessitatibus accusantium ullam nemo hic alias. Suscipit, ex.</p>
        </div>
      </main>
    </>
  )
}
