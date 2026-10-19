import Sidebar from "../SidebarTemp";
import "./Stylesheets/Application.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

function applications() {
  return (
    <div className="ApplicationPage">
      <Sidebar />

      <main>
        <div className="applicationHeader">
          <div id="pDiv">
            <p id="applicationTitle">Applications</p>
            <p id="helperText">View your upcoming and completed interviews.</p>
          </div>

          <button>
            <AddIcon size={18} />
            Add Application
          </button>
        </div>

        <table className="applicationsTable">
          <thead>
            <tr>
              <th>Company</th>
              <th>Position</th>
              <th>Job Type</th>
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
              <td>On-site</td>
              <td>November 13, 2026</td>
              <td>November 30, 2026</td>
              <td>
                <span className="statusBadge">Applied</span>
              </td>

              <td>
                <div className="actionButtons">
                  <button className="editButton" aria-label="Edit application">
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
              <td>Onsite</td>
              <td>November 13, 2026</td>
              <td>November 30, 2026</td>
              <td>
                <span className="statusBadge">Applied</span>
              </td>

              <td>
                <div className="actionButtons">
                  <button className="editButton" aria-label="Edit application">
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
      </main>
    </div>
  );
}

export default applications;
