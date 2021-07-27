import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  expandBtn: {
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
      border: '1px solid black',
    },
    width: '90vw',
    borderRadius: 0,
    margin: '5px 0',
    border: '1px solid white',
  },
}));

export default useStyles;
