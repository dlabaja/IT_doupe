import {Meta, StoryObj} from "@storybook/react";
import {ITitleProps, Title} from "./title";

export default {
    component: Title,
    args: {
        children: <>supports react and <i>rich text</i></>,
        level: 1
    },
    argTypes: {
        level:  { control: { type: 'range', min: 1, max: 6 } }
    }
} as Meta<ITitleProps>

export const Default: StoryObj<ITitleProps> = {}