import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SpaceDash</title>
        <meta name="description" content="Your space dashboard, created by James Lee" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to SpaceDash</h1>

        <p className={styles.description}>Under construction</p>
        <Link href="/test"><a>Test link?</a></Link>
      </main>
    </div>
  );
}
