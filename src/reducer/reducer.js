const initialState = []

export const myTodo = (state = initialState, action) => {
  const stateCopy = [...state]
  switch (action.type) {
    case "ADDTODO":
      if (action.payload === "") {
        alert("Write Something")
      } else {
        const i = state.findIndex((ele) => {
          return ele === action.payload
        })
        if (i === -1) {
          stateCopy.push(action.payload)
          return stateCopy
        } else {
          alert("todo already exists")
        }
        return stateCopy
      }
    case "DELETETODO":
      stateCopy.splice(action.payload, 1)
      return stateCopy
    default:
      return state
  }
}
