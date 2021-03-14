import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CancelledTrain from "./CancelledTrain";
import LiveTrain from "./LiveTrain";
import PnrStatus from "./PnrStatus";
import SeatAvail from "./SeatAvail";
import TrainBWStation from "./TrainBWStation";
import TrainFair from "./TrainFair";
import TrainSchedule from "./TrainSchedule";

function Home() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Router>
        <nav className={toggle ? "active" : ""}>
          <ul>
            <li>
              <Link to="/">PNR Status</Link>
            </li>
            <li>
              <Link to="/train_between_Station">Train Bitween Stations</Link>
            </li>
            <li>
              <Link to="/trainSchedule">Train Schedule</Link>
            </li>
            <li>
              <Link to="/seatavail">Seat Avail</Link>
            </li>
            <li>
              <Link to="/trainfair">Train Fair</Link>
            </li>
            <li>
              <Link to="/livetrain">Live Trains</Link>
            </li>
            <li>
              <Link to="/cancelledTrain">Cancelled Trains</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={PnrStatus} />
          <Route
            path="/train_between_Station"
            exact
            component={TrainBWStation}
          />
          <Route path="/trainfair" exact component={TrainFair} />
          <Route path="/trainSchedule" exact component={TrainSchedule} />
          <Route path="/seatavail" exact component={SeatAvail} />
          <Route path="/livetrain" exact component={LiveTrain} />
          <Route path="/cancelledTrain" exact component={CancelledTrain} />
        </Switch>
      </Router>
    </>
  );
}

export default Home;
