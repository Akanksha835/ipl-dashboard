// Write your code here
import {Component} from 'react'

import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      secondsInnings,
      umpires,
      venue,
      result,
    } = latestMatch

    return (
      <div className="latest-match-card-container">
        <h1 className="heading">Latest Match</h1>
        <div className="latest-match-card">
          <div className="latest-match-logo-container">
            <div className="latest-match-details-main">
              <p className="latest-match-team-name">{competingTeam}</p>
              <p className="latest=match-date">{date}</p>
              <p className="latest-match-venue">{venue}</p>
              <p className="latest-match-result">{result}</p>
            </div>
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
              className="logo"
            />
          </div>
          <div className="latest-match-details-info">
            <div className="match-info-item">
              <p className="label">First Innings</p>
              <p className="value">{firstInnings}</p>
            </div>
            <div className="match-info-item">
              <p className="label">Second Innings</p>
              <p className="value">{secondsInnings}</p>
            </div>
            <div className="match-info-item">
              <p className="label">Man Of The Match</p>
              <p className="value">{manOfTheMatch}</p>
            </div>
            <div className="match-info-item">
              <p className="label">Umpires</p>
              <p className="value">{umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default LatestMatch
