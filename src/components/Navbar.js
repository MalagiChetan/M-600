import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div style={{ fontSize: "30px", marginTop: "10px" }}>
      <ul className="nav justify-content-center bg-dark">
        <li className="nav-item">
          <Link
            className="nav-link active"
            aria-current="page"
            exact="true"
            to="/todo"
          >
            Todo-Redux
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" exact="true" to="/chart-data">
            Chartjs2
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" exact="true" to="/dashboard">
            Dashboard
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
