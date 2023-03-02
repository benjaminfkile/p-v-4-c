import ReactDOM from "react-dom/client"
import App from "./App"
import { Provider } from "react-redux"
import ReduxStore from "./redux/ReduxStore"
import "material-icons/iconfont/material-icons.css"
import "./index.css"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)
root.render(
  <Provider store={ReduxStore}>
    <App />
  </Provider>
)
