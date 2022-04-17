import './App.css';
import {BrowserRouter as Router,
  Routes, Route} from "react-router-dom" ;

import Join  from './components/join/Join';
function App() {
  return (
    <Router>
       <Routes>
       <Route path='/' element={<Join/>} />
       </Routes>
    
    </Router>
      
  );
}

export default App;
