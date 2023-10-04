import Alert from "./Alert";



export default {
    title: 'components/Alert',
    component: Alert,
    decorators: [
        (Story) => (
            <div style={{ padding: '3em', position: 'relative', height: '20vh', width: '30vw' }}>
                {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                <Story />
            </div>
        ),
    ],
    parameters: {
        layout: 'centered',
        status: {
            type: 'released', // 'beta' | 'deprecated' | 'experimental' | 'released'
        },
        design: {
            type: "figma",
            url: "https://www.figma.com/file/OlpApHLkO9ynQq4FfUeDkI/Fusion-Core?node-id=29%3A256&mode=dev",
        }
    },
    // This component will have an automatically generated Autodocs page
    tags: ['autodocs'],

};

// More on writing stories with args

export const Information = {
    args: {
        title: "Information",
        message: "This is an information alert.",
        type: "information"
    }
}

export const Caution = {
    args: {
        title: "Caution",
        message: "This is a caution alert.",
        type: "caution"
    }
}

export const Success = {
    args: {
        title: "Success",
        message: "This is a success alert.",
        type: "success"
    }
}

export const Error = {
    args: {
        title: "Error",
        message: "This is an error alert.",
        type: "error"
    }
}