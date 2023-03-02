import { Component } from "react"
import { connect } from "react-redux"
import { setTheme } from "./redux/slices/ThemeSlice"
import { io } from "./utils/socket"
import MobileNav from "./components/nav/mobile_nav/MobileNav"
import About from "./sections/about/About"
import Contact from "./sections/contact/Contact"
import mutator from "./utils/mutator"
import ThemeTypes from "./types/ThemeTypes"
import "./app.css"
import "./animate.css"
interface Props {
  theme: ThemeTypes
}

interface State {
  activeSection: number
}

class App extends Component<Props, State> {

  state = {
    activeSection: 1,
    menuOpen: false
  }

  componentDidMount(): void {
    //@ts-ignore
    //!!When you don't pass mapDispatchToProps, the connect function makes dispatch available as prop to the component
    const { dispatch } = this.props;
    io.emit("send-current-theme")
    io.on("receive-current-theme", (theme: ThemeTypes) => {
      dispatch(setTheme(theme))
    })
  }

  manageState = (keys: Array<{ key: string, value?: any }>) => {
    this.setState(mutator(this.state, keys))
  }

  render() {

    const state = this.state
    const props = this.props
    const theme = props.theme

    // console.log("App state", state)
    console.log("App props", props)

    return (
      <div className="App" style={{ backgroundColor: theme ? theme.c1 : "unset" }}>
        <MobileNav
          manageParentState={this.manageState}
          menuOpen={state.menuOpen}
          activeSection={state.activeSection}
        />
        {/* <DesktopNav
          manageParentState={this.manageState}
        /> */}
        {state.activeSection === 1 &&
          // <About manageParentState={this.manageState}
          <About />}
        {state.activeSection === 3 &&
          // <Contact manageParentState={this.manageState}
          <Contact />}
      </div>
    )
  }
}

const mapStateToProps = (state: { themeSlice: { theme: ThemeTypes } }) => ({
  theme: state.themeSlice.theme
})

export default connect(mapStateToProps)(App)