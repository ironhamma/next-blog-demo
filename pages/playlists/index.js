import Head from "next/head";
import useSWR from "swr";
import styles from "./Playlists.module.css";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Playlists() {
  const { data, error } = useSWR("/api/playlists", fetcher);
  return (
    <div className="container">
      <Head>
        <title>My playlists</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        {data ? (
          <main className={styles.root}>
            <h1 className="title">My playlists</h1>
            <div className={styles.list}>
              {data.map((e) => (
                <Link href={`/playlists/${e.id}`}>
                  <div className={styles.item}>
                    <span className={styles.name}>{e.name}</span>
                    <span
                      className={styles.count}
                    >{`${e.songCount} song`}</span>
                  </div>
                </Link>
              ))}
            </div>
            <Link href="/">Back to home page</Link>
          </main>
        ) : (
          <div>Loading...</div>
        )}
      </main>
    </div>
  );
}
