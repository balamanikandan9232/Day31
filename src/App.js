import './App.css';
import { Link, Switch, Route} from "react-router-dom";
import { Intro } from './Intro';
import { Login } from './Login';
import { useState} from 'react';
import { Data } from './Data';
import { Viewstudent } from './Viewstudent';
import { Editstudent } from './Editstudent';
import { NewFunction } from './NewFunction';
const studentdetails=[{
  sname:"arthi",
  degree:"BCA",
  year:"1",
  section:"A",
  batchyear:"2020-2023"
},{
  sname:"anandhi",
  degree:"BCA",
  year:"1",
  section:"B",
  batchyear:"2020-2023"
},
{
  sname:"vanitha",
  degree:"BCA",
  year:"2",
  section:"A",
  batchyear:"2021-2024"
},
{
  sname:"vani",
  degree:"BCA",
  year:"2",
  section:"A",
  batchyear:"2021-2024"
},
{
  sname:"renu",
  degree:"BCA",
  year:"3",
  section:"A",
  batchyear:"2020-2023"
},
{
  sname:"iniya",
  degree:"BCA",
  year:"3",
  section:"B",
  batchyear:"2020-2023"
},
{
  sname:"Deva",
  degree:"BCA",
  year:"2",
  section:"A",
  batchyear:"2020-2023"
}];
function App() {
  const [ studentlist,setstudentlist]= useState(studentdetails);
  return (
    <div className="App">
            <Intro/>
            <div>
      <Link to="/Home">Home  </Link>
         <Link to="/Student">Student  </Link>
      <Link to="/NewFunction">Add Student  </Link>
          <Link to="/Login">Login  </Link>
      <Switch>
        <Route path="/Home"></Route>
        <Route path="/Teacher"></Route>
                <Route path="/Student/edit/:id"><Editstudent studentlist={studentlist} setstudentlist={setstudentlist}/></Route>
        <Route path="/Student/:id"><Viewstudent studentlist={studentlist}/></Route>
             <Route path="/Student"><Data studentlist={studentlist} setstudentlist={setstudentlist}/></Route>
                 <Route path="/NewFunction"><NewFunction studentlist={studentlist} setstudentlist={setstudentlist} /></Route>
        
        <Route path="/Login"><Login/></Route>
      </Switch>
    </div>
           </div>
  );}
 export default App;
