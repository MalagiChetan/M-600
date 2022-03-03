import { createStore } from "redux"
import { myTodo } from "./reducer/reducer"

export const myStore = createStore(myTodo)
