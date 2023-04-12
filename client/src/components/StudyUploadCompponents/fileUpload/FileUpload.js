import React from 'react';
import axios from 'axios';
import { AiFillPlusCircle } from 'react-icons/ai';
import './fileUpload.css'
import { useState } from 'react';
// import FileList from "../StudyUploadCompponents/Filelist/FileList";

const FileUpload = function ({ files, setFiles, removeFile, idToken}) {
    
    const [pdfFile, setPdfFile] =useState([]);
    
    
    const handleChange = (e) => {

        var inputElement = document.getElementById("inputid")
        console.log(inputElement)
        console.log("1");
        console.log(e);
        console.log("2");

        console.log(e.target.files[0]);
        const file = e.target.files[0];

        const fileType=['application/pdf']
        if(file){
            if(file&&fileType.includes(file.type)){
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend=(e) =>{
                    setPdfFile(e.target.result);

                }
            }
            else{
                console.log("select your file");
            }
        }



        file.isUploading = true;
        setFiles([...files, file.name])
        console.log(files);
        // let file2 = inputElement.files[0];

        const formData = new FormData();
        formData.append(
            "srkfieldname",
            file,
            file.name
        )

        console.log(formData)
        let config = {
            headers: {
                'Authorization': `Bearer ${idToken}`
            }
        }
        console.log(config);
       
        axios.post('http://localhost:5040/files', formData,config)
            .then((res) => {
                console.log("Inside then part of POST request")
                console.log(res)
                file.isUploading = false;
                setFiles([...files, file.name])
            })
            .catch((err) => {
                console.log("Inside catch part of POST request")
                // inform the user
                console.error(err)
                window.alert('Faild to save file on server.')
                removeFile(file.name)

            });
    }

    // const clearCookie = (e) => {
    //     e.preventDefault()
    //     document.cookie = `isLogin=false;`;
    //     window.location.reload()
    // }


    return (
        <>
        {/* <hr className='line'></hr> */}
            <div id="outerdiv" className='file-card'>
                <div id="innerdiv" className='file-inputs'>
                    <div id='div1'>
                        <input id="inputid" type='file' onChange={handleChange} />
                    </div>
                    <div id='div2'>
                        <button className='btn2'>
                            <AiFillPlusCircle className='circle' />
                            Click here to upload a new file
                        </button>
                        <hr></hr>
                    </div>
                    {/* <button onClick={clearCookie}>Log Out</button> */}
                </div>

            </div>
            {/* <hr className='line'></hr> */}
        </>
    )
}

export default FileUpload