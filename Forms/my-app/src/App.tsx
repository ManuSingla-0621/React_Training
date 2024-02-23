import ReactDOM from "react-dom";
import {useForm,SubmitHandler} from "react-hook-form";

enum GenderEnum
{
  female="Female",
  male="Male",
  others="Others"
}

import './App.css';

function App() {
  return (
    <div>
      <form>

        <label>Name</label>
        <input type="text"></input>
        <br/>
        <br/>

        <label>Email</label>
        <input type="email"></input>
        <br/>
        <br/>

        <label>Phone</label>
        <input type="tel"></input>

        <br/>
        <br/>

        <input type="submit" value="Submit"></input>

      </form>
  
    </div>
  );
}

export default App;
