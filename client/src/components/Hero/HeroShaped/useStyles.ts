import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      height: '100%',
      width: '100%',
      overflow: 'hidden',
    },
    hero: {
      position: 'relative',
      width: '100%',
      height: '100%',
      display: 'flex',
      maxWidth: 1236,
      margin: '0 auto',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column-reverse',
      },
    },
    heroLeftSide: {
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(3, 8),
      },
      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(3, 2),
      },
    },
    heroRightSide: {
      maxWidth: '50%',
      flex: '0 0 50%',
      position: 'relative',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
        flex: '0 0 100%',
        height: '300px',
      },
    },
    heroCover: {
      position: 'relative',
      width: '50vw',
      height: '100%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    heroImageContainer: {
      height: '100%',
      width: '100%',
      overflow: 'hidden',
    },
    heroImage: {
      position: 'absolute',
      left: '0%',
      width: '100%',
      height: '100%',
      [theme.breakpoints.up('md')]: {
        shapeOutside: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
        clipPath: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
      },
    },
  }));

  export default useStyles;