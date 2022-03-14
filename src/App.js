import Navber from './component/Navbar';
import HomePage from './component/pages/homePage'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Allcontent from './component/pages/allcontentPage';
import Author from './component/pages/AuthorPage'
import Contentdetail from './component/pages/detailPage';

function  App() {
  return (
    <>
  <Router>
    <div className='App'>
    <Navber/>
      <Routes>
          <Route path="/62070180Siwakorn" element={<HomePage/>}/>
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
