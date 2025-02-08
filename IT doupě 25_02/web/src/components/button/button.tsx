import {cn} from "../../scripts/utils";

interface IButtonProps {
    text: string,
    isBlue?: boolean,
    onClick?: () => void
}

interface IButtonClickProps extends IButtonProps {
    onClick: () => void
}

interface IButtonLinkProps extends IButtonProps {
    link: string
}

const Button = (props: IButtonProps) => {
    const {isBlue, text, onClick} = props;
    return (
        <button 
            className={cn("button", isBlue && "buttonBlue")} 
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export const ButtonLink = (props: IButtonLinkProps) => {
    const {link} = props;
    return <a href={link}><Button {...props}/></a>;
}

export const ButtonClick = (props: IButtonClickProps) => {
    return <Button {...props}/>;
}