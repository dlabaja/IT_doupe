import * as styles from "./app.module.scss";
import {ReactNode} from "react";

interface IAppProps {
    children: ReactNode
}

export const App = (props: IAppProps) => {
    const {children} = props;
    
    return <div className={styles.layout}>
        {children}
    </div>
}