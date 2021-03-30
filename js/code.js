import { HotUpdateChunk } from "webpack";
import css from "../node_modules/bulma/css/bulma.min.css";
import style from "../style.css";

const todos = ["Помыть кота", "купить i7"];

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

todos.map((el) => {
  Element("div", 
  "todo is-size-3",
   el, 
   ".todo_wrapper", 
   "beforeend");
})

