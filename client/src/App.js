import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import './App.css';
import AnimationRoutes from './AnimationRoutes';



function App() {

  
  return (
    
    <BrowserRouter>
        <AnimationRoutes/>
    </BrowserRouter>
  );
}

export default App;
