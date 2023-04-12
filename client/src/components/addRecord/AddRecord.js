import React  from 'react';
import { useRef } from 'react';
import DashHeader from '../dashHeader/DashHeader';
import VerticalBar from '../dashHeader/VerticalBar';
import './AddRecord.css';
import {GiCancel} from 'react-icons/gi';
// import {motion} from "framer-motion";
import {AiOutlinePlusCircle} from "react-icons/ai"
import { useState } from 'react';
import { getByTitle } from '@testing-library/react';


function AddRecord() {
    const [isShown, setIsShown] = useState(false);
    const [Seen, setSeen] = useState(false);
    const [SelectedFiles, setSelectedFiles] = useState([]);
    
    const [inputdata ,SetInputdata]= useState({
        PregNo: '',
        pname: '',
        pdate: '',
        pAge: '',
        pcontact: '',
        paddress: '',
        pDescription: '',
        pcity: ''
        
    })
    const OpenForm =(e)=>{
        setIsShown(current => !current);
        //  const [isShown, setIsShown] = useState(false);
    }
    const show=(e)=>{
        
        setSelectedFiles([]);
        if (e.target.files) {
            const filesArray= Array.from(e.target.files).map((file)=>URL.createObjectURL(file));
            setSelectedFiles((prevImages)=>prevImages.concat(filesArray));
            Array.from(e.target.files).map(
                (file)=> URL.revokeObjectURL(file)
            );
        }
    }
    const renderPhotos = (source)=>{
        return source.map((photo)=>{
            
            return (
            <img src={photo} id='result' alt="" key={photo} ></img>
                
            )
        })
    }  
    //for patient photo----
    const {NewFiles, setNewFiles} = useState([]);

    const patientshow =(e)=>{
        setSelectedFiles([]);
            console.log(setNewFiles);
            if (e.target.files) {
                const filesArray= Array.from(e.target.files).map((file)=>URL.createObjectURL(file));
                setSelectedFiles((prevPatientImages)=>prevPatientImages.concat(filesArray));
                Array.from(e.target.files).map(
                    (file)=> URL.revokeObjectURL(file)
                );
            }
        }
    const renderPatientPhotos = (source)=>{
        return source.map((photo)=>{
            console.log(source.map);
            return (
            <img src={photo} id='patientresult' alt="" key={photo} ></img>
           
            )
        })
    }

    //for data
    // constructor(props){
    //     super(props);
    //     this.state= {PregNo: ''};
    // }
   
    const changehandle=(e)=>{
        
        
        const {name,value} =e.target;
        SetInputdata((prev)=>{
            
            return{...prev, [name]: value}
            
        })
    };
    const previewChange=(e)=>{
        e.preventDefault()
        console.log(inputdata);
    }

    return(

         <div id='page'> 
           
            
             <div className="containerAdd"
             initial={{width: 0}}
             animate={{width: "85%" , transition: {duration: .2} }}
             exit={{x: window.innerWidth }}> 
            <h1>Add Record</h1>
            <div className='addcontainer'>
                <button onClick={OpenForm } style={isShown?{scale: "0"} : {scale: "1"} }><AiOutlinePlusCircle/></button>
                {isShown &&
                //  Form
                (<div style={isShown?{scale: "1"} : {scale: "1"} } className="formContainer"  >
                    <div className='formBox'>
                        <form className='form'  style={Seen?{scale: "0"} : {scale: "1"} }>
                            <h2> Add New Entry</h2>
                            <label>Registration Number:
                            <input type="number" placeholder='Enter Registration No' name='PregNo'  id='PregNo' required
                            onChange={changehandle}></input>
                            </label>
                            <label>Name of patient:
                            <input type="text " placeholder='Enter Name' name='pname' id='pname' required onChange={changehandle}></input>
                            </label>
                            <label>Date Of Register:
                            <input type="date" placeholder='Enter Date' name='pdate' id='pdate' required onChange={changehandle}></input>
                            </label>
                            <label>Age:
                            <input type="number" placeholder='Enter Age' name='pAge' id='pAge' required onChange={changehandle}></input>
                            </label>
                            <label>Contact Number:
                            <input type="tel" placeholder='Enter contact' name='pcontact' id='pcontact' required onChange={changehandle}></input>
                            </label>
                            <label>Address:
                            <input type="text" placeholder='Enter address' name='paddress' id='paddress' required onChange={changehandle}></input>
                            </label>
                            <label>City:
                            <input type="text" placeholder='Enter city' name='pcity' id='pcity' required onChange={changehandle}></input>
                            </label>
                            
                            <div className='gender' required>
                                <label>Gender:</label>
                                <br></br>
                                <label>Male
                                <input type="radio"  name='gender' value="male" onChange={changehandle} ></input>
                                </label>
                                <label>Female
                                <input type="radio"  name='gender' value="female" onChange={changehandle} ></input>
                                </label>
                                <label>Other
                                <input type="radio"  name='gender' value="other" onChange={changehandle} ></input>
                                </label>
                            </div>
                            <label>Description (optional):
                            <textarea type={"text"}  name='pDescription' id='pDescription' onChange={changehandle}></textarea>
                            </label>
                            <label> Upload Presciption/Patient Photos (optional):
                            <input type="file" multiple='multiple' accept='image/jpeg , image/png, image/jpg, pdf,
                            doc , txt' name='pimage' id='pimage' onChange={show} ></input>
                            </label>
                            <output >{renderPhotos(SelectedFiles)}</output>
{/* id='result' */}

                            <div className='btnSub'>
                            <input type="submit" id='btnSubmit' onClick={previewChange}></input>
                            <a id='btnPreview' onClick={()=> setSeen(true)} on>Preview</a>
                            {/* onClick={()=> setShowed(true)} */}
                            </div>
                        </form>
                       
                        <div className='insideDispContainer' style={Seen?{scale: "1"} : {scale: "0"} }>
                        <h1>Preview</h1>
                        <a id='cross'onClick={()=> setSeen(false)} ><GiCancel/></a>
                            <div className='containerDisp'>
                               
                                    <div className='prevDetails'>
                                        <p>Registration Number:<br></br><span>{inputdata.PregNo}</span>  </p>
                                        <p>Name Of Patient:<span>{inputdata.pname}</span> </p>
                                        <p>Date of Registration:<br></br><span>{inputdata.pdate}</span> </p>
                                        <p>Age: <span>{inputdata.pAge}</span> </p>
                                        <p>Contact: <span>{inputdata.pcontact}</span> </p>
                                        <p>Gender: <span>{inputdata.gender}</span> </p>
                                        <p>Address: <span>{inputdata.paddress}</span></p>
                                        <p>city: <span>{inputdata.pcity}</span></p>
                                        
                                    </div>
                                    
                                    <output id='resultPreview'>{renderPhotos(SelectedFiles)}</output>
                            </div>
                            <div id='desc'>
                                    <p id='descripText'>Description: <br></br><span >{inputdata.pDescription}</span></p>
                            </div>
                        </div>
                    
                    

                    </div>    
                    
                </div>)
                
                } 
                
                
            </div>  
                

            </div> 
            <div className="dashHeader"><DashHeader/></div> 
            {<div ><VerticalBar/></div> }
        </div>
    );

}
export default AddRecord;