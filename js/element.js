function Element(tag, cssClass, content = None, parentElement, pos){
    /*
        tag - тип элемента в виде String
        cssClass - класс в CSS в виде String
        [content] - содержимое элемента
        parentElement - родительский элемент
    */
    let element = document.createElement(tag)
    element.className = cssClass;
    element.textContent = content
    document.querySelector(`${parentElement}`).insertAdjacentElement(pos, element)
}
export default Element