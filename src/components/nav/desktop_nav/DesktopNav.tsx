import { FunctionComponent } from "react"
import NavHelper from "../NavHelper"
import "./DesktopNav.css"

interface Props {
    manageParentState: Function
}

const DesktopNav: FunctionComponent<Props> = (props) => {
    return (
        <div className="DesktopNav">
            {NavHelper.navMap.map((navItem, i) =>
                <div className="DesktopNavBtn"
                    key={`desktop-nav-btn-${i}`}
                    onClick={() => props.manageParentState([{ key: "activeSection", value: navItem.sectionIdentifier }])}
                >
                    <p>{navItem.sectionName}</p>
                </div>)}
        </div>
    )
}

export default DesktopNav