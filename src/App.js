
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

//PAGES
import HomePage from './pages/homepage/HomePage'
import Shop from './pages/shop/shop';

function App() {
  return (
    <>  
    <Router>
    <Routes>
      <Route exact path="/home" element={<HomePage/>}/>        
      <Route exact path="/shop" element={<Shop/>}/>   
    </Routes>  
  </Router>
    </>
  );
}

export default App;
