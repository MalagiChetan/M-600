import { Paper } from "@material-ui/core"
import React from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import AmountTable from "./AmountTable"

const LineC = () => {
  const data = [
    {
      id: 0,
      Year: "",
      Amount: "",
    },
    {
      id: 1,
      Year: "Jan",
      Amount: 30000,
    },
    {
      id: 2,
      Year: "Feb",
      Amount: 55000,
    },
    {
      id: 3,
      Year: "Mar",
      Amount: 22000,
    },
    {
      id: 4,
      Year: "Apr",
      Amount: 79000,
    },
    {
      id: 5,
      Year: "May",
      Amount: 50000,
    },
    {
      id: 6,
      Year: "Jun",
      Amount: 20000,
    },
    {
      id: 7,
      Year: "Jul",
      Amount: 55000,
    },
    {
      id: 8,
      Year: "Aug",
      Amount: 10000,
    },
    {
      id: 9,
      Year: "Sep",
      Amount: 70000,
    },
    {
      id: 10,
      Year: "Oct",
      Amount: 82000,
    },
    {
      id: 11,
      Year: "Nov",
      Amount: 40000,
    },
    {
      id: 12,
      Year: "Dec",
      Amount: 79000,
    },
  ]
  return (
    <div className=" mt-5 row d-flex justify-content-between">
      <div className="chart col-md-6">
        <h4>Total Amount Generated</h4>
        <Paper elevation={20}>
          <ResponsiveContainer aspect={4 / 1}>
            <LineChart data={data}>
              <XAxis dataKey="Year" stroke="#5550bd" />
              {/* <YAxis dataKey="name" stroke="#5550bd" /> */}
              <Line type="monotone" dataKey="Amount" stroke="purple" />
              <Tooltip />
              <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </Paper>
      </div>
      <div className="col-md-6">
        <AmountTable />
      </div>
    </div>
  )
}

export default LineC
