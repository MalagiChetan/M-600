import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import ChartD from "./ChartD"

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

function createData(slno, generatedfor, date, status) {
  return { slno, generatedfor, date, status }
}

const rows = [
  createData("01", "Wipro", "19 Jun 2020", "Delivered"),
  createData("02", "Adidas", "19 Jun 2020", "Not Delivered"),
  createData("03", "HCL", "19 Jun 2020", "Cancelled"),
  createData("04", "Pepper fry", "19 Jun 2020", "Not Delivered"),
]

function MandateTable() {
  const classes = useStyles()

  return (
    <div className=" mt-5 row d-flex justify-content-between">
      <div className="chart col-md-6">
        <h4>Mandate Table</h4>
        <Paper elevation={20}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead style={{ backgroundColor: "lightgray" }}>
                <TableRow>
                  <TableCell>Sl No.</TableCell>
                  <TableCell align="center">Generated for</TableCell>
                  <TableCell align="center">Generated Date</TableCell>
                  <TableCell align="center">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.slno}
                    </TableCell>
                    <TableCell align="center">{row.generatedfor}</TableCell>
                    <TableCell align="center">{row.date}</TableCell>
                    <TableCell align="center">{row.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
      <div className="col-md-6">
        <ChartD />
      </div>
    </div>
  )
}

export default MandateTable
