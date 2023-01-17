import './App.css';
import { Home, PageNotFound } from './pages/allPages';
import {  Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Routes >
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
     </Routes>
    </div>
  );
}

export default App;
