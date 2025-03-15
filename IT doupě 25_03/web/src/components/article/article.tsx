import * as styles from "./article.module.scss";

export interface IArticleProps {
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