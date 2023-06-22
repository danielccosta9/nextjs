import Image from 'next/image'
import styles from '../../page.module.css'
import Head from 'next/head'
import Link from 'next/link';

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre</title>
      </Head>
      <h1 className={styles.title}>Sobre</h1>
      <ul className={styles.grid}>
        <Link href="/">
          <li className={styles.card}>
            <h2> Home <span>-&gt;</span></h2>
          </li>
        </Link>
      </ul>
      <main className={styles.main}>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
      </main>
    </>
  )
}
