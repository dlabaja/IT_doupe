import {ReactNode} from "react";

export interface ITextProps {
    children: ReactNode
}

export const Text = (props: ITextProps) => {
    const {children} = props;
    return <span>{children}</span>;
}