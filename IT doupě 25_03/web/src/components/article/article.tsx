import * as styles from "./article.module.scss";

interface IArticleProps {
    text: string;
}

export const Article = (props: IArticleProps) => {
    const {text} = props;
    
    return (
        <div className={styles.article}>
            <p>{text}</p>
        </div>
    );
}