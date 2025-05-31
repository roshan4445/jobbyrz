import Home from './Components/Home'
import { Route, Routes } from 'react-router';
import LoginForm from './Components/LoginForm';
import Jobs from './Components/Jobs';
import './App.css'
import ProtectedRoute from './Components/ProtectedRoute';
import JobDetails from './Components/jobdetails'

const App = () => (
  <>
    <Routes>
      <Route path="/" element={
        <ProtectedRoute><Home /></ProtectedRoute>
      } />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/jobs" element={
        <ProtectedRoute><Jobs /></ProtectedRoute>
      } />
      <Route path="/jobs/:id" element={
        <ProtectedRoute><JobDetails /></ProtectedRoute>
      } />
    </Routes>
  </>
)

export default App;