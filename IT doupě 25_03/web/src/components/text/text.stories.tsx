import {Meta, StoryObj} from "@storybook/react";
import {ITextProps, Text} from "./text";

export default {
    component: Text,
    args: {
        children: "can contain any react node"
    }
} as Meta<ITextProps>

export const Default: StoryObj<ITextProps> = {}