import React ,{Component,useState} from 'react';
import "./Addjob.css"

export default function Addjobs() {
  const [title, setTitle] = useState("");
const [role, setRole] = useState("");
const [salary, setSalary] = useState("");
const [hours, setHours] = useState("");
const [description, setDescription] = useState("");
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, role, salary,hours,description);
    fetch("http://localhost:5000/addjob", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        title,
        role,
        salary,
        hours,
        description
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "JobOffer");
        if (data.status == "ok") {
          alert("Job is registered Successfuly");
          window.location.href = "/admin/";
        } else {
          alert("Something went wrong");
        }
      });
  
};
    return (
        <div className='Title' >
        <h3 style={{textAlign:"center"}}>Creating Jobs </h3>
        <div className="auth-wrapper">
            <div className="auth-inner">
            <form onSubmit={handleSubmit}>
            <p>Job Title</p>  
             <input placeholder="Company Name" className="form-control" onChange={(e) => setTitle(e.target.value)} /> <br />
             <p>Job Role</p>  
             <input placeholder="Role" className="form-control" onChange={(e) => setRole(e.target.value)} /> <br />
             <p>Job Salary </p>  
             <input placeholder="Salary" className="form-control"  type='number' min="0"  onChange={(e) => setSalary(e.target.value)} /> <br />
             <p>Working Hours</p>  
             <input placeholder="Hours" className="form-control" type='number' min="0" onChange={(e) => setHours(e.target.value)} /> <br />  
             <p>Description</p>  
             <label htmlFor="description"></label>
                <textarea
                  id="description"
                  rows="3"
                  placeholder='Description'
                  onChange={(e) => setDescription(e.target.value)}
                />       
               <button>Submit</button>
               </form>
            </div>
        </div>

    </div>
    );
  }


