import { StrictMode } from "react";

import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/providers/theme-provider.tsx";
import routes from "./routes/routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={routes}></RouterProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
