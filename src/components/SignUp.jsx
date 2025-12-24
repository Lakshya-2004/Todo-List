import { useState } from "react";
import './SignUp.css';
export const SignUp =()=>{
    const [fname,setFname]= useState("");
    const [lname,setLname]=useState("");
    const [phone,setPhone]=useState("");
    const handlingform =(e)=>{
        e.preventDefault();
        const form ={
            fname,
            lname,
            phone,
        };
        console.log(form);
    }
    const handlebutton=()=>{
        setFname("");
        setLname("");
        setPhone("");
    }

    return(<>  
    <form onSubmit={handlingform}> <h1>SignUp</h1>
    <label htmlFor="fname">Name</label>
    <input name="fname" value={fname} onChange={(e)=>{setFname(e.target.value)}}/>
     <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          name="lname"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />

        <br />

        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <br />

        <button type="submit" onClick={handlebutton}>Sign Up</button>
     </form>
    <h1>Details</h1>
    <p>Name : {fname} {lname}, Phone-No : {phone}</p>
     </>);
}