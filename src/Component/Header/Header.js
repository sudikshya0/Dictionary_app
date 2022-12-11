import React from 'react'
import './Header.css';
import { TextField } from '@mui/material';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';

function Header({input, setInput}) {
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });
    return (
    <div className='header'>
        <span className='title'>{input ? input : 'word finder'}</span>
        <div className='inputs'>
            <ThemeProvider theme={darkTheme}>
            <TextField 
            className='search'
            label="Search Your Word" 
            variant="standard"
            value = {input}
            onChange = {(e)=>{setInput(e.target.value)}} />
            </ThemeProvider>
        
        </div>
    </div>
  )
}

export default Header