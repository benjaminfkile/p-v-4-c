import { Component } from "react"
import { socket } from "../../context/socket"
import mutator from "../../utils/mutator"
import AboutTypes from "./AboutTypes"


interface Props {
    manageParentState: Function
}

interface AboutState {
    about: AboutTypes[]
}

class About extends Component<Props, AboutState> {

    state = {
        about: []
    }

    manageState = (keys: Array<{ key: string, value?: any }>) => {
        this.setState(mutator(this.state, keys))
    }


    componentDidMount(): void {
        socket.emit("send-about-JSON")
        socket.on("recieve-about-JSON", (about: AboutTypes[]) => {
            console.log(about)
            this.manageState([{ key: "about", value: about }])
        })
    }

    render() {

        const state = this.state

        console.log("About state", state)

        return (
            <div className="About">

            </div>
        )
    }
}

export default About