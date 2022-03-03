import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import AssignmentIcon from "@material-ui/icons/Assignment"
import AssignmentLateIcon from "@material-ui/icons/AssignmentLate"
import ReceiptIcon from "@material-ui/icons/Receipt"
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}))

function FeaturedInfo() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={5} style={{ marginTop: ".3%" }}>
        <Grid item xs={3} md={3}>
          <Paper className={classes.paper} elevation={8}>
            <div style={{ display: "flex" }}>
              <span>
                <AssignmentIcon
                  style={{
                    fontSize: "55px",
                    color: "green",
                    backgroundColor: "lightgreen",
                  }}
                />
              </span>
              <div>
                <Typography>Total Amount Paid</Typography>
                <Typography variant="h5" style={{ fontWeight: "700" }}>
                  $10,00,000
                </Typography>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={3} md={3}>
          <Paper className={classes.paper} elevation={8}>
            <div style={{ display: "flex" }}>
              <span>
                <AssignmentLateIcon
                  style={{
                    fontSize: "55px",
                    color: "yellow",
                    backgroundColor: "lightyellow",
                  }}
                />
              </span>
              <div>
                <Typography>Total Amount to be paid</Typography>
                <Typography variant="h5" style={{ fontWeight: "700" }}>
                  $1,00,000
                </Typography>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={3} md={3}>
          <Paper className={classes.paper} elevation={8}>
            <div style={{ display: "flex" }}>
              <span>
                <ReceiptIcon
                  style={{
                    fontSize: "55px",
                    color: "blue",
                    backgroundColor: "lightblue",
                  }}
                />
              </span>
              <div>
                <Typography>Total Amount Paid</Typography>
                <Typography variant="h5" style={{ fontWeight: "700" }}>
                  $10,00,000
                </Typography>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={3} md={3}>
          <Paper className={classes.paper} elevation={8}>
            <div style={{ display: "flex" }}>
              <span>
                <InsertInvitationIcon
                  style={{
                    fontSize: "55px",
                    color: "magenta",
                    backgroundColor: "lightpink",
                  }}
                />
              </span>
              <div>
                <Typography>Total Amount Paid</Typography>
                <Typography variant="h5" style={{ fontWeight: "700" }}>
                  $10,00,000
                </Typography>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default FeaturedInfo
