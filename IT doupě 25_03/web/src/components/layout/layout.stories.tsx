import {Meta, StoryObj} from "@storybook/react";
import {ILayoutProps, Layout} from "./layout";

export default {
    component: Layout,
} as Meta<ILayoutProps>

export const Default: StoryObj<ILayoutProps> = {
    render: () => <Layout>
        <div style={{width: "100%", height: "100vh", background: "wheat"}}>content</div>
    </Layout>
}