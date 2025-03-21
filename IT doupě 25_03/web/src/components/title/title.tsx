import {JSX, ReactNode} from "react";
import * as styles from "./title.module.scss"
import {cn} from "../../scripts/utils";

export interface ITitleProps {
    children: ReactNode,
    level: 1 | 2 | 3 | 4 | 5 | 6
}

export const Title = (props: ITitleProps) => {
    const {children, level} = props;
    const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
    return (
        <div className={cn(styles.layout)}>
            <HeadingTag>{children}</HeadingTag>
        </div>
    );
}