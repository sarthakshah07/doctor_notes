import React from 'react';
import './verticalBar.css';
import '../dashHeader/verticalBar.css'
import Dashboard from '../dashboard/Dashboard';
import List from '../list/List.js';
// import { from "framer-

import {AiOutlineUserAdd,AiOutlineUnorderedList,AiOutlineCalendar,AiOutlineHome} from 'react-icons/ai';
import {GiNotebook,GiReceiveMoney} from 'react-icons/gi';

function VerticalBar() {
    
    // const dash=()=>{
    //     return 
    // }

    return(
        <div className='verticalBar'
         initial={{width: 0}}
         animate={{width: "15%" , transition: {duration: 2} }}
         exit={{x: window.innerWidth }}>
            <div className='divAnch'
            initial={{ transition: {duration: 3},left:0}}
            animate={{ transition: {duration: 3},left:"45%" }}
            exit={{x: window.innerWidth }}
            >
                <p ><AiOutlineHome/><a href='../Login/Dashboard'>Dashboard</a></p>
                <p ><AiOutlineUserAdd/><a  href='../Login/Record'>Add Record</a> </p>
                <p><AiOutlineUnorderedList/><a href='../Login/List'>Patient List</a> </p>
                <p><GiNotebook/><a href='../Login/StudyMaterial' >Study Material</a></p>
                <p><GiReceiveMoney/><a href='../Login/Accounts'>Accounts</a></p>
                <p><AiOutlineCalendar/><a href='../Login/ToDoList' >To-do List </a></p>
                <p><AiOutlineCalendar/><a href='../Login/ToDoList' > </a></p>
                
            </div>
            <div className='insideBar'>
            
            </div>
        </div>
    )
};
export default VerticalBar;