import React, { useEffect ,useState} from "react";
import axios from "axios";
import FileItem from "./../fileItems/FileItem";
// import FileDownloader from 'js-file-downloader';
import { FaWindows } from "react-icons/fa";

// import { Viewer,Worker } from "@react-pdf-viewer/core";
// import { defaultLayoutPlugin, DefaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';


const FileList = ({ file,files, removeFile, setFiles, idToken}) => {
    const [ViewFile, setviewfile] = useState([]);
    const [pdfFile, setPdfFile] =useState([]);
    // const defaultLayoutPluginInstance = defaultLayoutPlugin()


    const DisplayFile=(filename)=>{
        console.log(pdfFile);
        console.log("yess");
        //  console.log(e);
         console.log(files);
        // console.log(files.filter(file => file === filename)); 
         const thisFile =files.filter(file => file == filename);
        // const thisFile= 
        // display(fileName.target.files[0])
        // setPdfFile(thisFile);
        console.log("noo");
        console.log(file);
        // setviewfile(...files, filename);
        // setviewfile(file);
        console.log("1223");
        console.log(ViewFile);
    }

    const deleteFileHandler = (_name) => {
        console.log(_name)
        axios.delete('http://localhost:5040/files', {
            params: {
                fileName: _name
            },
            headers: {
                'Authorization': `Bearer ${idToken}`
            },
        }).then((res) => {
            removeFile(_name)
        }).catch((err) => {
            console.error(err)
            alert('Failed to remove file from server.')
        });
    }

    const downloadFileHandler = (_name) => {
        axios.get("http://localhost:5040/files/" + _name, {
            headers: {
                'Authorization': `Bearer ${idToken}`
            },
            resposnseType: "stream",
            responseEncoding: "binary"
        }).then((res) => {
            console.log(res)
            console.log(res.data)
            //console.log(res.blob())
            var binaryData = Buffer.from(res.data, 'binary');
            //binaryData.push(res.data);
            console.log(binaryData)
            var blob = new Blob (binaryData,{type: "stream"})
            console.log(blob)
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            // the filename you want
            a.download = _name;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            alert('your file has downloaded!'); // or you know, something with better UX...
            //FileDownloader(res.data)
        }).catch((err) => {
            console.log(err.stack)
            alert("Failed to download the file.")
        })
    }

   
  

    useEffect(() => {
       
        axios.get('http://localhost:5040/files', {
            headers: {
                'Authorization': `Bearer ${idToken}`
            }
        }).then((res) => {
            console.log("akkad bakkad bombay boakkad bakkad bombay boakkad bakkad bombay boakkad bakkad bombay bo")
            console.log(res)
            var array = res.data.split(',')
            console.log("heiurhgeurghilusehrrilghweli")
            console.log(array)
            setFiles(array)
        }).catch((err) => {
            console.error(err)
            console.log("2akkad bakkad bombay boakkad bakkad bombay boakkad bakkad bombay boakkad bakkad bombay bo")
            alert('List not found.')
        });
    }, [])


    return (
        <div>
        <div>
        <ul className="file-list">
            {
                files &&
                files.map(f => (<FileItem
                    key={f}
                    fileName={f}
                    deleteFile={deleteFileHandler}
                    downloadFile={downloadFileHandler}
                    DisplayFile={DisplayFile}
                />))
            }
        </ul>
       
        </div>
         {/* <div className="pdfContainer">
             
            {ViewFile&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
                <Viewer fileUrl={ViewFile}
                plugins={[defaultLayoutPluginInstance]} />
                </Worker>`</>}
                   

                {!ViewFile&&<>No pdf file selected</>}
          
      </div> */}
      </div>



         
    )
}

export default FileList