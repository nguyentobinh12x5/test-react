import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/index.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer position="top-right" autoClose={3000} />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
