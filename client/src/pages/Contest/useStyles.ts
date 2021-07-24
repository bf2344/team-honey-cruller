import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grid: {
    width: '100%',
    height: '100%',
    fontWeight: 'bolder',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  backIcon: {
    height: '10px',
  },
  contestTitle: {
    fontSize: 38,
    fontWeight: 'bolder',
    fontFamily: "'Open Sans'",
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  prizeAmount: {
    backgroundColor: 'black',
    color: '#ffff',
    marginLeft: 20,
    borderRadius: '0',
    fontSize: 100,
    '&:hover': {
      backgroundColor: 'black',
      color: '#ffff',
    },
  },
  prize: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  avatar: {
    height: 45,
    width: theme.spacing(6),
    marginTop: 10,
  },
  user: {
    fontSize: 17,
    marginTop: 20,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  button: {
    color: '#000000',
    border: '1.5px solid black',
    width: '100%',
    height: '60%',
    borderRadius: 0,
    marginTop: 12,
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
    },
  },
  container: {
    marginTop: '32px',
    fontFamily: "'Open Sans'",
  },
  toolbar: {
    border: 0,
  },
  tabs: {
    color: '#000000',
    textColorPrimary: '#000000',
    width: '100%',
    fontWeight: 'bold',
    padding: 0,
  },
  descriptionHeader: { textDecoration: 'underline', margin: '15px 0 20px' },
  imageList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    margin: '40px 0 20px',
    padding: '20px 0',
    marginTop: '40px',
    marginBottom: '20px',
  },
  listItem: {
    margin: '0 5px',
    width: '25%',
    [theme.breakpoints.down('sm')]: {
      width: '50%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  username: {
    textTransform: 'capitalize',
  },
  greyText: {
    color: '#CECECE',
    fontWeight: 'bolder',
  },
  designGrid: {
    marginTop: 50,
  },
}));

export default useStyles;
