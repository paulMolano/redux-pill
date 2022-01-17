import 'bootstrap/dist/css/bootstrap.min.css'


import Home from './pages/Home';
import SearchPage from './pages/SearchPage';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/search" element={<SearchPage />} />
            </Routes>
      </Router>
    </>
  );
}

export default App;
