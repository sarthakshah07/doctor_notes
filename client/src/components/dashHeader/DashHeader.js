import React, {useState} from 'react';
import {FaFileMedicalAlt, FaHome,FaRegAddressCard} from 'react-icons/fa';
import {FiLogOut} from 'react-icons/fi';
// import Home from '../home/Home';
// import { from "framer-
import './DashHeader.css';

function DashHeader() {
    const [isSubmitted, setIsSubmitted]= useState(true);

    const logout =()=>{
        setIsSubmitted(false);
        window.location.href='/';
    }
    // {isSubmitted===false? <div><Home/></div>: }
    return(
        <div>
        <div className="header1">
            <div className='logo1' 
            initial={{ transition: {duration: 2}, scale:0}}
            animate={{ transition: {duration: 3}, scale:3}}
            exit={{x: window.innerWidth }}>
                <FaFileMedicalAlt/>
            </div>
            <h1 className='heading1'><span>P</span>atient <span>R</span>ecord <span>S</span>ystem</h1>
            <div className='anch2'>
                {/* <a href='../' ><FaHome/>Home</a> */}
                <a onClick={logout}
                initial={{ transition: {duration: 4}, scale:0}}
                animate={{ transition: {duration: 3}, scale:1}}
                exit={{x: window.innerWidth }}
                >  <FiLogOut/>logout</a>
                {/* <a><FaRegAddressCard/>Register</a> */}
            </div>
        
        </div>
        </div>
    )
}
export default DashHeader;