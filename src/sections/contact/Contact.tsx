import { FunctionComponent } from "react"
import "./Contact.css"

interface Props {
    manageParentState: Function
}

const Contact: FunctionComponent<Props> = () => {
    return (
        <div className="Contact">
            contact
        </div>
    )
}

export default Contact