import React from 'react';
import DashHeader from '../dashHeader/DashHeader';
import VerticalBar from '../dashHeader/VerticalBar';
import './List';
// import { from "framer-;

function List() {
    return(

         <div> 
           
            <div className="dashHeader"><DashHeader/></div> 
             <div className="container"
             initial={{width: 0}}
             animate={{width: "85%" , transition: {duration: .2} }}
             exit={{x: window.innerWidth }}> 
             <h1>Show List</h1>
                
                

            </div> 
            {<div><VerticalBar/></div> }
        </div>
    );
}
export default List;