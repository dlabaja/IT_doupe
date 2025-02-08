export const Title = ({children, level}) => {
    const HeadingTag = `h${level}`;
    return <HeadingTag>{children}</HeadingTag>;
}