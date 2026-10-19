import Sidebar from "../SidebarTemp";
import "./Stylesheets/settings.css";

function settings() {
  return (
    <div className="settingsPage">
      <Sidebar />

      <main>
        <h1>Settings</h1>
        <p>Keep track of Profile</p>
      </main>
    </div>
  );
}

export default settings;
