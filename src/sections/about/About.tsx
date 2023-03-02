import { FunctionComponent, useEffect, useState } from "react"
import AboutTypes from "../../types/AboutTypes"
import { io } from "../../utils/socket"
import "./About.css"
interface AboutProps {
    // manageParentState: Function
}

const About: FunctionComponent<AboutProps> = () => {

    const [about, setAbout] = useState<AboutTypes[] | null>(null)

    useEffect(() => {
        io.emit("send-about")
        io.on("receive-about", (about: AboutTypes[]) => {
            setAbout(about)
        })
    }, [])

    return (
        <div className="About">
            {about && about.map((aboutItem, i) =>
                <div key={i}>
                    {aboutItem.paragraph}
                </div>
            )}
        </div>
    )
}

export default About