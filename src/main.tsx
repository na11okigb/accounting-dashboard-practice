import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

async function enableMocking() {
  const mswEnv = import.meta.env.VITE_USING_MWS;
  if (!mswEnv) {
    return;
  }
  const { worker } = await import("./mocks/browser");
  return worker.start();
}

if (import.meta.env.VITE_ENV == "Local") {
  // @ts-ignore
  window.usePeriodStore = await import("./stores/periodStore").then(
    (m) => m.usePeriodStore
  );
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
