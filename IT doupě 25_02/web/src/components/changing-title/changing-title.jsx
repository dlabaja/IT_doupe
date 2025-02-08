import {getRandomNumber} from "../../scripts/utils";
import {useRef, useState} from "react";

export const ChangingTitle = ({changeTitle}) => {
    const canScramble = useRef(true);
    const titles = ["HTML", "CSS", "JavaScript", "Elektronka", "SPŠE", "Olomouc", "Informatika"];
    const generateTitle = () => titles[getRandomNumber(titles.length)];
    const [text, setText] = useState(generateTitle());

    const scrambleText = () => {
        if (!canScramble.current) return; // Zámek
        canScramble.current = false;

        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        let iteration = 0;
        let chosenText = "";

        // Vybere nový text, který není stejný jako aktuální
        while (true) {
            chosenText = titles[getRandomNumber(titles.length)];
            if (chosenText !== text) break;
        }

        const interval = setInterval(() => {
             setText(chosenText
                 .split("") // Rozdělí text na jednotlivá písmena
                 .map((letter, index) =>
                     index < iteration ? chosenText[index] : letters[getRandomNumber(letters.length)]
                 )
                 .join("") // Složí text zpět
            )

            iteration += 1 / 3; // Zrychluje postup

            if (iteration >= chosenText.length) {
                clearInterval(interval); // Konec intervalu
                setText(chosenText); // Aktualizace textu ve stavu
                canScramble.current = true; // Uvolnění zámku
            }
        }, 30);
    };

    changeTitle(() => {
        scrambleText();
    })
    
    return <h1 
            id={"title"} 
            onMouseOver={() => scrambleText()}
        >
            {text}
        </h1>}