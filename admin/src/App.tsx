import { ThemeProvider } from "@material-tailwind/react";
import Layout from "./container/layout/Layout";

const App = () => {
  const customTheme = {
    list: {
      styles: {
        base: {
          list: {
            fontFamily: "iranyekan",
          },
        },
      },
    },
  };

  return (
    <ThemeProvider value={customTheme}>
      <Layout />
    </ThemeProvider>
  );
};

export default App;
