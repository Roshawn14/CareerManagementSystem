import { useState } from "react";
import Sidebar from "../SidebarTemp";
import "./Stylesheets/Settings.css";

import SaveIcon from "@mui/icons-material/Save";
import LogoutIcon from "@mui/icons-material/Logout";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonIcon from "@mui/icons-material/Person";

function Settings() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (
      formData.newPassword &&
      formData.newPassword !== formData.confirmPassword
    ) {
      alert("New passwords do not match.");
      return;
    }

    alert(
      "Settings form submitted. Database integration is not connected yet."
    );
  };

  const handleLogout = () => {
    // Connect this to your authentication logout logic.
    alert("Connect this button to your logout functionality.");
  };

  return (
    <div className="settingsPage">
      <Sidebar />

      <main className="settingsMain">
        {/* Page Header */}
        <div className="settingsHeader">
          <div id="pDiv">
            <p id="settingsTitle">Settings</p>
            <p id="helperText">
              Manage your account information and security preferences.
            </p>
          </div>
        </div>

        <form className="settingsForm" onSubmit={handleSave}>
          {/* Profile Information */}
          <section className="settingsCard">
            <div className="settingsSectionHeader">
              <div className="settingsIcon">
                <PersonIcon />
              </div>

              <div>
                <h2>Profile Information</h2>
                <p>Update your personal account details.</p>
              </div>
            </div>

            <div className="settingsGrid">
              <div className="settingsField">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="settingsField">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="settingsField">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </section>

          {/* Password and Security */}
          <section className="settingsCard">
            <div className="settingsSectionHeader">
              <div className="settingsIcon">
                <LockOutlinedIcon />
              </div>

              <div>
                <h2>Password & Security</h2>
                <p>Change your password to keep your account secure.</p>
              </div>
            </div>

            <div className="settingsGrid">
              <div className="settingsField fullWidth">
                <label htmlFor="currentPassword">Current Password</label>
                <input
                  id="currentPassword"
                  name="currentPassword"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter current password"
                  value={formData.currentPassword}
                  onChange={handleChange}
                />
              </div>

              <div className="settingsField">
                <label htmlFor="newPassword">New Password</label>
                <input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Enter new password"
                  value={formData.newPassword}
                  onChange={handleChange}
                />
              </div>

              <div className="settingsField">
                <label htmlFor="confirmPassword">Confirm New Password</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Confirm new password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>

            <p className="passwordHint">
              Leave the password fields blank if you don't want to change your
              password. Your current password is required when changing it.
            </p>
          </section>

          {/* Actions */}
          <div className="settingsActions">
            <button type="submit" className="saveSettingsBtn">
              <SaveIcon />
              Save Changes
            </button>

            <button
              type="button"
              className="logoutSettingsBtn"
              onClick={handleLogout}
            >
              <LogoutIcon />
              Log Out
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Settings;
