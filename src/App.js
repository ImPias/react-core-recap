import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // const nayoks = [{name: 'Jasim', age: 50}, {name: 'Rubel', age: 35}, {name: 'Manna', age: 50}]
  const [nayoks, setNayoks] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNayoks(data))
  }, [])
  // useEffect(() => {
  //   fetch('https://randomuser.me/api/?inc=name,id')
  //   .then(res => res.json())
  //   .then(data => console.log(data.results[0].name.first))
  // }, [])
  return (
    <div className="App">
      <MoviesCounter></MoviesCounter>
      <header className="App-header">
        {
          nayoks.map(nk => <Nayok name={nk.name} key={nk.id} age={nk.age}></Nayok>)  
        }
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function MoviesCounter(){
  const [count, setCount] = useState(1);
  const clickHandle = () => setCount(count + 1);
  return (
    <div>
      <button onClick={clickHandle}>Add Movie</button>
      <h3>Movies acted: {count}</h3>
      <MoviesDisplay movie={count}></MoviesDisplay>
    </div>
  );
}

function MoviesDisplay(props){
  return (
    <div>
      <h4>Movies: {props.movie}</h4>
    </div>
  );
}

function Nayok(props){
  const nayokStyle = {
    border: '2px solid red',
    borderRadius: '10px',
    margin: '5px',
    padding: '5px'
  }
  return (
    <div style={nayokStyle}>
      <h1>I'm Nayok: {props.name}</h1>
  <p>I've done 10 movies. in {props.age || 35} years.</p>
    </div>
  );
}

export default App;
