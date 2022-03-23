import Head from "next/head";
import styles from "./Library.module.css";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Library() {
  const { data, error } = useSWR("/api/library", fetcher);
  return (
    <div className="container">
      <Head>
        <title>My library</title>
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
          <h1 className="title">My song library</h1>
          <div className={styles.list}>
            {data.map((e) => (
              <div className={styles.item}>
                <span className={styles.name}>{e.name}</span>
                <span className={styles.count}>{e.length}</span>
              </div>
            ))}
          </div>
          <Link href="/">Back to home page</Link>
        </main>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
