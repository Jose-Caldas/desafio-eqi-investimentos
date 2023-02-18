import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppContextProvider } from "./components/context/AppContext/provider";
import { GraphContextProvider } from "./components/context/GraphContext";
import GlobalStyles from "./global-styles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <GraphContextProvider>
        <GlobalStyles />
        <App />
      </GraphContextProvider>
    </AppContextProvider>
  </React.StrictMode>
);
