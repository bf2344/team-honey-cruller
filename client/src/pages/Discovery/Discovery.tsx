import { useEffect, useState } from 'react';
import { useAuth } from '../../context/useAuthContext';
import { Contest } from '../../interface/User';
import { Column } from '../../interface/Discovery';
import { getAllContests } from '../../helpers/APICalls/contest';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateRangeIcon from '@material-ui/icons/DateRange';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TablePagination from '@material-ui/core/TablePagination';
import Box from '@material-ui/core/Box';
import Carousel from 'react-material-ui-carousel';
import SortIcon from '@material-ui/icons/Sort';
import { Animated } from 'react-animated-css';
import withWidth, { WithWidth } from '@material-ui/core/withWidth';
import Hidden from '@material-ui/core/Hidden';
import useStyles from './useStyles';

//might have to delete later
import { Link } from 'react-router-dom';

export default function Discovery(props: WithWidth): JSX.Element {

  const [contests, setContests] = useState<Contest[]>([]);
  const [sortType, setSortType] = useState<keyof Contest>('deadlineDate');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [dateFilter, setDateFilter] = useState<any>();
  const { loggedInUser } = useAuth();
  const { width } = props;
  const classes = useStyles();

  const fetchCall = async (date: any) => {
    const allContests = await getAllContests(date);
    if (allContests.contests) {
      setContests(allContests.contests);
    } else {
      return new Error('Could Not Get Contests');
    }
  }

  useEffect(() => {
    fetchCall('')
  }, []);

  useEffect(() => {
    if (dateFilter !== undefined) {
      const date = moment.utc(dateFilter._d).format()
      fetchCall(date)
    }
  }, [dateFilter]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChangeDate = (date: any) => {
    const momentTime = date
    setDateFilter(momentTime);
  };

  const sortByHeader = (sortParam: Contest[] = contests) => {
    if (contests) {
      const sort = [...sortParam].sort((a: Contest, b: Contest) => {
        if (a[sortType] > b[sortType]) {
          return 1;
        } else if (a[sortType] < b[sortType]) {
          return -1;
        } else {
          return 0;
        }
      });
      setContests(sort);
    }
  };

  return (
    <>
      <AuthHeader linkTo="/create-contest" btnText="create contest" />
      <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
        <Grid container justify="center" className={classes.grid}>
          <Grid className={classes.tableContainer}>
            <Hidden xsDown>
              <Paper elevation={20} className={classes.heroImage}>
                <Box className={classes.heroContents}>
                  <Typography variant='h2'>Welcome to Tatoo Art</Typography>
                  <Typography paragraph={true}>Premier tatoo designs created by artists all over the world.</Typography>
                </Box>
              </Paper>

              <Paper>
                <Carousel
                  animation="fade"
                  next={(now: any, previous: any) => console.log(`Next User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                  prev={(now: any, previous: any) => console.log(`Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                  onChange={(now: any, previous: any) => console.log(`OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                >
                  {contests.map((contest, i) => {
                    return (
                      <>
                        <Typography variant='h4'>{contest.title}</Typography>
                      </>
                    )
                  })}
                </Carousel>
              </Paper>
              </Hidden>
            <Grid item>
              <Typography className={classes.typography}>All Open Contests</Typography>
            </Grid>
            <Grid container justify="center" className={classes.muiPicker}>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <Grid item xs={5}>
                  <KeyboardDatePicker
                    id="date"
                    name="deadlineDate"
                    margin="normal"
                    variant="inline"
                    inputVariant="outlined"
                    format="MMM Do YYYY"
                    value={dateFilter}
                    onChange={value => handleChangeDate(value)}
                    keyboardIcon={<DateRangeIcon />}
                    autoOk={true}
                  />
                  <Button className={classes.buttonReset} onClick={() => fetchCall('')}>
                    Reset Filter
                  </Button>
                </Grid>
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
          <Paper className={classes.paper}>
            <TableContainer>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow className={classes.tableHead}>
                    <TableCell className={classes.tableRow} key="Contest Title">
                      Contest Title
                    </TableCell>
                    <TableCell className={classes.tableRow} key="Contest Description">
                      Contest Description
                    </TableCell>
                    <TableCell className={classes.tableRow} key="Prize Amount">
                      Prize Amount
                    </TableCell>
                    <TableCell className={classes.tableRow} key="Deadline Date">
                      <div onClick={() => sortByHeader()}>Deadline Date</div>
                    </TableCell>
                    <TableCell className={classes.tableRow} key="Contest Page">
                      Contest Page
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {contests.map((contest) => {
                    return (
                      <>
                        <TableRow hover role="checkbox" className={classes.tableHead} tabIndex={-1} key={contest.title}>
                          <TableCell className={classes.tableRow}>{contest.title}</TableCell>
                          <TableCell className={classes.tableRow}>{contest.description}</TableCell>
                          <TableCell className={classes.tableRow}>${contest.prizeAmount}</TableCell>
                          <TableCell className={classes.tableRow}>{moment(contest.deadlineDate).local().format('MM-DD-YYYY')}</TableCell>
                          <TableCell className={classes.tableRow}>
                            <Button className={classes.button} component={Link} to={`/contest/${contest._id}`}>
                              More Info
                            </Button>
                          </TableCell>
                        </TableRow>
                      </>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Animated>
    </>
  );
}
