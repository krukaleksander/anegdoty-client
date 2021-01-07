import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

const url = 'http://localhost:5000/testApi';

const App = () => {
  const [anegdoty, setAnegdoty] = useState({});
  const fetchAnegdoty = async () => {
    const response = await fetch(url);
    const anegdotyObj = await response.json();
    setAnegdoty(anegdotyObj);
  };

  useEffect(() => {
    fetchAnegdoty();
  }, []);
  const { response } = anegdoty;
  return (
    <>
      <h1>Setup Anegdoty project =)</h1>
      <p>{response}</p>
    </>

  )
}

export default App;
