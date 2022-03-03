import React from "react"
import "./Style.css"
import { UserData } from "../../Data"
import { useState } from "react"
import BarChart from "./BarChart"
import LineChart from "./LineChart"

const ChartData = () => {
  const [status, setstatus] = useState(false)
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Total Amount generated",
        data: UserData.map((data) => data.amount),
        backgroundColor: ["#2a71d0", "#ecf0f1", "#50AF95", "#f3ba2f"],
        hoverBackgroundColor: "yellow",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 6,
      },
    ],
  })
  return (
    <div className="bar">
      {status ? (
        <BarChart chartData={userData} />
      ) : (
        <LineChart chartData={userData} />
      )}
    </div>
  )
}

export default ChartData
