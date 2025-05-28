
import React from 'react';
import MainPage from './Pages/ViewResource/MainPage';
import Login from './Pages/Login/Login';
import Routing from './Routing/Routes';
import Setting from './Pages/Setting/Setting';
import Title from './Component/Title';
import DoneButton from './Component/DoneButton';
import { useEffect } from 'react';
import Home from './Pages/Home';



const App: React.FC = () => {

  useEffect(() => {
    console.log('App mounted');
  }, []);
  return (
    <>
     <div>
    <MainPage/>
    </div>

    
    </>
  );
};

export default App;


