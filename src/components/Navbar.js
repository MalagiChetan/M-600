import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <ul class="nav justify-content-center bg-dark">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" exact to="/todo">
            Todo-Redux
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" exact to="/chart-data">
            Chartjs2
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" exact to="/dashboard">
            Dashboard
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
