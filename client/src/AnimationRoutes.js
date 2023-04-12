import React from 'react';
import { useLocation , Routes, Route } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/home/Home';
import List from './components/list/List';
import Login from './components/login/Login';
// import {AnimatePresence} from "framer-motion";
import ToDoList from "./components/todoList/ToDoList";
import StudyMaterial from "./components/studyMaterial/StudyMaterial";
import AddRecord from "./components/addRecord/AddRecord";
import Accounts from "./components/accounts/Accounts";
import Header from './components/header/Header';


function AnimationRoutes () {
    const  location =  useLocation();



    return(
        // <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />}/>   
                <Route path="/header" element={<Header />}/>
                <Route path="/Login" element={<Login />} />
                <Route path="/Login/Dashboard" element={<Dashboard />} /> 
                <Route path="/Login/List" element={<List />} />
                <Route path="/Login/ToDoList" element={<ToDoList />} />
                <Route path="/Login/StudyMaterial" element={<StudyMaterial />} />
                <Route path="/Login/Record" element={<AddRecord />} />
                <Route path="/Login/Accounts" element={<Accounts />} />
        </Routes>
    //   </AnimatePresence>
    )
}
export default AnimationRoutes;