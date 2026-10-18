import React from "react";
import Sidebar from "../SidebarTemp";
import "./Stylesheets/Dashboard.css";

function DashBoard() {
  return (
    <div className="dashboardPage">
      <Sidebar />

      <main>
        <div className="greetingDiv">
          <p id="welcomeText">Welcome back "Name"</p>

          <p id="note">Heres an Overview of your job search</p>
        </div>

        <div className="statsContainer">
          <div className="statCard">
            <p>Total Applications</p>
            <p>12</p>
          </div>

          <div className="statCard">
            <p>Applied</p>
            <p>3</p>
          </div>

          <div className="statCard">
            <p>Interviews</p>
            <p>5</p>
          </div>

          <div className="statCard">
            <p>Offers</p>
            <p>5</p>
          </div>

          <div className="statCard">
            <p>Rejected</p>
            <p>5</p>
          </div>
        </div>

        <div className="cardList2">
          <div className="trackCard">
            <h3>Application Status</h3>
            <p>chart</p>

            <ul>
              <li>
                <div>
                  <p>Applied</p>

                  <p>15</p>
                </div>
              </li>

              <li>
                <div>
                  <p>Upcoming Interview</p>

                  <p>15</p>
                </div>
              </li>

              <li>
                <div>
                  <p>Offer</p>

                  <p>15</p>
                </div>
              </li>

              <li>
                <div>
                  <p>Upcoming Deadlines</p>

                  <p>15</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="trackCard">
            <div className="headerDiv">
              <h3>Upcoming Deadlines</h3>
              <button>View all</button>
            </div>

            <ul>
              <li>
                <div>
                  <p>Logo</p>
                  <p>Title</p>

                  <p>15 days left</p>
                </div>
              </li>

              <li>
                <div>
                  <p>Logo</p>
                  <p>Title</p>

                  <p>15 days left</p>
                </div>
              </li>

              <li>
                <div>
                  <p>Logo</p>
                  <p>Title</p>

                  <p>15 days left</p>
                </div>
              </li>

              <li>
                <div>
                  <p>Logo</p>
                  <p>Title</p>

                  <p>15 days left</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="trackCard">
            <div className="headerDiv">
              <h3>Upcoming Deadlines</h3>
              <button>View all</button>
            </div>

            <ul>
              <li>
                <div>
                  <p>Logo</p>
                  <p>Title</p>

                  <p>15 days left</p>
                </div>
              </li>

              <li>
                <div>
                  <p>Logo</p>
                  <p>Title</p>

                  <p>15 days left</p>
                </div>
              </li>

              <li>
                <div>
                  <p>Logo</p>
                  <p>Title</p>

                  <p>15 days left</p>
                </div>
              </li>

              <li>
                <div>
                  <p>Logo</p>
                  <p>Title</p>

                  <p>15 days left</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashBoard;
