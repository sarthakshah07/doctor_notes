import React from "react";
import {FaClipboardList} from 'react-icons/fa'
import DashHeader from "../dashHeader/DashHeader";
import VerticalBar from "../dashHeader/VerticalBar.js";
import './Dashboard.css';
// import { from "framer-;
import {AiOutlineUserAdd,AiOutlineUnorderedList,AiOutlineCalendar} from 'react-icons/ai';
import {GiNotebook,GiReceiveMoney} from 'react-icons/gi';



function Dashboard() {

    return (
        <div className="mainPage">
            
            <div className="dashHeader"><DashHeader/></div>
            <div className="containerDash"
             initial={{width: 0}}
             animate={{width: "85%" , transition: {duration: .2} }}
             exit={{x: window.innerWidth }}>

                <h1>Dashboard</h1>
                <h2>Welcome, </h2>
                <h3>Services</h3>
                <div className="insideContainer"
                initial={{ transition: {duration: 3},right:"-10%", scale:0}}
                animate={{ transition: {duration: 2},right:"20%" , scale:1}}
                exit={{x: window.innerWidth }}
                >
                    <a href="../Login/Record"
                    initial={{ transition: {duration: 4}, scale:0}}
                    animate={{ transition: {duration: 2.8}, scale:1}}
                    exit={{x: window.innerWidth }}
                    ><AiOutlineUserAdd/>Add Record</a>

                    <a href='../Login/List'
                    initial={{ transition: {duration: 4}, scale:0}}
                    animate={{ transition: {duration: 2.5}, scale:1}}
                    exit={{x: window.innerWidth }}
                    ><AiOutlineUnorderedList/> Patient List</a>

                    <a href='../Login/StudyMaterial'
                    initial={{ transition: {duration: 4}, scale:0}}
                    animate={{ transition: {duration: 2.1}, scale:1}}
                    exit={{x: window.innerWidth }}
                    ><GiNotebook/>Study Material</a>


                    <a href='../Login/Accounts' 
                    initial={{ transition: {duration: 1}, scale:0}}
                    animate={{ transition: {duration: 1.8}, scale:1}}
                    exit={{x: window.innerWidth }}
                    ><GiReceiveMoney/>Accounts</a>


                    <a href='../Login/ToDoList' 
                    initial={{ transition: {duration: 1}, scale:0}}
                    animate={{ transition: {duration: 1.5}, scale:1}}
                    exit={{x: window.innerWidth }}
                    ><AiOutlineCalendar/>To-do List</a>

                    {/* <a id="s1" data-aos="fade-right"></a> 
                    <a id="s2" data-aos="fade-up"></a>
                    <a id="s3" data-aos="fade-right"></a>
                    <a id="s4" data-aos="fade-left"></a>
                    <a id="s5" data-aos="fade-left"> </a> */}

                </div>
            </div>
            <div><VerticalBar/></div>
        </div>
        
    )
}
export default Dashboard;