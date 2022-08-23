import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './pages/Calculator';
import Idcard from './pages/Idcard';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <Button><Link to="/" style={{ textDecoration: 'none', color: 'black', fontSize: '5', padding: '4', textAlign: 'center' }}>Home</Link></Button>
          <Button><Link to="/Calculator" style={{ textDecoration: 'none', color: 'black', fontSize: '5', padding: '4', textAlign: 'center' }}>Calculator</Link></Button>
          <Button><Link to="/Idcard" style={{ textDecoration: 'none', color: 'black', fontSize: '5', padding: '4', textAlign: 'center' }}>Idcard</Link></Button>
        </ul>
        <Routes>
          <Route path="/Calculator" element={<Calculator />}></Route>
          <Route path="/Idcard" element={<Idcard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
