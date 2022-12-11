import axios from 'axios';
import './App.css';
import { useState,useEffect } from 'react';
import Container from '@mui/material/Container';
import Header from './Component/Header/Header';
import { Defination } from './Component/Defination/Defination';

function App() {
  const [meanings, setMeanings] = useState([]);
  const [input, setInput] = useState("");
  const dictionaryApiData = async() =>{
      try{
        const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`);
        console.log(data);
        setMeanings(data.data);
      }
      catch(error){}
    }
    useEffect(()=>{
      dictionaryApiData()
    },[input]) 
    
  return (
    
    <div style={{background: '#067597',color: '#fff', height: '100vh'}}>
      <Container style={{display: 'flex', flexDirection: 'column'}}>
        <Header input={input} setInput={setInput}/>
      </Container>
      <Defination meanings={meanings} input={input}/>
      
    </div>
  );
}

export default App;
