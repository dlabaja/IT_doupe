import {cn} from "../../scripts/utils";

const Button = ({text, isBlue, onClick}) => {
    return <button className={cn("button", isBlue && "buttonBlue")} onClick={onClick}>{text}</button>
}

export const ButtonLink = ({link, text, isBlue = false}) => {
    return <a href={link}><Button text={text} isBlue={isBlue} onClick={undefined}/></a>
}

export const ButtonClick = ({onClick, text, isBlue = false}) => {
    return <Button text={text} isBlue={isBlue} onClick={onClick}/>
}