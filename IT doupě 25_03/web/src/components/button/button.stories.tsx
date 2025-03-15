import {Meta, StoryObj} from "@storybook/react";
import {ButtonClick, ButtonLink, IButtonClickProps, IButtonLinkProps} from "./button";

interface IButtonStorybookProps extends IButtonClickProps, IButtonLinkProps {}

export default {
    components: [ButtonClick, ButtonLink],
    args: {
        text: "label",
        isBlue: false,
    }
} as Meta<IButtonStorybookProps>;

export const ButtonClickStory: StoryObj<IButtonClickProps> = {
    render: args => <ButtonClick {...args}/>
}

export const ButtonLinkStory: StoryObj<IButtonLinkProps> = {
    render: args => <ButtonLink {...args}/>,
    args: {
        link: "https://www.worldee.com"
    }
}