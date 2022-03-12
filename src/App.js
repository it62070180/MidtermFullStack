import Navber from './component/Navbar';
import HomePage from './component/home'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Allcontent from './component/allcontent';
import Author from './component/Author'
import Contentdetail from './component/contentdetail';

function  App() {
  return (
    <>
  <Router>
    <div className='App'>
    <Navber/>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/category" element={<Allcontent/>}/>
          <Route path="/contentdetail/:contentdetailId" element={<Contentdetail/>}/>
          <Route path="/Author" element={<Author/>}/>
      </Routes>  
    </div>
  </Router>
</>
  );
}

export default App;
