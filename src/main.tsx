import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// import { Provider as ProviderRedux } from "react-redux";
// import { store } from "./app/store.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    {/* <ProviderRedux store={store}> */}
      <App />
    {/* </ProviderRedux> */}
  </QueryClientProvider>
);
