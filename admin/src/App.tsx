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
    typography: {
      styles: {
        variants: {
          h1: {
            fontFamily: "iranyekan",
          },
          h2: {
            fontFamily: "iranyekan",
          },
          h3: {
            fontFamily: "iranyekan",
          },
          h4: {
            fontFamily: "iranyekan",
          },
          h5: {
            fontFamily: "iranyekan",
          },
          h6: {
            fontFamily: "iranyekan",
          },
          lead: {
            fontFamily: "iranyekan",
          },
          paragraph: {
            fontFamily: "iranyekan",
          },
          small: {
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
