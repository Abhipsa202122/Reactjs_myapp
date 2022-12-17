import './App.css';
import Students from './Students';
import Rendering from './Rendering';
import List from './List';
import Employee1 from './Employee1';
import Hoc from './Hoc';
import Hoc2 from './Hoc2';
import Hocprops1 from './Hocprops1';
import Password from './Password';
import Login from './Login';
import Course from './Course';


function App() {
  return (
    <div className="App">
      <Students studentsrollno='121' studentname="Abhipsa"/>
      <Rendering/>
      <List/>
      <Employee1/>
      <Course id="accenture@" name="ACCENTURE" duration="24565"/>
      <Hoc/>
      <Hoc2/>
      <Hocprops1/>
      <Password/>
      <Login/>
    </div>
  );
}

export default App;

