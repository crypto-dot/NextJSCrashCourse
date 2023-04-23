import { Article } from "@/types";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
    id: string
}
const article = (props: { article: Article }) => {

    return (
        <article>
            <h1>{props.article.title}</h1>
            <p>{props.article.body}</p>
            <br />
            <Link href="/"> &lt; Go Back</Link>
        </article>
    )
}

export const getStaticProps: GetStaticProps<{ article: Article }> = async (context: GetStaticPropsContext) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params?.id}`);
        if (!res.ok) {
            throw new Error("Bad Response", { cause: res });
        }
        const article: Article = await res.json();
        return { props: { article } };
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message)
        } else {
            console.error(err);
        }
        return { notFound: true };
    }
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        if (!res.ok) {
            throw new Error("Bad Response", { cause: res });
        }
        const articles: Article[] = await res.json();
        const ids = articles.map(article => article.id);
        const paths = ids.map(id => ({ params: { id: id.toString() } }));
        return {
            paths,
            fallback: false
        };
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message)
        } else {
            console.error(err);
        }
        return { paths: [], fallback: false };
    }
}
export default article