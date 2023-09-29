import Alert from "./Alert";

export default {
    title: 'components/Alert',
    component: Alert,
    parameters: {
        layout: 'centered',
        status: {
            type: 'released', // 'beta' | 'deprecated' | 'experimental' | 'released'
        },
        design: {
            type: "figma",
            url: "https://www.figma.com/file/OlpApHLkO9ynQq4FfUeDkI/Fusion-Core?type=design&node-id=29-256&mode=design&t=16xQsIgZvRMWMYC2-4",
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