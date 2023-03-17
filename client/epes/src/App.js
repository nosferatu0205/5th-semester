import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./pages/AddUser/AddUser";
import AddSupervisors from "./pages/AddUser/AddSupervisors";
import AddManagers from "./pages/AddUser/AddManagers";
import AddWorkers from "./pages/AddUser/AddWorkers";
import Login from "./pages/Login/Login";
import ManagerDashboard from "./pages/Dashboard/ManagerDashboard";
import SupervisorDashboard from "./pages/Dashboard/SupervisorDashboard";
import Leaderboard from "./components/Leaderboard";
import WorkerList from "./components/WorkerList";
import WorkerListDemo from "./components/WorkerListDemo";
import WorkerEvaluation from "./components/workerEvaluation";
import EvaluationPage from "./pages/evaluationPage";
import WorkerAttendance from "./components/WorkerAttendance";
import WorkerAssignment from "./components/WorkerAssignment";
import Home from "./pages/Home";
import ChangePassword from "./pages/ChangePassword";
import WorkerProfile from "./pages/Dashboard/WorkerProfile";
function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          {/* <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} /> */}
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/addManager" element={<AddManagers />} />
          <Route path="/addSupervisor" element={<AddSupervisors />} />
          <Route path="/addWorker" element={<AddWorkers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/managerDashboard/:id" element={<ManagerDashboard />} />
          <Route path="/supervisorDashboard/:id" element={<SupervisorDashboard />} />
          <Route path="/leaderboard" element={<Leaderboard/>}/>
          <Route path="/WorkerList" element={<WorkerList/>}/>
          <Route path="/WorkerListDemo" element={<WorkerListDemo/>}/>
          <Route path="/workerEvaluation" element={<WorkerEvaluation/>}/>
          <Route path="/EvaluationPage" element={<EvaluationPage/>}/>
          <Route path="/WorkerAttendance" element={<WorkerAttendance/>}/>
          <Route path="/WorkerAssignment" element={<WorkerAssignment/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/ChangePassword" element={<ChangePassword/>}/>
          <Route path="/WorkerProfile" element={<WorkerProfile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
