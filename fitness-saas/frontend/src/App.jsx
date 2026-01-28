import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Workouts from './pages/Workouts';
import CreateWorkout from './pages/CreateWorkout';
import WorkoutDetail from './pages/WorkoutDetail';
import Progress from './pages/Progress';
import Students from './pages/Students';
import Profile from './pages/Profile';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-text-primary">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/workouts/create" element={<CreateWorkout />} />
          <Route path="/workouts/:id" element={<WorkoutDetail />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/students" element={<Students />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
