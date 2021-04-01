import css from "../node_modules/bulma/css/bulma.min.css";
import style from "../style.css";

// const todos = ["Помыть кота", "купить i7", "новое дело"];
let todos = Object.values(localStorage);


import Element from "./element";
Element("div", "columns", "", "#root", "beforeend");
Element("div", "column has-text-centered", "", ".columns", "beforeend");
Element("h1", "title", "Todo", ".column", "beforeend");
Element("div", "columns second_row", "", "#root", "beforeend");
// Element('div', 'column second_row_column', '', '.second_row')
Element("div", "giph column is-one-third", "", ".second_row", "beforeend");
Element(
    "input",
    "input is-primary column is-size-4",
    "",
    ".second_row",
    "beforeend"
);
Element(
    "button",
    "button is-dark btn_plus is-size-4",
    "+",
    ".input",
    "afterend"
);

// TODO из массива рисовались все дела
// будем назначать дела последними детьми second_row
Element("div", " columns third_row is-centered", "", "#root", "beforeend");
Element("div", " column is-half todo_wrapper", "", ".third_row", "beforeend");

drawDeals()

function drawDeals() {
    document.querySelector('.todo_wrapper').innerHTML = ""
    todos = Object.values(localStorage)
    todos.map((el) => {
        Element("div",
            "todo is-size-3",
            `${el} <button class="button is-danger">
                    del </button>`,
            ".todo_wrapper",
            "beforeend");
    })
    deleteItem()
}

function deleteItem() {
    let btns_delete = document.querySelectorAll('.is-danger')
    let arr_delete = Array.from(btns_delete);
    arr_delete.map((el, index) => {
        el.onclick = function() {
            this.parentNode.remove()
                // todos.splice(index, 1)
            localStorage.removeItem(index)
        }
    })
}

function addDeal() {
    let data = document.querySelector('input');
    // todos.push(data.value)
    localStorage.setItem(Object.values(localStorage).length, data.value)
    console.log(todos)
    data.value = ''
    drawDeals()
}

document.querySelector(".btn_plus").onclick = addDeal;