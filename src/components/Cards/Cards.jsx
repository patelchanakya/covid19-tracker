import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

// destructure props to confirmed, recovered, deaths, lastUpdate
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading"
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={1} justify='center'>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography className="card-title" color='textSecondary' gutterBottom>Infected</Typography>
            <Typography className="card-numbers" variant='h5'>
              <CountUp start={0} end={confirmed.value} duration={2} seperator=","></CountUp>
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2'>Number of active cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Recovered</Typography>
            <Typography variant='h5' color='red'>
              <CountUp start={0} end={recovered.value} duration={2} seperator=","></CountUp>
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2'>Number of recoveries made</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Deaths</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={deaths.value} duration={2} seperator=","></CountUp>
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2'>Number of deaths recorded</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards;