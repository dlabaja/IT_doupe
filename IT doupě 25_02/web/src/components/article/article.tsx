interface IArticleProps {
    text: string;
}

export const Article = (props: IArticleProps) => {
    const {text} = props;
    
    return (
        <div className={"article"}>
            <p>{text}</p>
        </div>
    );
}