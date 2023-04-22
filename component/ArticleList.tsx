import { Article } from "@/types";
import ArticleC from "./Article";

const ArticleList = (props: { articles: Article[] }) => {
    return (
        <ul>
            {props.articles.map(article => <ArticleC article={article} />)}
        </ul>
    )
}

export default ArticleList;