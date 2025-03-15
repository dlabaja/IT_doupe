import {Meta, StoryObj} from "@storybook/react";
import {IListProps, List} from "./list";

export default {
    component: List,
    args: {
        isOrdered: false,
        items: ["item1", "item2"]
    },
} as Meta<IListProps<string>>

export const Default: StoryObj<IListProps<string>> = {}