/** @type { import('@storybook/react').Preview } */
import 'tailwindcss/tailwind.css';
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    status: {
      statuses: {
        released: {
          background: '#118238',
          color: '#ffffff',
          description: 'This component is stable and released',
        },
        beta: {
          background: '#3699E4',
          color: '#ffffff',
          description: 'This component is in beta status. Stay tuned for future updates and improvements.',
        },
        deprecated: {
          background: '#E32525',
          color: '#000000',
          description: 'This component is deprecated. It may be removed in a future release.',
        },
        experimental: {
          background: '#ECB62A',
          color: '#ffffff',
          description: 'This component is experimental. It may change without notice.',
        },
      },
    },
  },
};

export default preview;
