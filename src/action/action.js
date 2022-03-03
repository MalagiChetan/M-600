export const addTodo = (payload) => {
  return {
    type: "ADDTODO",
    payload,
  }
}

export const delTodo = (payload) => {
  return {
    type: "DELETETODO",
    payload,
  }
}
