import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"           element={<Landing />}>  </Route>
          <Route path="/register"   element={<Register />}> </Route>
          <Route path="/login"      element={<Login />}>    </Route>
          <Route path="/logout"     element={<Logout />}>   </Route>
          <Route path="/dashboard"  element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
