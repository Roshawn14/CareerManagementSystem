import React, { useEffect, useState } from "react";

import Sidebar from "../SidebarTemp";

import "./Stylesheets/Dashboard.css";

import AddIcon from "@mui/icons-material/Add";
import WorkIcon from "@mui/icons-material/Work";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { applicationAPI } from "../../services/api";
import { interviewAPI } from "../../services/api";
import { deadlineAPI } from "../../services/api";

// Format dates for display
function formatDate(dateString) {
  if (!dateString) return "N/A";

  const [year, month, day] = dateString.split("-").map(Number);

  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Calculate days remaining
function getDaysRemaining(dateString) {
  if (!dateString) return null;

  const [year, month, day] = dateString.split("-").map(Number);

  const targetDate = new Date(year, month - 1, day);
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  return Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24));
}

function DashBoard() {
  const [applications, setApplications] = useState([]);
  const [interviews, setInterviews] = useState([]);
  const [deadlines, setDeadlines] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Temporary user ID until authentication is implemented
  const userId = 1;

  // Retrieve dashboard information
  useEffect(() => {
    async function loadDashboard() {
      const results = await Promise.allSettled([
        applicationAPI.getByUser(userId),
        interviewAPI.getByUser(userId),
        deadlineAPI.getByUser(userId),
      ]);

      const errors = [];

      if (results[0].status === "fulfilled") {
        setApplications(results[0].value);
      } else {
        errors.push("Applications could not be loaded.");
      }

      if (results[1].status === "fulfilled") {
        setInterviews(results[1].value);
      } else {
        errors.push("Interviews could not be loaded.");
      }

      if (results[2].status === "fulfilled") {
        setDeadlines(results[2].value);
      } else {
        errors.push("Deadlines could not be loaded.");
      }

      setError(errors.join(" "));
      setLoading(false);
    }

    loadDashboard();
  }, []);

  // Calculate application statistics
  const totalApplications = applications.length;

  const appliedCount = applications.filter(
    (app) => app.status === "Applied"
  ).length;

  const interviewCount = interviews.length;

  const offerCount = applications.filter(
    (app) => app.status === "Offer"
  ).length;

  const rejectedCount = applications.filter(
    (app) => app.status === "Rejected"
  ).length;

  // Upcoming deadlines
  const upcomingDeadlines = deadlines
    .filter((deadline) => {
      const days = getDaysRemaining(deadline.deadlineDate);

      return days !== null && days >= 0 && deadline.status === "Pending";
    })
    .sort((a, b) => a.deadlineDate.localeCompare(b.deadlineDate));

  // Upcoming interviews
  const upcomingInterviews = interviews
    .filter((interview) => {
      const days = getDaysRemaining(interview.interviewDate);

      return (
        days !== null &&
        days >= 0 &&
        ["Scheduled", "Rescheduled"].includes(interview.interviewStatus)
      );
    })
    .sort((a, b) => a.interviewDate.localeCompare(b.interviewDate));

  // Most recent five applications
  const recentApplications = [...applications]
    .sort((a, b) => (b.dateApplied || "").localeCompare(a.dateApplied || ""))
    .slice(0, 4);

  // Loading message
  if (loading) {
    return (
      <div className="dashboardPage">
        <Sidebar />
        <main>
          <h2>Loading dashboard...</h2>
        </main>
      </div>
    );
  }

  return (
    <div className="dashboardPage">
      <Sidebar />

      <main>
        {/* GREETING */}
        <div className="greetingDiv">
          <p id="welcomeText">Welcome back!</p>

          <p id="note">Here's an overview of your job search.</p>
        </div>

        {error && <p className="dashboardError">{error}</p>}

        {/* STATISTICS */}
        <div className="statsContainer">
          <div className="statCard">
            <p>Total Applications</p>
            <p>{totalApplications}</p>
          </div>

          <div className="statCard">
            <p>Applied</p>
            <p>{appliedCount}</p>
          </div>

          <div className="statCard">
            <p>Interviews</p>
            <p>{interviewCount}</p>
          </div>

          <div className="statCard">
            <p>Offers</p>
            <p>{offerCount}</p>
          </div>

          <div className="statCard">
            <p>Rejected</p>
            <p>{rejectedCount}</p>
          </div>
        </div>

        {/* MIDDLE DASHBOARD CARDS */}
        <div className="cardList2">
          {/* APPLICATION STATUS */}
          <div className="trackCard">
            <h3>Application Status</h3>

            <ul>
              <li>
                <div>
                  <p>Applied</p>
                  <p>{appliedCount}</p>
                </div>
              </li>

              <li>
                <div>
                  <p>Upcoming Interviews</p>
                  <p>{upcomingInterviews.length}</p>
                </div>
              </li>

              <li>
                <div>
                  <p>Offers</p>
                  <p>{offerCount}</p>
                </div>
              </li>

              <li>
                <div>
                  <p>Upcoming Deadlines</p>
                  <p>{upcomingDeadlines.length}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* UPCOMING DEADLINES */}
          <div className="trackCard">
            <div className="headerDiv">
              <h3>Upcoming Deadlines</h3>
            </div>

            <ul>
              {upcomingDeadlines.length === 0 ? (
                <li>
                  <p>No upcoming deadlines.</p>
                </li>
              ) : (
                upcomingDeadlines.slice(0, 4).map((deadline) => (
                  <li key={deadline.deadlineId}>
                    <div>
                      <p>
                        {deadline.application?.company?.companyName ||
                          deadline.description ||
                          "Deadline"}
                      </p>

                      <p>
                        {getDaysRemaining(deadline.deadlineDate) === 0
                          ? "Due today"
                          : `${getDaysRemaining(
                              deadline.deadlineDate
                            )} days left`}
                      </p>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* UPCOMING INTERVIEWS */}
          <div className="trackCard">
            <div className="headerDiv">
              <h3>Upcoming Interviews</h3>
            </div>

            <ul>
              {upcomingInterviews.length === 0 ? (
                <li>
                  <p>No upcoming interviews.</p>
                </li>
              ) : (
                upcomingInterviews.slice(0, 4).map((interview) => (
                  <li key={interview.interviewId}>
                    <div>
                      <p>
                        {interview.application?.company?.companyName ||
                          interview.application?.position ||
                          "Interview"}
                      </p>

                      <p>{formatDate(interview.interviewDate)}</p>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>

        {/* RECENT APPLICATIONS AND QUICK ACTIONS */}
        <div className="cardList3">
          {/* RECENT APPLICATIONS */}
          <div className="recentApplications">
            <div className="recentApplicationHeader">
              <p>Recent Applications</p>
            </div>

            <table className="applicationsTable">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Position</th>
                  <th>Date Applied</th>
                  <th>Deadline</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {recentApplications.length === 0 ? (
                  <tr>
                    <td colSpan="5">No applications found.</td>
                  </tr>
                ) : (
                  recentApplications.map((application) => (
                    <tr key={application.applicationId}>
                      <td>
                        {application.company?.companyName || "Unknown Company"}
                      </td>

                      <td>{application.position}</td>

                      <td>{formatDate(application.dateApplied)}</td>

                      <td>{formatDate(application.deadline)}</td>

                      <td>
                        <span className="statusBadge">
                          {application.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <div className="seeAllApplications">
              <button onClick={() => (window.location.href = "/applications")}>
                See All Applications
              </button>
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="quickActions">
            <p>Quick Actions</p>

            <div className="quickActionItem">
              <AddIcon />
              Add Application
            </div>

            <div className="quickActionItem">
              <WorkIcon />
              View All Applications
            </div>

            <div className="quickActionItem">
              <CalendarMonthIcon />
              View Interviews
            </div>

            <div className="quickActionItem">
              <AccessTimeIcon />
              View Deadlines
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashBoard;
