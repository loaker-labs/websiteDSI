import { useEffect } from 'react';
import { AppProvider } from './AppContext';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ConnexionPage from './components/ConnexionPage';

//import axios from 'axios';


const App = () => {

  useEffect(() => {
    console.log('useEffect')
  }, [])

  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<ConnexionPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>

  )
}

export default App
