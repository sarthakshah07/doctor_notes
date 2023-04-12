//StudyMaterial
import React, { useState } from "react";
import DashHeader from '../dashHeader/DashHeader';
import VerticalBar from '../dashHeader/VerticalBar';
import './StudyMaterial.css';
// import { from "framer-;
import {AiFillPlusCircle} from 'react-icons/ai';
import FileUpload from "../StudyUploadCompponents/fileUpload/FileUpload";

import FileList from "../StudyUploadCompponents/Filelist/FileList";


function StudyMaterial() {
    const [files, setFiles] = useState([]);
    // const {viewFile, setViewFile} = useState([]);
    // const {pdfFile, setPdfFile} = useState([]);
    
    
    
    const removeFile = (filename) => {
        setFiles(files.filter(file => file !== filename))
    }
    return(

         <div> 
           
            <div className="dashHeader"><DashHeader/></div> 
             <div className="containerStudy"
             initial={{width: 0}}
             animate={{width: "85%" , transition: {duration: .2} }}
             exit={{x: window.innerWidth }}> 
             <h1>Study Material</h1>
                <div className='addBtn'>
                    <div className='btnwrap'>
                        
                        <div className='div2'>
                            
                            <FileUpload files={files} setFiles={setFiles}
                                removeFile={removeFile}  
                                />
                            
                        </div>
                    </div>
                </div>
                <div className='listcontainer'>
                    <h2>Files List <hr></hr></h2>
                    
                    <div className="App2">
                    <FileList files={files} removeFile={removeFile} setFiles={setFiles}/>
                    </div>
                    
                </div>
               

            </div> 
            {<div><VerticalBar/></div> }
        </div>
    );
}
export default StudyMaterial;