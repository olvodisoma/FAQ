import './App.css';
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {questions} from './data';
import {Questions} from './Questions';



function App() {
  const [data,setData]=useState(questions)
  
  //console.log(data)
  return (
    <div className="main">
      <div className="container p-3 mt-5">
      <div className="row">
        <div className="col-md-6 p-3">
          <h1>Questions and answers about Login</h1>
        </div>
        <div className="col-md-6">
          <Questions data={data}/>
        </div>
      </div>
      </div>
    </div>
    
  );
}

export default App;
