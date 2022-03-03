import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles({
  table: {
    minWidth: 650  },
})

function createData(slno, company, amount, invoices) {
  return { slno, company, amount, invoices }
}

const rows = [
  createData("01", "Infosys", "$2,00,000", 210, 4.0),
  createData("02", "HTC", "$20,000", 24),
]

function AmountTable() {
  const classes = useStyles()

  return (
    <div>
      <h4>Total Amount Generated</h4>
      <TableContainer component={Paper} elevation={20}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead style={{ backgroundColor: "lightgray" }}>
            <TableRow>
              <TableCell>Sl No.</TableCell>
              <TableCell align="center">Company Name</TableCell>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="center">No. of Invoices</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.slno}
                </TableCell>
                <TableCell align="center">{row.company}</TableCell>
                <TableCell align="center">{row.amount}</TableCell>
                <TableCell align="center">{row.invoices}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default AmountTable
