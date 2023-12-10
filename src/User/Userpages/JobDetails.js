import React ,{useEffect, useState,useRef} from 'react';
import Card from '@mui/material/Card';
import { useLocation } from "react-router-dom"
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Details.css'
import Topbar from '../Bars/Topbar';
 function JobDetails() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState("");
  const [description, setDescription] = useState("");
  const location=useLocation();

  useEffect(() =>{
    console.log(location)
    setTitle(location.state.title)
    setRole(location.state.role)
    setSalary(location.state.salary)
    setDescription(location.state.description)
},[])
 
  return (
    <React.Fragment>
    <Topbar/>
    <Card sx={{ marginLeft:"50px",borderRadius:"20px", paddingRight:"70px",backgroundColor:"#91c8d3",width:"1400px",height:"300px",marginTop:"100px"}}>
      <CardContent >
        <Typography gutterBottom variant="h3" component="div" defaultValue={title}>
            {title}
        </Typography>
        <Typography variant="h5" color="black"  defaultValue={role} >
            {role}
        </Typography>
        <Typography variant="h5" color="black" defaultValue={salary} paddingTop={"20px"}>
           {salary}DT
        </Typography>
        <Typography variant="h6" color="black" defaultValue={description} paddingTop={"20px"}>
            {description}
        </Typography>
      </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default JobDetails