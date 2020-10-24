import React from "react";
import { useState } from "react";
import {
  Typography,
  Grid,
  makeStyles,
  withStyles,
  Container,
  CssBaseline,
  Divider,
  FormGroup,
  TextField,
  Button,
} from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import StarIcon from "@material-ui/icons/Star";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import PhoneCallbackIcon from "@material-ui/icons/PhoneCallback";
import CallRoundedIcon from "@material-ui/icons/CallRounded";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { green } from '@material-ui/core/colors';
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TodayIcon from "@material-ui/icons/Today";
import WifiIcon from "@material-ui/icons/Wifi";
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "right",
    padding: "0",
  },

  small: {
    direction: "row",
  },
  textA: {
    textAlign: "left",
    padding: "0",
    hight: "0",
  },
  colo: {
    color: "rgb(54,73,89)",
  },
  pad: {
    padding: "0",
  },
  ButtonC: {
    backgroundColor: 'rgb(76,175,80)',
    primary:'green',
    
  },
}));
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: 'rgb(54,73,89)',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: 'rgb(23,171,117)',
    '&:nth-of-type(odd)': {
      backgroundColor: 'rgb(171,29,29)',
    },
  },
}))(TableRow);
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("milk", 159, 6.0, 24, 4.0),
  createData("milk", 237, 9.0, 37, 4.3),
  createData("milk", 262, 16.0, 24, 6.0),
  createData("milk", 305, 3.7, 67, 4.3),
  createData("milk", 356, 16.0, 49, 3.9),
];
const FollowUp = ({ onSave, value }) => {
  const classes = useStyles();
  let defaultState = {
    Status: "",
    followup: "",
  };
  const [FollowUpData, setFollowUpData] = useState(defaultState);
  const handleStatusChange = (event) => {
    let temp = { ...FollowUpData };
    temp.Status = event.target.value;
    setFollowUpData(temp);
    console.log(FollowUpData);
  };
  const handleFollowChange = (event) => {
    let temp = { ...FollowUpData };
    temp.followup = event.target.value;
    setFollowUpData(temp);
    console.log(FollowUpData);
  };
  return (
    <Grid container item xs={12}>
      <Container className={classes.colo}>
        <Typography component="div" variant="h5" align="left">
          Vendor Details
        </Typography>
        <Divider />
        <Grid direction="row" className={classes.pad}>
          <Box className={classes.textA} display="flex" p={1}>
            <Box p={1} flexGrow={1} className={classes.pad}>
              <Typography align="left">Rahul Chauhan</Typography>
            </Box>
            <Box p={1} className={classes.root}>
              <Badge color="primary" style={{ marginLeft: "10px" }}>
                <StarIcon />
                <Typography>4.5</Typography>
              </Badge>
              <Badge color="secondary" style={{ marginLeft: "10px" }}>
                <ThumbUpAltIcon />
                <Typography>4.5</Typography>
              </Badge>
              <Badge color="error" style={{ marginLeft: "10px" }}>
                <PhoneCallbackIcon />
                <Typography>9.5</Typography>
              </Badge>
            </Box>
          </Box>
          <Grid
            display="flex"
            justifyContent="flex-start"
            className={classes.textA}
          >
            <Badge color="primary">
              <CallRoundedIcon />
              <Typography>9654443566</Typography>
            </Badge>
            <Badge color="primary" style={{ marginLeft: "30px" }}>
              <MailIcon />
              <Typography>rahul@gmail.com</Typography>
            </Badge>
          </Grid>
        </Grid>
        <Grid>
          <Typography
            component="div"
            variant="h5"
            align="left"
            style={{ marginTop: "20px" }}
          >
            Order & Follow up Details
          </Typography>
          <Divider />
          <Grid direction="row">
            <Box className={classes.textA} display="flex" p={1}>
              <Box p={1} flexGrow={1}>
                <Typography align="left">Curd order #123</Typography>
              </Box>
              <Box p={1}>
                <Grid className={classes.root}>
                  <Badge color="primary" style={{ marginLeft: "10px" }}>
                    <TodayIcon />
                    <Typography>18 Aug</Typography>
                  </Badge>
                  <Badge color="secondary" style={{ marginLeft: "10px" }}>
                    <WifiIcon />
                    <Typography>Full Knitting</Typography>
                  </Badge>
                  <Badge color="error" style={{ marginLeft: "10px" }}>
                    <ReportProblemOutlinedIcon />
                    <Typography>High</Typography>
                  </Badge>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Item</StyledTableCell>
                <StyledTableCell align="right">Quantity</StyledTableCell>
                <StyledTableCell align="right">Delivery</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">Remark</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}  >
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell  align="right">{row.calories}</StyledTableCell>
                  <StyledTableCell align="right">{row.fat}</StyledTableCell>
                  <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                  <StyledTableCell align="right">{row.protein}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid direction="row">
          <Box
            className={classes.textA}
            display="flex"
            p={1}
            style={{ marginTop: "20px" }}
          >
            <Box p={1} flexGrow={1}>
              <Typography align="left">
                {" "}
                Follow up with Vendor every week on the Thursday.
              </Typography>
            </Box>
            <Box p={1}>
              <TextField
                required
                id="outlined-required"
                label="Status"
                value={FollowUpData.Status}
                onChange={handleStatusChange}
                variant="outlined"
              />
            </Box>
          </Box>
        </Grid>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Followup</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={FollowUpData.followup}
            onChange={handleFollowChange}
            // startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
        <Button
          variant="contained"
          
          className={classes.ButtonC}
          style={{ marginTop: "10px" }}
          onClick={(event) => {
            if (onSave) onSave(FollowUpData);
            console.log(FollowUpData);
          }}
        >
          Save
        </Button>
      </Container>
    </Grid>
  );
};

export default FollowUp;
