import { useState } from "react";
import Sidebar from "../SidebarTemp";
import "./Stylesheets/Interviews.css";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

function Interviews() {
  const [showModal, setShowModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Upcoming");

  const [interviews, setInterviews] = useState([
    {
      id: 1,
      company: "Google",
      position: "Software Developer",
      date: "2026-11-13",
      time: "10:00",
      type: "Virtual",
      notes: "Study Java",
    },
    {
      id: 2,
      company: "Microsoft",
      position: "Software Engineer",
      date: "2026-11-20",
      time: "14:00",
      type: "In Person",
      notes: "Review technical questions",
    },
    {
      id: 3,
      company: "Amazon",
      position: "Software Developer Intern",
      date: "2026-09-15",
      time: "09:00",
      type: "Phone",
      notes: "Behavioral questions",
    },
  ]);

  const emptyForm = {
    company: "",
    position: "",
    date: "",
    time: "",
    type: "Virtual",
    notes: "",
  };

  const [formData, setFormData] = useState(emptyForm);

  // Get today's date without comparing time
  const today = new Date().toLocaleDateString("en-CA");

  // Filter interviews
  const filteredInterviews = interviews
    .filter((interview) => {
      if (activeFilter === "Upcoming") {
        return interview.date >= today;
      }

      if (activeFilter === "Past") {
        return interview.date < today;
      }

      return true;
    })
    .sort((a, b) => {
      if (activeFilter === "Past") {
        return b.date.localeCompare(a.date);
      }

      return a.date.localeCompare(b.date);
    })
    .slice(0, 2);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleAddInterview = (e) => {
    e.preventDefault();

    const newInterview = {
      ...formData,
      id: Date.now(),
    };

    setInterviews((previous) => [...previous, newInterview]);

    setFormData(emptyForm);
    setShowModal(false);
  };

  const handleDeleteInterview = (id) => {
    setInterviews((previous) =>
      previous.filter((interview) => interview.id !== id)
    );
  };

  const formatDate = (date) => {
    return new Date(date + "T00:00:00").toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (time) => {
    return new Date(`2000-01-01T${time}:00`).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  };

  return (
    <div className="interviewPage">
      <Sidebar />

      <main>
        <div className="interviewHeader">
          <div id="pDiv">
            <p id="interviewTitle">Interviews</p>
            <p id="helperText">View your upcoming and completed interviews.</p>
          </div>

          <button
            className="addInterviewBtn"
            onClick={() => setShowModal(true)}
          >
            <AddIcon />
            Add Interview
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="tableoptions">
          {["Upcoming", "Past", "All"].map((filter) => (
            <button
              key={filter}
              className={activeFilter === filter ? "activeFilter" : ""}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Interviews Table */}
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
            {filteredInterviews.length > 0 ? (
              filteredInterviews.map((interview) => {
                const status = interview.date >= today ? "Upcoming" : "Past";

                return (
                  <tr key={interview.id}>
                    <td>{interview.company}</td>
                    <td>{interview.position}</td>
                    <td>{formatDate(interview.date)}</td>
                    <td>{formatTime(interview.time)}</td>
                    <td>{interview.type}</td>

                    <td>
                      <span className={`statusBadge ${status.toLowerCase()}`}>
                        {status}
                      </span>
                    </td>

                    <td>{interview.notes || "—"}</td>

                    <td>
                      <div className="actionButtons">
                        <button
                          className="editButton"
                          aria-label="Edit interview"
                        >
                          <EditIcon />
                        </button>

                        <button
                          className="deleteButton"
                          aria-label="Delete interview"
                          onClick={() => handleDeleteInterview(interview.id)}
                        >
                          <DeleteIcon />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="8" className="emptyTable">
                  No {activeFilter.toLowerCase()} interviews found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Add Interview Modal */}
        {showModal && (
          <div
            className="interviewModalOverlay"
            onClick={() => setShowModal(false)}
          >
            <div
              className="interviewModal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="interviewModalTitle"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modalHeader">
                <div>
                  <h2 id="interviewModalTitle">Add Interview</h2>
                  <p>Enter the details of your interview.</p>
                </div>

                <button
                  type="button"
                  className="closeModalBtn"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                >
                  <CloseIcon />
                </button>
              </div>

              <form className="interviewForm" onSubmit={handleAddInterview}>
                <div className="interviewFormGroup">
                  <label htmlFor="company">Company Name</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="e.g. Google"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="interviewFormGroup">
                  <label htmlFor="position">Job Position</label>
                  <input
                    id="position"
                    name="position"
                    type="text"
                    placeholder="e.g. Software Developer"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="interviewFormRow">
                  <div className="interviewFormGroup">
                    <label htmlFor="date">Interview Date</label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="interviewFormGroup">
                    <label htmlFor="time">Interview Time</label>
                    <input
                      id="time"
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="interviewFormGroup">
                  <label htmlFor="type">Interview Type</label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                  >
                    <option value="Virtual">Virtual</option>
                    <option value="In Person">In Person</option>
                    <option value="Phone">Phone</option>
                    <option value="Technical">Technical</option>
                  </select>
                </div>

                <div className="interviewFormGroup">
                  <label htmlFor="notes">Notes (Optional)</label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows="3"
                    placeholder="Interview preparation notes..."
                    value={formData.notes}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="modalActions">
                  <button
                    type="button"
                    className="cancelModalBtn"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>

                  <button type="submit" className="saveInterviewBtn">
                    Save Interview
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

export default Interviews;
