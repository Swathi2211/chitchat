import './App.css';
import Main from './components/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SliderSizes from './components/testing';
import LeftMenu from './components/leftMenu';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './components/theme';


function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>

      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<Main colChangeFunc={toggleTheme} themeMode={theme} />}></Route>
          </Routes>

        </BrowserRouter>
        {/* Other components */}
      </ThemeProvider>


    </>
  );
}

export default App;
