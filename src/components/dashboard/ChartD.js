import React from "react"
import { useState } from "react"
import DoughC from "./DoughC"
import "./Style.css"
import Paper from "@material-ui/core/Paper"

const invoiceData = [
  {
    invoice: "Jan-25 Invoices",
    amount: 25,
  },
  {
    invoice: "Feb-50 Invoices",
    amount: 50,
  },
  {
    invoice: "Mar-25 Invoices",
    amount: 25,
  },
]

const ChartD = () => {
  const [userData, setUserData] = useState({
    labels: invoiceData.map((data) => data.invoice),
    datasets: [
      {
        label: "Total Amount generated",
        data: invoiceData.map((data) => data.amount),
        backgroundColor: ["green", "purple", "orange"],
        hoverBackgroundColor: "yellow",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 6,
      },
    ],
  })
  return (
    <div className="bar">
      <Paper elevation={20}>
        <DoughC chartData={userData} />
      </Paper>
    </div>
  )
}

export default ChartD
