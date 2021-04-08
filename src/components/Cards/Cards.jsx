import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './style.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Total de casos"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Número de casos do COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recuperados"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Número de pacientes recuperados do COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Mortes"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Número de mortes pelo COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Info;