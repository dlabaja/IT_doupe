import {Article, IArticleProps} from "./article";
import {Meta, StoryObj} from "@storybook/react";

export default {
    component: Article,
    args: {
        text: "lorem ipsum dolor sit amet"
    }
} as Meta<IArticleProps>

export const Default: StoryObj<IArticleProps> = {}