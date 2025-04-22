module.exports = {
    content: [
      "./App.{js,jsx,ts,tsx}",
      "./screens/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          dracula: {
            background: '#282a36',
            foreground: '#f8f8f2',
            purple: '#bd93f9',
            pink: '#ff79c6',
            cyan: '#8be9fd',
            green: '#50fa7b',
            orange: '#ffb86c',
            red: '#ff5555',
          }
        }
      },
    },
    plugins: [],
  }
  