import React from "react"
import PrimarySearchAppBar from "./PrimarySearchAppBar"
import FeaturedInfo from "./FeaturedInfo"
import LineC from "./LineC"
import MandateTable from "./MandateTable"

const Dashboard = () => {
  return (
    <div>
      <PrimarySearchAppBar />
      <FeaturedInfo />
      <LineC />
      <MandateTable />
    </div>
  )
}

export default Dashboard
