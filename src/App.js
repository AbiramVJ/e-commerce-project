
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

//PAGES
import HomePage from './pages/homepage/HomePage'
import SignInSignUp from './pages/SsignIn-and-signUp/SignInSignUp';
import Shop from './pages/shop/shop';

//Components

import Header from './components/heder/Header';


function App() {
  return (
    <>  
   
    <Router>
    <Header/>
    <Routes>  
      <Route exact path="/home" element={<HomePage/>}/>        
      <Route exact path="/shop" element={<Shop/>}/>   
      <Route exact path="/Signin" element={<SignInSignUp/>}/>  
    </Routes>  
  </Router>
    </>
  );
}

export default App;
