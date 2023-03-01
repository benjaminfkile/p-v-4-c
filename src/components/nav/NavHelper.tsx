const NavHelper = {
    navMap: [
        {
            sectionName: "About",
            sectionIdentifier: 1,
            order: 1
        },
        {
            sectionName: "Contact",
            sectionIdentifier: 3,
            order: 3
        }
    ].sort(({ order: a }, { order: b }) => a - b)
}

export default NavHelper