import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppContextProvider } from "./components/context/provider";
import GlobalStyles from "./global-styles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <GlobalStyles />
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
