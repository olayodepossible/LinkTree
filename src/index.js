import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { theme } from "./util/theme";
import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";
import "@fontsource/inter/700.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/400.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
