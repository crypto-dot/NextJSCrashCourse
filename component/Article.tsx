import Link from "next/link";
import { Article } from "@/types";
import Styles from "../styles/Article.module.css";


const ArticleC = (props: { article: Article }) => {
    return (
        <li key={props.article.id}>

            <Link href={"/article/[id]"} as={`/article/${props.article.id}`}>
                <article className={Styles.article}>
                    <h1 className={Styles.h1__article}>{props.article.title}</h1>
                    <p className={Styles.p__article}>
                        {props.article.body}
                    </p>
                </article>
            </Link>
        </li >
    )
}

export default ArticleC;