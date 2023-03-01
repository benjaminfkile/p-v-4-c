import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "material-icons/iconfont/material-icons.css"
import "./index.css"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
