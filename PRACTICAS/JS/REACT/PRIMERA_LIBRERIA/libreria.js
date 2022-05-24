// let header = document.createElement("header")
// header.id = "MainHeader"
// header.classList.add("main-header")

// let root = document.getElementById("root")
// root.appendChild(header)

export function createElement (elem, attr = {}) {
    let element = document.createElement(elem)
    element.id= attr.id
    element.classList.add(attr.className)
    return element
}


export function render (elem, DOMelem){
    DOMelem.appendChild(elem)
}

const Header = createElement("Header", {id: "MainHeader2",className:"main-header-2"})
render(Header, document.getElementById("root"))