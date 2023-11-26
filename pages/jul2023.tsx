import type { NextPage } from "next";

import styles from "./jul2023.module.scss";

const Jul2023: NextPage = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <div className={styles.outer}>
        <div className={styles["video-container"]}>
          <video loop autoPlay muted playsInline className={styles.video}>
            <source src="/jul2023/720p.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <main className={styles.wrapper}>
          <h1>God jul &amp; gott nytt år!</h1>
          <h2>önskar</h2>
          <p className={styles.paragraph}>
            Linnéa, Leo, Jeanette, Ola och Ellis
          </p>
        </main>
      </div>
      <footer className={styles.footer}>
        <div className={styles["footer-inner"]}>
          <p>
            © <strong>Lillskrot &amp; jag</strong> {year}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Jul2023;
