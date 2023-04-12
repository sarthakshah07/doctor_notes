import React, { useEffect } from 'react';
import Header from "../header/Header";
import Login from "../login/Login";
import './Home.css';
import Video from "../../video/earth.mp4"
import {AiOutlineUserAdd,AiOutlineUnorderedList,AiOutlineCalendar} from 'react-icons/ai';
import {GiNotebook,GiReceiveMoney} from 'react-icons/gi';
// import Login from "../login/Login";
// import { from "framer-;
// import Aos from "aos";
// import "aos/dist/aos.css";
import video from '../../video/earth.mp4';
import { Box, Button, Card, CardActionArea, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import WrapperComponent from '../wrapperComponent';
import   {useNavigate }  from 'react-router-dom';

function Home() {
    //for Animation
    //  useEffect(()=>{
    //      Aos.init({duration: 5000});
    //      Aos.refresh({duration: 1000})
    //  },[])
   
       
     const navigate = useNavigate()
    

    return(
        <WrapperComponent isHeader>
        <Grid container border={1} className="page">
            <Grid item xs={12} border={1} className="motionDiv" sx={{height:{xs:"fit-content",sm:"100vh"}}}>
                        <Card className="quote"  >
                            <CardActionArea >
                                <CardMedia
                                    className='vid'
                                    component='video'
                                    autoPlay
                                    image={Video}
                                />
                            </CardActionArea>
                        </Card>
                     <Box className="content" data-aos="zoom-in-left" sx={{display:{xs:"none", sm:"flex"}}}>
                    
                         <Typography>
                         "The sole and raised mission of the doctor is to restablish the health of the sick, which is called cure."
                         <br></br><Typography id="name">-Samuel Hahnemann</Typography>
                         </Typography>
                         <Button variant='contained' sx={{backgroundColor:"seagreen"}} onClick={()=>navigate("/login")} data-aos="zoom-in" >
                         Get Started
                         </Button>
                     </Box>
                    
                 {/* </Grid> */}
            </Grid>
            <Grid item xs={12} md={12}  sx={{backgroundColor:"lightblue",height:"110vh" ,display:"flex",justifyContent:"center"}}>
                <Grid container xs={6} md={10} border={1}  >
                    
                    <Grid item xs={6} border={1}>
                    <Typography variant='h4'>What is Patient Record System ?</Typography>
                    </Grid>
                    <Grid item xs={6} border={1}>
                    <Typography variant='text'>What is Patient Record System ?</Typography>

                    {/* <Typography variant='text' >Patient Management Systems are comprehensive,
                         integrated information systems
                         designed to manage the information of patients of a hospital and manage the service processes. Hospitals are
                         becoming more reliant on the capability of patient management information system to assist in the diagnosis
                         process and management, for better and improved services and practices
                    </Typography> */}
                    </Grid>
                    {/* <Typography variant='text'>
                        Patient Management Systems are comprehensive
                         integrated information systems
                         designed to manage the information of patients of a hospital and manage the service processes. Hospitals are
                         becoming more reliant on the capability of patient management information system to assist in the diagnosis
                         process and management, for better and improved services and practices
                    </Typography> */}

                </Grid>
                {/* <Grid  container xs={6} md={6}>
                            <Typography>dfvsdkjnkdjvn</Typography>
                </Grid> */}

            {/* <div  data-aos="zoom-in-right">
                    
                 <div className="content2">
                     <h1>What is Patient Record System ?</h1>
                     <p>Patient Management Systems are comprehensive, integrated information systems
                         designed to manage the information of patients of a hospital and manage the service processes. Hospitals are
                         becoming more reliant on the capability of patient management information system to assist in the diagnosis
                         process and management, for better and improved services and practices
                     </p>
                     <a href="../Login" data-aos="zoom-in" >
                     Get Started</a>
                 </div>
                 <img src="../abt.png" data-aos="zoom-out"></img>
             </div> */}
            </Grid>
            
        </Grid>
        </WrapperComponent>
       
        
    // <div className="page" >

    //         <div
    //         className="iv"
    //         //  initial={{width: 0}}
    //         //  animate={{width: "100%" , transition: {duration: .2} }}
    //         //  exit={{x: window.innerWidth }}
    //         >
    //         {/* <section className="sec-1"> */}
            
    //             <div className="quote"  >
    //                 <div className="vid">
    //                     <video src={video} autoPlay loop muted  id="insideVid" ></video>
    //                 </div>
                    
                
                    
    //                 <div className="content" data-aos="zoom-in-left">
                    
    //                     <p>
    //                     "The sole and raised mission of the doctor is to restablish the health of the sick, which is called cure."
    //                     <br></br><p id="name">-Samuel Hahnemann</p>
    //                     </p>
    //                     <a href="../Login" data-aos="zoom-in" >
    //                     Get Started</a>
    //                 </div>
                    
    //             </div>
    //         {/* </section> */}
    //         {/* <section className="sec-2"> */}
    //             <div className="about" data-aos="zoom-in-right">
                    
    //                 <div className="content2">
    //                     <h1>What is Patient Record System ?</h1>
    //                     <p>Patient Management Systems are comprehensive, integrated information systems
    //                         designed to manage the information of patients of a hospital and manage the service processes. Hospitals are
    //                         becoming more reliant on the capability of patient management information system to assist in the diagnosis
    //                         process and management, for better and improved services and practices
    //                     </p>
    //                     <a href="../Login" data-aos="zoom-in" >
    //                     Get Started</a>
    //                 </div>
    //                 <img src="../abt.png" data-aos="zoom-out"></img>
    //             </div>
    //         {/* </section> */}
    //         {/* <section className="sec-3"> */}
    //             <div className="about2" data-aos="fade-right">
    //             <h1>What We Offer</h1>
    //                 <div className="content3">
    //                     <a id="svg1" data-aos="fade-right"><AiOutlineUserAdd/>Add Record</a> 
    //                     <a id="svg2" data-aos="fade-up"><AiOutlineUnorderedList/>List</a>
    //                     <a id="svg3" data-aos="fade-down-right"><GiNotebook/>Study Material</a>
    //                     <a id="svg4" data-aos="fade-down"><GiReceiveMoney/>Accounts</a>
    //                     <a id="svg5" data-aos="fade-down-left"><AiOutlineCalendar/>To-do List </a>
    //                 </div>
    //             </div>
    //         {/* </section>     */}
    //             <div className="about3" data-aos="zoom-in-right">
    //                 <div className="content4">
                        
    //                 </div>
    //             </div>
                
    //         </div>           
    //      <Header/>
        
           
    //  </div>
      
    )

}
export default Home;

