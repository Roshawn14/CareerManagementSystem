import Sidebar from "../SidebarTemp";
import "./Stylesheets/Interviews.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

function Interviews() {
  return (
    <div className="interviewPage">
      <Sidebar />

      <main>
        <div className="interviewHeader">
          <div id="pDiv">
            <p id="interviewTitle">Interviews</p>
            <p id="helperText">View your upcoming and completed interviews.</p>
          </div>

          <button>
            <AddIcon size={18} />
            Add Application
          </button>
        </div>

        <div className="tableoptions">
          <p>Upcoming</p>
          <p>Past</p>
          <p>All</p>
        </div>

        <table className="interviewsTable">
          <thead>
            <tr>
              <th>Company</th>
              <th>Position</th>
              <th>Interview Date</th>
              <th>Time</th>
              <th>Type</th>
              <th>Status</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Google</td>
              <td>Software Developer</td>
              <td>November 13, 2026</td>
              <td>10 AM</td>
              <td>Virtual</td>
              <td>
                <span className="statusBadge">Upcoming</span>
              </td>
              <td>Study Java</td>

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
              <td>November 13, 2026</td>
              <td>10 AM</td>
              <td>Virtual</td>
              <td>
                <span className="statusBadge">Upcoming</span>
              </td>
              <td>Study Java</td>

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

export default Interviews;
