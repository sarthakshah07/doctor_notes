import React,{useState} from "react";
import './FileItem.css';
import{ AiOutlineDownload,AiOutlineFolderView,AiFillFile,AiFillDelete,AiOutlineLoading} from 'react-icons/ai';
import {FaSpinner} from 'react-icons/fa';

const FileItem = ({fileName, deleteFile, downloadFile,files,DisplayFile})=>{
   
console.log(fileName.substring(0,30)+'...');
//key={file.name}

    

    return(
       <li className="list-item">
        <div className="actions">
            <div className="l1">
            <AiFillFile/>
            </div>
            
            <div className="FileName">
                <a href={"http://localhost:5040/files/" + fileName} download>{fileName.substring(0,30)+'...' }</a>
            </div>
            <div className="nam">
            { 
            <AiFillDelete 
            onClick={()=> deleteFile(fileName)}  className='del' />
            }
            </div>
            <div className="down">
            <a  onClick={()=>downloadFile(fileName)} download><AiOutlineDownload/></a>
            {/* //href={"http://localhost:5040/files/" + fileName} download */}
            </div>
            <div className="viewFile">
            <a  onClick={()=>DisplayFile(fileName)} ><AiOutlineFolderView/><br></br><span>view</span></a>
            {/* //href={"http://localhost:5040/files/" + fileName} download */}
            </div>
        </div>
       </li>
    )
}
export default FileItem