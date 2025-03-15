import {ReactNode} from "react";
import * as styles from "./layout.module.scss"

export interface ILayoutProps {
    children: ReactNode
}

export const Layout = (props: ILayoutProps) => {
    const {children} = props;
    
    return <div className={styles.layout}>{children}</div>
}