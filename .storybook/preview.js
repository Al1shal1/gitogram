import '../src/global.scss';
export const parameters = {
  actions: { ArgTypesRegex : "^on[A-Z].* "},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  }
