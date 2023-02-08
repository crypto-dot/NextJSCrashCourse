import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'



export default function Home(props: { articles: Article[] }) {
  return (
    <>
      <Head>
        <title>Home Next App</title>
        <meta name="description" content="Next app home page of articles" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.headerOne}>Trying out NextJS!</h1>
        {props.articles.map(article => {
          return (
            <article key={article.id} className={styles.article}>
              <h1 className={styles.h1}>{article.title}</h1>
              <p className={styles.p}>
                {article.body}
              </p>
            </article>
          )
        })}
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
    if (!res.ok) {
      throw new Error("Bad Response", {
        cause: { res }
      })
    }
    const articles: Article[] = await res.json();
    return {
      props: {
        articles
      }
    }
  } catch (err: any) {
    if (err instanceof Error) {
      switch (err.cause.res?.status) {
        case 400: break;
        case 401: break;
        // Error handling
      }
    }

    else {
      console.error(err);
    }
  }

}
