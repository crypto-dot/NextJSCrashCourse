import Link from "next/link";
import { Article } from "@/types";
import Styles from "../styles/Article.module.css";

const Article = (props: Article) => {
    return (
        <li key={props.id}>
            <Link href={"/article/[id]"} as={`/article/${props.id}`}>
                <article className={Styles.article}>
                    <h1 className={Styles.h1__article}>{props.title}</h1>
                    <p className={Styles.p__article}>
                        {props.body}
                    </p>
                </article>
            </Link>
        </li >
    )
}

export default Article;