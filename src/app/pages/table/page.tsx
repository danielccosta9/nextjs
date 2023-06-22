'use client';
import Image from 'next/image'
import styles from '../../page.module.css'
import Head from 'next/head'
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Table() {
  const baseUrl = "http://localhost:3338/users"
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <Head>
        <title>Table</title>
      </Head>
      <h1 className={styles.title}>Table</h1>
      <ul className={styles.grid}>
        <Link href="/">
          <li className={styles.card}>
            <h2> Home <span>-&gt;</span></h2>
          </li>
        </Link>
      </ul>

      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Senha</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
            </tr>
          ))}
        </tbody>
      </table>

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
