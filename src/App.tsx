import { useEffect } from 'react';
import TopNav from './components/TopNav';
import Array from './components/Array';

//import axios from 'axios';


const App = () => {

  useEffect(() => {
    console.log('useEffect')
  }, [])


  return (
    <div className="flex flex-col h-screen">
      <TopNav />
      <Array />
    </div>
  )
}

export default App
