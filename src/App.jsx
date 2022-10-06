import './App.css';
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {questions} from './data';
import {Questions} from './Questions';

function App() {
  const [data,setData]=useState(questions)
  //console.log(data)
  return (
    <div className="container border mt-5 w-100">
      <div className="row">
        <div className="col-md-6 border">
          <h1>Questions and answers about LOGIN</h1>
        </div>
        <div className="col-md-6 border">
          <Questions data={data}/>
        </div>
      </div>
    </div>
  );
}

export default App;
