import { Component } from "react"
import DesktopNav from "./components/nav/desktop_nav/DesktopNav"
import MobileNav from "./components/nav/mobile_nav/MobileNav"
import About from "./sections/about/About"
import Contact from "./sections/contact/Contact"
import mutator from "./utils/mutator"
import "./app.css"
import "./animate.css"

interface AppState {
  activeSection: number
}

class App extends Component<{}, AppState> {

  state = {
    activeSection: 1,
    menuOpen: false
  }

  manageState = (keys: Array<{ key: string, value?: any }>) => {
    this.setState(mutator(this.state, keys))
  }

  render() {

    const state = this.state

    return (
      <div className="App">
        <MobileNav
          manageParentState={this.manageState}
          menuOpen={state.menuOpen}
          activeSection={state.activeSection}
        />
        {/* <DesktopNav
          manageParentState={this.manageState}
        /> */}
        {state.activeSection === 1 &&
          <About manageParentState={this.manageState}
          />}
        {state.activeSection === 3 &&
          <Contact manageParentState={this.manageState}
          />}
      </div>
    )
  }
}

export default App
