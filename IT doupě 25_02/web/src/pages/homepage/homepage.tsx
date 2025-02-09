import {ChangingTitle} from '../../components/changing-title/changing-title';
import {Divider} from "../../components/divider/divider";
import {Article} from "../../components/article/article";
import {ButtonClick, ButtonLink} from "../../components/button/button";
import {List} from "../../components/list/list";
import {Title} from "../../components/title/title";
import {Text} from "../../components/text/text";
import {useRef} from "react";
import * as styles from "./homepage.module.scss"

export const Homepage = () => {
    const changeTitleRef = useRef(() => {});
    
    return <>
        <div className={styles.top}>
            <ChangingTitle changeTitle={(fn) => (changeTitleRef.current = fn)} />
            <Title level={2}>Umí to i menší nadpis</Title>
            <Title level={4}>a ještě menší</Title>
        </div>
        <Divider/>
        <Article text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, non temporibus omnis eius necessitatibus at? Deleniti aperiam, nostrum rem illo laborum culpa natus nemo magni tenetur voluptatem consequatur soluta a? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quae voluptate neque impedit eveniet ratione voluptatum adipisci doloribus tempora, vitae dolorem mollitia architecto aut optio. Nostrum minus recusandae itaque dignissimos?"}/>
        <ButtonClick
            onClick={() => changeTitleRef.current()}
            text={"Změň nadpis"} 
            isBlue={true}
        />
        <ButtonLink link={"/dashboard"} text={"Odkaz na dashboard"}/>
        <div className={"container"}>
            <div className={"textInContainer"}>
                <Text>umí to i formátovat <strong>tučně</strong>, <i>kurzívou</i> nebo <u>podtrženě</u></Text>
                <List isOrdered={true} items={["číslovaný seznam"]}/>
                <List isOrdered={false} items={["nečíslovaný seznam"]}/>
            </div>
            <div className={"imageContainer"}>
                <img src={"https://www.spseol.cz/images/logo_spseol_web.png"} alt={"logo"}/>
                <div id={"imageInfo"}>
                    <Text>Logo školy</Text>
                </div>
            </div>
        </div>
    </>
}