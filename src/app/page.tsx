import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Para acessar uma nova rota do projeto utiluze:&nbsp;
          <code className={styles.code}>
            Link do next e usar o componente Link com o href
          </code>
        </p>
      </div>
      <div className={styles.description}>
        <p>
          exemplo:&nbsp;
          <code className={styles.code}>
            &lt;Link href="/pages/sobre"&gt;Sobre&lt;/Link&gt;
          </code>
        </p>
      </div>
      <div className={styles.description}>
        <p>
          Observação:&nbsp;
          <code className={styles.code}>
            dentro da pasta pages, existe uma pasta chamada de sobre
          </code>
        </p>
      </div>
      <ul className={styles.grid}>
        <Link href="/pages/sobre">
          <li className={styles.card}>
            <h2> Sobre <span>-&gt;</span></h2>
          </li>
        </Link>
        <Link href="/pages/table">
          <li className={styles.card}>
            <h2> Table <span>-&gt;</span></h2>
          </li>
        </Link>
      </ul>
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
  )
}
