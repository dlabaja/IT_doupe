import type { Preview } from '@storybook/react'
import {App} from "../src/compositions/app/app";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    }, 
    decorators: (Story, context) => {
        return <App>
            <Story key={context.id} />
        </App>
    }
};

export default preview;