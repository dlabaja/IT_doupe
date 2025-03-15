import {Meta, StoryObj} from "@storybook/react";
import {ChangingTitle} from "./changing-title";
import {ButtonClick} from "../button/button";
import {useRef} from "react";

export default {
    component: ChangingTitle,
} as Meta

export const ChangingTitleStory: StoryObj = {
    render: () => {
        const changeTitleRef = useRef(() => {});

        return <div>
            <ChangingTitle changeTitle={(fn) => (changeTitleRef.current = fn)} />
            <ButtonClick
                onClick={() => changeTitleRef.current()}
                text={"Změň nadpis"}
            />
        </div>
    }
}