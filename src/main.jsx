import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import "remixicon/fonts/remixicon.css";
import Router from "./routes/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <Router />
  </NextUIProvider>
);
