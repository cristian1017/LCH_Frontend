import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Case } from './pages/Case';
import { Note } from './pages/Note';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cases' element={<Case/>} />
        <Route path='/notes' element={<Note/>} />
      </Routes>
    </Router>
  );
}
export default App;
