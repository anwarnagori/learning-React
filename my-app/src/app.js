// add to the top
import React from "react";
import { createRoot } from "react-dom/client";
import Pet from "./pet";
 
// modify the createRoot call, delete "ReactDOM"
const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement("h1", {}, "I am learning React"))
root.render(React.createElement(Pet))