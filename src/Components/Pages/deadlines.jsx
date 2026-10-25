import { useState } from "react";
import Sidebar from "../SidebarTemp";
import "./Stylesheets/Deadline.css";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

function Deadlines() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="deadlinePage">
      <Sidebar />

      <main>
        {/* Page Header */}
        <div className="deadlineHeader">
          <div id="pDiv">
            <p id="deadlineTitle">Deadlines</p>
            <p id="helperText">
              Keep track of important application deadlines and upcoming tasks.
            </p>
          </div>

          <button className="addDeadlineBtn" onClick={() => setShowModal(true)}>
            <AddIcon />
            Add Deadline
          </button>
        </div>

        {/* Filter Options */}
        <div className="deadlineTableOptions">
          <button className="activeDeadlineFilter">Upcoming</button>
          <button>Past</button>
          <button>All</button>
        </div>

        {/* Deadlines Table */}
        <div className="deadlineTableContainer">
          <table className="deadlinesTable">
            <thead>
              <tr>
                <th>Deadline</th>
                <th>Company</th>
                <th>Position</th>
                <th>Due Date</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Submit Application</td>
                <td>Google</td>
                <td>Software Developer</td>
                <td>November 30, 2026</td>
                <td>
                  <span className="priorityBadge highPriority">High</span>
                </td>
                <td>
                  <span className="deadlineStatus upcomingStatus">
                    Upcoming
                  </span>
                </td>
                <td>
                  <div className="deadlineActions">
                    <button className="editButton" aria-label="Edit deadline">
                      <EditIcon />
                    </button>
                    <button
                      className="deleteButton"
                      aria-label="Delete deadline"
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </td>
              </tr>

              <tr>
                <td>Technical Assessment</td>
                <td>Microsoft</td>
                <td>Software Engineer</td>
                <td>December 5, 2026</td>
                <td>
                  <span className="priorityBadge mediumPriority">Medium</span>
                </td>
                <td>
                  <span className="deadlineStatus upcomingStatus">
                    Upcoming
                  </span>
                </td>
                <td>
                  <div className="deadlineActions">
                    <button className="editButton" aria-label="Edit deadline">
                      <EditIcon />
                    </button>
                    <button
                      className="deleteButton"
                      aria-label="Delete deadline"
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </td>
              </tr>

              <tr>
                <td>Submit Resume</td>
                <td>Amazon</td>
                <td>Software Developer Intern</td>
                <td>October 10, 2026</td>
                <td>
                  <span className="priorityBadge lowPriority">Low</span>
                </td>
                <td>
                  <span className="deadlineStatus pastStatus">Past</span>
                </td>
                <td>
                  <div className="deadlineActions">
                    <button className="editButton" aria-label="Edit deadline">
                      <EditIcon />
                    </button>
                    <button
                      className="deleteButton"
                      aria-label="Delete deadline"
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Add Deadline Popup Modal */}
        {showModal && (
          <div
            className="deadlineModalOverlay"
            onClick={() => setShowModal(false)}
          >
            <div
              className="deadlineModal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="deadlineModalTitle"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="deadlineModalHeader">
                <div>
                  <h2 id="deadlineModalTitle">Add Deadline</h2>
                  <p>Enter the details for your upcoming deadline.</p>
                </div>

                <button
                  type="button"
                  className="deadlineCloseBtn"
                  aria-label="Close modal"
                  onClick={() => setShowModal(false)}
                >
                  <CloseIcon />
                </button>
              </div>

              <form
                className="deadlineForm"
                onSubmit={(e) => {
                  e.preventDefault();
                  setShowModal(false);
                }}
              >
                <div className="deadlineFormGroup">
                  <label htmlFor="deadlineName">Deadline Title</label>
                  <input
                    id="deadlineName"
                    name="deadlineName"
                    type="text"
                    placeholder="e.g. Submit Application"
                    required
                  />
                </div>

                <div className="deadlineFormRow">
                  <div className="deadlineFormGroup">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="e.g. Google"
                      required
                    />
                  </div>

                  <div className="deadlineFormGroup">
                    <label htmlFor="position">Position</label>
                    <input
                      id="position"
                      name="position"
                      type="text"
                      placeholder="e.g. Software Developer"
                      required
                    />
                  </div>
                </div>

                <div className="deadlineFormRow">
                  <div className="deadlineFormGroup">
                    <label htmlFor="dueDate">Due Date</label>
                    <input id="dueDate" name="dueDate" type="date" required />
                  </div>

                  <div className="deadlineFormGroup">
                    <label htmlFor="priority">Priority</label>
                    <select id="priority" name="priority" defaultValue="Medium">
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </select>
                  </div>
                </div>

                <div className="deadlineFormGroup">
                  <label htmlFor="deadlineStatus">Status</label>
                  <select
                    id="deadlineStatus"
                    name="status"
                    defaultValue="Pending"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>

                <div className="deadlineFormGroup">
                  <label htmlFor="notes">Notes (Optional)</label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows="3"
                    placeholder="Add details or reminders..."
                  />
                </div>

                <div className="deadlineModalActions">
                  <button
                    type="button"
                    className="cancelDeadlineBtn"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>

                  <button type="submit" className="saveDeadlineBtn">
                    Save Deadline
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Deadlines;
