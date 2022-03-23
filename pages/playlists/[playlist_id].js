import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";
import styles from './PlaylistPage.module.css';
import Link from 'next/link';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function PlaylistPage() {
  const router = useRouter();
  const { playlist_id } = router.query;
  const { data, error } = useSWR(`/api/playlists/${playlist_id}`, fetcher);
  const songs = useSWR('/api/library', fetcher);

  return (
    <div className="container">
      <Head>
        <title>Playlist #{playlist_id}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      {songs.data ? (
        <main className={styles.root}>
          <h1 className="title">{`${data && data !== 'undefined' && data.name} playlist`}</h1>
          <div className={styles.list}>
            {songs.data.map((e) => (
              <div className={styles.item}>
                <span className={styles.name}>{e.name}</span>
                <span className={styles.count}>{e.length}</span>
              </div>
            ))}
          </div>
          <Link href="/playlists">Back to home page</Link>
        </main>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
