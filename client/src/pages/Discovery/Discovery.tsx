import { useEffect, useState } from 'react';
import { useAuth } from '../../context/useAuthContext';
import { Winner } from '../../interface/User';
import ContestTable from '../../components/ContestTable/ContestTable';
import { getSomeWinners } from '../../helpers/APICalls/winner';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import MyTablePagination from '../../components/TablePagination/TablePagination';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Animated } from 'react-animated-css';
import WinnerCard from '../../components/WinnerCard/WinnerCard';
import Section from '../../components/Section/Section';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { Divider } from '@material-ui/core';
import SplashReviews from '../../components/SplashReviews/SplashReviews';
import SectionAlternate from '../../components/SectionAlternate/SectionAlternate';
import Hero from '../../components/Hero/Hero';
import useStyles from './useStyles';

export default function Discovery(): JSX.Element {
  const [winners, setWinners] = useState<Winner[]>([]);
  const classes = useStyles();

  const winnersData = async () => {
    const getWinners = await getSomeWinners(4);
    if (getWinners) {
      setWinners(getWinners);
    } else {
      return new Error('Could Not Get Winners');
    }
  };

  useEffect(() => {
    winnersData();
  }, []);

  return (
    <>
      <AuthHeader linkTo="/create-contest" btnText="create contest" />
      <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
        <Hero />
        <Section>
          <Grid>
            <SectionHeader
              title={
                <Typography component="span" variant="inherit" color="primary">
                  Check out some of our recent Contest winners.
                </Typography>
              }
              subtitle="We Guarantee atleast 20 submissions to your contest and you could receive up to 500+."
              fadeUp
            />
            <div className={classes.winnerCard}>
              {winners.map((winner, i) => {
                return (
                  <>
                    <Grid item container alignItems="center" direction="column" xs={12} sm={6} md={3}>
                      <WinnerCard
                        winningPic={winner.winningPic}
                        title={winner.title}
                        prizeAmount={winner.prizeAmount}
                        winningArtist={winner.winningArtist}
                        description={winner.description}
                        key={winner.description}
                      />
                    </Grid>
                  </>
                );
              })}
            </div>
          </Grid>
        </Section>
        <Divider />
        <SectionAlternate>
          <SplashReviews className="reviews" />
        </SectionAlternate>
        <Divider />
        <div className={classes.table}>
          <ContestTable />
        </div>
        <Divider />
      </Animated>
    </>
  );
}
