import styles from "../styles/about.module.css";
import Head from "next/head";
function about() {
    return (
        <div>
            <Head>
                <title>About Page</title>
                <meta name="keywords" content="about NextJS" />
            </Head>
            <h1 className={styles.header}>Learning NextJS is fun</h1>
            <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus, fugiat eligendi saepe vel laborum culpa itaque facilis recusandae quis! Deleniti ratione commodi magnam doloribus repudiandae animi quam reprehenderit obcaecati?
            </p>
        </div>
    )
}

export default about