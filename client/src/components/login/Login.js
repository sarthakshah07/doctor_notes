import React, { useState,useEffect } from 'react';
import axios from "axios";
import './Login.css';
import {BsPersonCircle} from 'react-icons/bs';
import {GiCancel} from 'react-icons/gi'
import Home from "../home/Home";
import Dashboard from "../dashboard/Dashboard";
import { render } from "@testing-library/react";
import { Form } from "react-router-dom";
// import { from "framer-



function Login() {
    const database = [
        {
          username: "user1",
          password: "123"
        },
        {
          username: "user2",
          password: "12"
        },
        {
          email: "eve.holt@reqres.in",
          password: "cityslicka"
        }
      ];
      
      const error = {
        uname: "invalid username",
        pass: "invalid password"
      };
    
    const [showed,setShowed]= useState(false);
    const [isSubmitted, setIsSubmitted]= useState(false);
    const [errorMessages, setErrorMessages]= useState({});

    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log({ email, password })


  const handleEmail= (e)=>{
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }



  const [responseEmail, setResponseEmail]=useState('')
  const [responsePassword, setResponsePassword]=useState('')



    const HandleSublitLogin=(e)=> {
        e.preventDefault();
        // var {uname, pass} = document.forms[0];
        
        // const userData = database.find((user)=> user.email === uname.value);
        
        // const userData =data.find((user)=> user.username === uname.value);
        
        // console.log(userData);
        // if (userData) {
        //     if (userData.password !== pass.value) {
        //       // Invalid password
        //       setErrorMessages({ name: "pass", message: error.pass });
        //     } else {
        //       setIsSubmitted(true);
        //     }
        //   } else {
        //     // Username not found
        //     setErrorMessages({ name: "uname", message: error.pass });
        //   }



//localhost:5001
        // axios.post('http://localhost:5001/api/login',{
        //   email:email,
        //   password: password,
        // },
        // {headers: {'Referrer-Policy': 'no-referrer'}}
        // ).then(result=>{

        //   console.log(result);
        //   alert("loged in");
        // })
        // .catch(err=>{
        //   alert("not log in")
        //   console.log(err);
        // });

      // app.post('http://localhost:5001/check')
      // .then(
      //   Response=>{
      //     Response.json();
      //     console.log(Response);
      //   })
      
        console.log(email);

        axios.post('http://localhost:5001/check',{
          email:email,
          password:password
        }).then((res)=>{
          const userData= res.data
          // setResponseEmail(resp)
          console.log(userData);
          console.log(res.data);
          console.log("123");
          setIsSubmitted(true)
          // if (userData==email) {
          //   console.log("email done");
          //       if (userData.password !== password) {
          //         // Invalid password
          //         setErrorMessages({ name: "pass", message: error.pass });
          //         console.log("1");
          //       } else {
          //         // setIsSubmitted(true);
          //         alert("success");
          //         console.log("2");
          //       }
          // } else {
          //       // Username not found
          //       setErrorMessages({ name: "uname", message: error.pass });
          //       console.log("3");
          // }
         
        })
    };

    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );







  // regirstration handle

  // const [data, setdata]=useState({
  //   uname:'',
  //   email: '',
  //   number: '',
  //   pass: '',
  //   Password:'' 
  // })
  const[Name , setname]= useState('');
  const[Remail , setRemail]= useState('');
  const[number , setnumber]= useState('');
  const[pass1 , setPass1]= useState('');


  // console.log(Name);
  // console.log(Remail);
  // const handle=(e)=>{
    
    // setRemail(e.target.value);
    // setnumber(e.target.value);
    // setpass(e.target.value);
   
      //  console.log(uname);
  //  console.log(email);
  //  console.log(number);
  //  console.log(pass);
    // const {name,value} =e.target;
    //  setdata((prev)=>{
        
    //  return{...prev, [name]: value}
        
    // })
    
  // };
  
const handlechange=(values)=>{

   values.preventDefault();
   console.log(Name);
   console.log(Remail);
   console.log(number);
   console.log(pass1);
  //  const user={
  //     Name: this?.['state']?.['name'],
  //  };
   //  console.log(this?.state?.Name);
  //  console.log(user);
  // React.useEffect(()=>{
  //   fetch("/")
  //   .then((res)=>res.json())
  //   .then()
  // })
  axios.post("http://localhost:5001/register",{
    Name:Name,
    email:Remail,
    number: number,
    password: pass1
  }).then((res)=>{
     alert(res.data.msg);
    console.log("DONE");
    alert("success");
  }).catch((err)=>{
    console.log(err);
  })

  //  axios.post('http://localhost:5001/api/insert',{
      
    
  //   //.then((res)=>res.JSON)
  //  }).then(()=>{
  //   console.log("data");
  //    alert("successfull insert");
  //  });
  
};


    const renderForm=(
        <div className="loginpage">
            <div className="back">
              
            {/* <Home id="blur"/> */}
            </div>
        {/* , left:"40%" , left:"63%" */}
          <div className="loginExtend" style={showed ? {transitionDelay:".4s",scale: "0"} : {transitionDelay: ".4s", scale: "1"} } 
           initial={{opacity:0, transition: {duration: 40}, left:"60%" }}
           animate={{ opacity:1, transition: {duration: 2}, left:"63%" }}
           exit={{opacity:1 }}>


                <a onClick={()=> setShowed(true)}><u>New Registration</u></a>
                <a id="forgotP"><u>Forgot password?</u></a>
                </div>

                <div className="loginForm" style={showed ? {scale: "0"} : {scale: "1"}}
                initial={{opacity:0 , transition: {duration: 6}}}
                animate={{opacity:1 , transition: {duration: 3} }}
                exit={{x: 1, transition: {duration: 1} }}>
                    <a id="cross" href='../'><GiCancel /></a>
                    <div><BsPersonCircle/></div>
                    <h1>Login Form</h1>
                    <form  className="frm" onSubmit={HandleSublitLogin}>
                        <label>Email Id:
                        {/* <input  type="text"  name="uname" placeholder="Enter User Name " required></input> */}
                        <input type="email" name="uname" placeholder="Enter Email" value={email} onChange={handleEmail}></input>
                        {/* {renderErrorMessage("uname")} */}
                        </label>
                        <br></br>
                        <label>Password:
                        <input type="password"  name="pass" placeholder="Enter Password" required value={password}
                        onChange={handlePassword}
                        ></input>
                        {/* {renderErrorMessage("pass")} */}
                        </label>
                        <br></br>
                        <button type="submit" >SUBMIT</button>
                    </form>
                {/* </div> */}
            </div>
           
           
            <div className="registrationExtend" style={showed ?{transitionDelay: ".5s" ,scale: "1"} : {transitionDelay: ".1s" ,scale: "0"}}>
        <a onClick={()=> setShowed(false)}><u>Login</u></a>
        
        </div>
            <div className="registerForm" style={showed ? {scale: "1"} : {scale: "0"}}>
            
            
            <div><BsPersonCircle/></div>
                <h1>Registration Form</h1>
                <form  className="frm2" onSubmit={handlechange} >
                    <label>Full Name:
                    <input  type="text"  name="Name" placeholder="Enter Name " value={Name} onChange={(e)=>setname(e.target.value)}></input>
                    </label><br></br>
                    <label>Email Address:
                    <input  type="email"  name="Remail" placeholder="Enter Email " value={Remail}  onChange={(e)=>setRemail(e.target.value)}></input>
                    </label>
                    <br></br>
                    <label>Mobile:
                    <input type="number"  name="number" placeholder="Enter Number" value={number} onChange={(e)=>setnumber(e.target.value)}></input>
                    </label><br></br>
                    <label>Set Password:
                    <input type="password"  name="pass1" placeholder="Enter Password"  onChange={(e)=>setPass1(e.target.value)}></input>
                    </label>
                    <br></br>
                    <label>Re-Enter<br></br> Password:
                    <input type="password"  name="Password" placeholder="re-Enter Password"  ></input>
                    </label><br></br>
                    
                    <br></br>
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
            </div>  
            );
    return ( <div>
            <div>
            {isSubmitted ? <div><Dashboard/></div> : renderForm}
           </div>
           </div>
           )       
       //<div><Dashboard/></div>   
       //<div> <a href="../Login/Dashboard"> </a></div>
       
        
    
};
export default Login;