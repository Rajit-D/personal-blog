import React from 'react';
import ImageGrid from './comps/ImageGrid';
import Navbar from './comps/Navbar';
import Title from './comps/Title';
// import UploadForm from './comps/UploadForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Blogs from './comps/Blogs';

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Navbar/>
        <Routes>
        <Route path="/" element={<ImageGrid/>}/>
        <Route path="/blog" element={<Blogs/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;