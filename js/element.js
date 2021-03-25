function Element(tag, cssClass, content = None, parentClass){
    let element = document.createElement(tag)
    element.className = cssClass;
    element.textContent = content
    document.querySelector(`${parentClass}`).append(element);
}

export default Element