import Sidebar from "../SidebarTemp";
import "./Stylesheets/Deadline.css";

function Deadlines() {
  return (
    <div className="deadlinePage">
      <Sidebar />

      <main>
        <h1>Deadlines</h1>
        <p>Keep track of upcoming application deadlines.</p>
      </main>
    </div>
  );
}

export default Deadlines;
