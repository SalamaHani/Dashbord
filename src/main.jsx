import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./stor.jsx";
import { Toaster } from "sonner";
createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <App />
      <Toaster position="top-center" className="dark:bg-gray-800" />
    </Provider>
  </>
);
