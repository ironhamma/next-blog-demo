import Head from "next/head";
import styles from "./Home.module.css";
import Link from "next/link";
import cn from "classnames";
import { useState } from "react";

const THEMES = { DARK: "dark", LIGHT: "light" };

export default function Home() {
  const [theme, setTheme] = useState(THEMES.LIGHT);

  return (
    <div className="container">
      <Head>
        <title>Some spotify copy</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main
        className={cn(styles.root, { [styles.dark]: theme === THEMES.DARK })}
      >
        <h1 className="title">
          Welcome to my Next.js demo spotify wannabe app!
        </h1>
        <div className={styles.links}>
          <Link href="/artists">
            <div className={styles.item}>
              <span>Loved artists</span>{" "}
              <img className={styles.image} src="/subtronics.png" />
            </div>
          </Link>
          <Link href="/library">
            <div className={styles.item}>
              <span>My library</span>{" "}
              <img className={styles.image} src="/headphone.png" />
            </div>
          </Link>
          <Link href="/playlists">
            <div className={styles.item}>
              <span>My playlists</span>{" "}
              <img className={styles.image} src="/music.png" />
            </div>
          </Link>
          <Link href="https://nextjs.org/">
            <div className={styles.item}>
              <span>Next.js</span>{" "}
              <img className={styles.image} src="/nextlogo.png" />
            </div>
          </Link>
        </div>
        <div className={styles.toggler}
          onClick={() => {
            theme === THEMES.DARK
              ? setTheme(THEMES.LIGHT)
              : setTheme(THEMES.DARK);
          }}
        >
          Change theme
        </div>
      </main>
    </div>
  );
}
