import React from "react";
import Sidebar from "../SidebarTemp";
import "./Stylesheets/Dashboard.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import WorkIcon from "@mui/icons-material/Work";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

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
              <h3>Upcoming Interviews</h3>
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

        <div className="cardList3">
          <div className="recentApplications">
            <div className="recentApplicationHeader">
              <p>Recent Applications</p>
              <button>See All Applications</button>
            </div>

            <table className="applicationsTable">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Position</th>
                  <th>Date Applied</th>
                  <th>Deadline</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Google</td>
                  <td>Software Developer</td>
                  <td>November 13, 2026</td>
                  <td>November 30, 2026</td>
                  <td>
                    <span className="statusBadge">Applied</span>
                  </td>
                  <td>
                    <div className="actionButtons">
                      <button
                        className="editButton"
                        aria-label="Edit application"
                      >
                        <EditIcon />
                      </button>

                      <button
                        className="deleteButton"
                        aria-label="Delete application"
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Google</td>
                  <td>Software Developer</td>
                  <td>November 13, 2026</td>
                  <td>November 30, 2026</td>
                  <td>
                    <span className="statusBadge">Applied</span>
                  </td>
                  <td>
                    <div className="actionButtons">
                      <button
                        className="editButton"
                        aria-label="Edit application"
                      >
                        <EditIcon />
                      </button>

                      <button
                        className="deleteButton"
                        aria-label="Delete application"
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="quickActions">
            <p>Quick Actions</p>

            <button>
              <AddIcon size={18} />
              Add Application
            </button>

            <button>
              <WorkIcon size={18} />
              View All Applications
            </button>

            <button>
              <CalendarMonthIcon size={18} />
              View Interviews
            </button>

            <button>
              <AccessTimeIcon size={18} />
              View Deadlines
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashBoard;
