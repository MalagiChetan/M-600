import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import ChartData from "./components/chart/ChartData"
import Dashboard from "./components/dashboard/Dashboard"
import Navbar from "./components/Navbar"
import Todo from "./components/todo/Todo"

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/todo" component={Todo} />
        <Route exact path="/chart-data" component={ChartData} />
        <Route exact path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  )
}

export default App
