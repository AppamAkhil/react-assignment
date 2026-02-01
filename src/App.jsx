import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";
import Task3 from "./pages/Task3";
import Task4 from "./pages/Task4";
import Task5 from "./pages/Task5";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/task1">Task 1</Link>
        <Link to="/task2">Task 2</Link>
        <Link to="/task3">Task 3</Link>
        <Link to="/task4">Task 4</Link>
        <Link to="/task5">Task 5</Link>
      </nav>

      {/* 👇 CENTERED CONTAINER */}
      <div className="app-container">
        <Routes>
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
          <Route path="/task3" element={<Task3 />} />
          <Route path="/task4" element={<Task4 />} />
          <Route path="/task5" element={<Task5 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
