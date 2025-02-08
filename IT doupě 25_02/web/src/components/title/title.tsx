import {JSX, ReactNode} from "react";

interface ITitleProps {
    children: ReactNode,
    level: 1 | 2 | 3 | 4 | 5 | 6
}

export const Title = (props: ITitleProps) => {
    const {children, level} = props;
    const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
    return <HeadingTag>{children}</HeadingTag>;
}