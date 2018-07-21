import React, { Fragment } from 'react'

import styles from './Home.css'

const Home = () => (
  <Fragment>
    <div className={styles.userProfileContent}>
      <div className={styles.topRow}>
        <h1>Performance Overview</h1>
        <div className={styles.profileIcons}>
          <div className={styles.leadCount} />
          <div className={styles.contractCount} />
          <div className={styles.priceCount} />
          <div className={styles.totalSummary} />
        </div>
      </div>
      <div className={styles.midRow}>
        <div className={styles.firstColumn}>
          <div className={styles.heading}>
            <h1>YOY Comparison</h1>
            <p>Jan 1, 2018 - Today</p>
          </div>
          <div className={styles.largeGraph} />
        </div>
        <div className={styles.secondColumn}>
          <div className={styles.heading}>
            <h1>Leads Conversion</h1>
          </div>
          <div className={styles.circleGraph} />
        </div>
      </div>
      <div className={styles.bottomRow}>
        <div className={styles.leads}>
          <h1>Active Leads</h1>
          <div className={styles.summaryHeading}>
            <ul>CUSTOMER</ul>
            <ul>LEAD</ul>
            <ul>QUOTE(S)</ul>
          </div>
          <div className={styles.summaries}>
            <div className={styles.summary} />
            <div className={styles.summary} />
            <div className={styles.summary} />
            <div className={styles.summary} />
            <div className={styles.summary} />
          </div>
        </div>
        <div className={styles.jobs}>
          <h1>Active Jobs</h1>
          <div className={styles.summaryHeading}>
            <ul>CUSTOMER</ul>
            <ul>JOB</ul>
            <ul>QUOTE(S)</ul>
          </div>
          <div className={styles.summaries}>
            <div className={styles.summary} />
            <div className={styles.summary} />
            <div className={styles.summary} />
            <div className={styles.summary} />
            <div className={styles.summary} />
          </div>
        </div>
      </div>
    </div>
  </Fragment>
)

export default Home
