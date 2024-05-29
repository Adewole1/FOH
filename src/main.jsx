import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster
        position="top-right"
        reverseOrder={true}
        toastOptions={{
          duration: 4000,
          success: {
            style: {
              background: "#07bc0c",
              color: "#fff",
            },
          },
          error: {
            style: {
              background: "#e74c3c",
              color: "#fff",
            },
          },
          // info: #3498db
          // warning: #f1c40f
        }}
      />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
