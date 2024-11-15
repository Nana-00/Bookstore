import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Dashboard } from './components/dashboard';
import { Login } from './components/loginp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>

  );
}

export default App;
