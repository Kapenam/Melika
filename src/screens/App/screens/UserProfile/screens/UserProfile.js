import React, { Fragment } from 'react'
import { SideMenuBar } from 'screens/App/components'
import './UserProfile.css'

const UserProfile = () => (
  <Fragment>
    <SideMenuBar />
    <div className="userProfileContent">
      <div className="topRow">
        <h1>
          Performance Overview
        </h1>
        <div className="profileIcons">
          <span className="leadCount" />
          <span className="contractCount" />
          <span className="priceCount" />
          <span className="totalSummary" />
        </div>
      </div>
      {/* <div className="midRow">
        <div className="firstColumn">
          <div className="heading">
            <h1>YOY Comparison</h1>
            <p>Jan 1, 2018 - Today</p>
          </div>
          <span className={'largeGraph'} />
        </div>
        <div className="secondColumn">
          <h1>Leads Conversion</h1>
          <span className={'circleGraph'} />
        </div>
      </div>
      <div className="bottomRow">
        <div className="leads">
          <h1>Active Leads</h1>
          <div className="summaryHeading">
            <p>CUSTOMER</p>
            <p>LEAD</p>
            <p>QUOTE(S)</p>
          </div>
          <div className="summaries">
            <span className={'summary'} />
            <span className={'summary'} />
            <span className={'summary'} />
            <span className={'summary'} />
          </div>
        </div>
        <div className="jobs">
          <h1>Active Jobs</h1>
          <div className="summaryHeading">
            <p>CUSTOMER</p>
            <p>JOB</p>
            <p>QUOTE(S)</p>
          </div>
          <div className="summaries">
            <span className={'summary'} />
            <span className={'summary'} />
            <span className={'summary'} />
            <span className={'summary'} />
            <span className={'summary'} />
          </div>
        </div>
      </div> */}
    </div>
  </Fragment>
)

export default UserProfile
