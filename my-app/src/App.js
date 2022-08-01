//import {BrowserRouter as Router, Route } from "react-router-dom";
//import { useNavigate } from 'react-router-dom';
 //import Catagories from "./Component/Catagories";
 import Login from "./Component/Login";
 import "./styles.css";
 import "./index.css";
 import "./index.js";
 
function App() {
    return(
          // <Router>
          //   <switch>
          //     <Route exact path="./Component/Login" component={Login}/>
          //     <Route exact path="./Component/Catagories" component={Catagories}/>
          //   </switch>
          // </Router>

       <Login/> 
      //<Catagories/>

    )

}
export default App;