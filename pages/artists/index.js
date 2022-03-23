import Head from "next/head";
import useSWR from "swr";
import styles from "./Artsist.module.css";
import Image from "next/image";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Artists() {
  const { data, error } = useSWR("/api/artists", fetcher);
  return (
    <div className="container">
      <Head>
        <title>My artists</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      {data ? (
        <main className={styles.root}>
          <h1 className="title">My artists</h1>
          <div className={styles.list}>
            {data.map((e) => (
              <div className={styles.item}>
                <span className={styles.name}>{e.name}</span>
                <span className={styles.count}>{e.songCount}</span>
                <div className={styles.image}>
                  <div className={styles.inner}>
                    <Image src={e.image} layout="fill" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link href="/">Back to home page</Link>
        </main>
      ) : (
        <div className={styles.root}>Loading...</div>
      )}
    </div>
  );
}
