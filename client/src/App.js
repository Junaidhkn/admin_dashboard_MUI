import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/system'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { themeSettings } from 'theme.js'

const App = () => {
  const mode = useSelector( ( state ) => state.global.mode )
  const theme = useMemo( () => createTheme( themeSettings( mode ) ), [mode] )
  return (
    <div className='app'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
    </div>
  )
}

export default App