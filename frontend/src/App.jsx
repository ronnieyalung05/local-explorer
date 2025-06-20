import { Routes, Route, useLocation } from "react-router-dom";
import TopNavBar from "./components/TopNavBar";
import SideBar from "./components/SideBar";
import "./css/App.css";

function App() {
  const location = useLocation();
  const showSidebar = location.pathname === "/";

  return (
    <div className="app-container">
      <TopNavBar />
      <div className="main-layout">
        {showSidebar && <SideBar />}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<div>Explore Page Content</div>} />
            <Route path="/about" element={<div>About Page Content</div>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;