import { Component, createRef } from "react"
import NavHelper from "../NavHelper"
import "./MobileNav.css"

interface Props {
    manageParentState: Function
    menuOpen: boolean
    activeSection: number
}

class MobileNav extends Component<Props, {}> {

    wrapperRef: React.RefObject<HTMLInputElement>

    constructor(props: Props) {
        super(props)
        this.wrapperRef = createRef()
        this.handleClickOutside = this.handleClickOutside.bind(this)
    }

    componentDidMount() {
        document.addEventListener("touchstart", this.handleClickOutside)
        // document.addEventListener("mousedown", this.handleClickOutside)
    }

    componentWillUnmount() {
        document.removeEventListener("touchstart", this.handleClickOutside)
        // document.addEventListener("mousedown", this.handleClickOutside)
    }

    handleClickOutside = (event: { target: any }) => {
        //@ts-ignore
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target) && this.props.menuOpen) {
            this.animateMenu()
        }
    }

    animateMenu = () => {
        let elem = document.getElementById("mobile-nav-menu")
        if (elem) {
            if (this.props.menuOpen) {
                elem.classList.add("MobileNavMenuClosedSlideOut")
                setTimeout(() => {
                    this.props.manageParentState([{ key: "menuOpen" }])
                }, 500)
            } else {
                elem.classList.remove("MobileNavMenuClosedSlideOut")
                this.props.manageParentState([{ key: "menuOpen" }])
            }
        }
    }

    render() {

        const props = this.props

        return (
            <div className="MobileNav" ref={this.wrapperRef}>
                {!props.menuOpen && <div className="MobileNavMenuBtn" onClick={() => props.manageParentState([{ key: "menuOpen" }])}>
                    <span className="material-icons">menu</span>
                </div>}
                {props.menuOpen && <div id="mobile-nav-menu" className={`MobileNavMenu ${props.menuOpen ? "MobileNavMenuOpen" : "MobileNavMenuClosed"}`}>
                    {NavHelper.navMap.map((navItem, i) =>
                        <div className="MobileNavMenuItem" key={`mobile-nav-menu-item-${i}`}
                            onClick={() => props.manageParentState([{ key: "activeSection", value: navItem.sectionIdentifier }, { key: "menuOpen" }])}
                        >
                            <p>{navItem.sectionName}</p>
                        </div>)}
                </div>}
            </div>
        )
    }
}

export default MobileNav