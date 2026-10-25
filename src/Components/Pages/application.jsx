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
            <p id="helperText">
              View your upcoming and completed applications.
            </p>
          </div>

          <button
            className="addApplicationBtn"
            onClick={() =>
              document.getElementById("addApplicationModal").showModal()
            }
          >
            <AddIcon />
            Add Application
          </button>
        </div>

        {/* Add Application Modal */}
        <dialog id="addApplicationModal" className="applicationModal">
          <div className="modalHeader">
            <div>
              <h2>Add Application</h2>
              <p>Enter the details of the job you're applying for.</p>
            </div>

            <form method="dialog">
              <button className="closeModalBtn" aria-label="Close">
                &times;
              </button>
            </form>
          </div>

          <form className="applicationForm">
            <div className="modalFormGroup">
              <label htmlFor="company">Company Name</label>
              <input
                id="company"
                type="text"
                placeholder="e.g. Google"
                required
              />
            </div>

            <div className="modalFormGroup">
              <label htmlFor="position">Job Position</label>
              <input
                id="position"
                type="text"
                placeholder="e.g. Software Developer"
                required
              />
            </div>

            <div className="modalFormGroup">
              <label htmlFor="jobType">Job Type</label>
              <select id="jobType" defaultValue="" required>
                <option value="" disabled>
                  Select job type
                </option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="On-site">On-site</option>
                <option value="Internship">Internship</option>
                <option value="Part-time">Part-time</option>
                <option value="Full-time">Full-time</option>
              </select>
            </div>

            <div className="modalFormRow">
              <div className="modalFormGroup">
                <label htmlFor="dateApplied">Date Applied</label>
                <input id="dateApplied" type="date" required />
              </div>

              <div className="modalFormGroup">
                <label htmlFor="deadline">Application Deadline</label>
                <input id="deadline" type="date" />
              </div>
            </div>

            <div className="modalFormGroup">
              <label htmlFor="status">Application Status</label>
              <select id="status" defaultValue="Applied">
                <option value="Saved">Saved</option>
                <option value="Applied">Applied</option>
                <option value="Interviewing">Interviewing</option>
                <option value="Offer">Offer</option>
                <option value="Rejected">Rejected</option>
                <option value="Withdrawn">Withdrawn</option>
              </select>
            </div>

            <div className="modalFormGroup">
              <label htmlFor="jobUrl">Job Posting URL (Optional)</label>
              <input
                id="jobUrl"
                type="url"
                placeholder="https://example.com/job"
              />
            </div>

            <div className="modalFormGroup">
              <label htmlFor="notes">Notes (Optional)</label>
              <textarea
                id="notes"
                rows="3"
                placeholder="Add notes about this opportunity..."
              />
            </div>

            <div className="modalActions">
              <button
                type="button"
                className="cancelModalBtn"
                onClick={() =>
                  document.getElementById("addApplicationModal").close()
                }
              >
                Cancel
              </button>

              <button type="submit" className="saveApplicationBtn">
                Save Application
              </button>
            </div>
          </form>
        </dialog>

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
