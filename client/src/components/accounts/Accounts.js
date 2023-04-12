//Accounts 
import * as React from 'react';
import DashHeader from '../dashHeader/DashHeader';
import VerticalBar from '../dashHeader/VerticalBar';
import './Accounts.css';
// import {motion} from "framer-motion";

function Accounts() {
    return(

         <div> 
           
            <div className="dashHeaderAcc"><DashHeader/></div> 
             <div className="containerAcc"
             initial={{width: 0}}
             animate={{width: "85%" , transition: {duration: .2} }}
             exit={{x: window.innerWidth }}> 
             <h1>Accounts</h1>
                
                

            </div> 
            {<div><VerticalBar/></div> }
        </div>
    );
}
export default Accounts;