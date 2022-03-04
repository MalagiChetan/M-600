import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, delTodo } from "../../action/action"

function Todo() {
  const [input, setInput] = useState("")

  const myData = useSelector((state) => state)

  const dispatch = useDispatch()

  const addNewTodo = () => {
    dispatch(addTodo(input))
    setInput("")
  }

  const deleteTodo = (index) => {
    dispatch(delTodo(index))
  }

  return (
    <div className="App">
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "25px" }}
      >
        <input
          type="text"
          placeholder="enter todo..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="form-control w-25"
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            addNewTodo()
          }}
        >
          Add Todo
        </button>
      </div>
      <div className="d-flex justify-content-center" style={{ margin: "10px" }}>
        <div
          className="justify-content-center"
          style={{ fontSize: "25px", fontWeight: "500" }}
        >
          {myData.map((elem, i) => {
            return (
              <div key={i}>
                {elem}
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    deleteTodo(i)
                  }}
                >
                  Delete
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Todo
