import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
import axios from 'axios';
import { Form } from './InputForm';

const App = () => {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => (async () => {
    try {
      const { data } = await axios.get(`/instrument`);
      setInstruments(data);
    }
    catch (err) {
      console.log(err);
      alert(err);
    }
  })(), []);
  
  return <>
    {instruments.map((instrument) => <Form instrument={instrument} key={instrument._id} />)}
  </>

}

ReactDOM.render(<App />, document.getElementById('root-div'));