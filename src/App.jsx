import { useState } from 'react'
import './App.css'
import Faq from './components/Faq'
import {createTheme, ThemeProvider } from '@mui/material'

function App() {
 
  const theme = createTheme({
    typography:{
      fontFamily: 'Kumbh Sans, sans-serif'
    }
  })

  return (
    <>
    <ThemeProvider theme={theme}>

    <div className="App">
     <Faq />
    </div>

      </ThemeProvider>
    </>
  )
}

export default App
