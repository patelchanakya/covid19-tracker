import React from 'react';
import { Typography, Grid } from '@material-ui/core';

import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.top}>
      <Grid container spacing={1} justify='center'>
        <Typography>
          <h1 className={styles.h1} data-text="Covid-19 Tracker"><span>COVID-19 Tracker</span></h1>
        </Typography>
      </Grid>
    </div>
  )
}

export default Header;