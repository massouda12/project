import React ,{useEffect, useState,useRef} from 'react';
import Card from '@mui/material/Card';
import { useLocation } from "react-router-dom"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import { useNavigate } from "react-router-dom";

export default function Homeuser() {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState("");
  const [limit,setLimit]=useState(5);
  const [pageCount,setPageCount]=useState(1);
  const currentPage=useRef();
  const [user, setUser] = useState(false);
  const [name, setLname] = useState("");
  const navigate = useNavigate();
  const location=useLocation();


  useEffect(() => {
    currentPage.current=1;
    getPaginatedJobs();
  }, []);



  function getPaginatedJobs(){
    fetch(`http://localhost:5000/paginateJobs?page=${currentPage.current}&limit=${limit}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "Jobs");
        setPageCount(data.pageCount);
        setData(data.result)
      });
  }

  useEffect(() => {
    fetch("http://localhost:5000/jobData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "jobData");
        if (data.data.userType == "User") {
          setUser(true);
          setUserData(data.data);

        } else {
          setUser(false);
          setUserData(data.data)
        }
        if (data.data == "token expired") {
          alert("Token expired login again");
          window.localStorage.clear();
          window.location.href = "/";
        }
      });
  }, []);
  return (
    <React.Fragment>
    <div className='Title'>
    <h4>Welcome User</h4>
    </div>
    <div className='Card'style={{paddingTop: "10px"}}>
    {data.map((userData) => {
            return (
    <Card sx={{ marginRight:"30px",borderRadius:"20px", paddingRight:"70px",backgroundColor:"#91c8d3",width:"300px",height:"200px"}}>
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
        {userData.title}
        </Typography>
        <Typography variant="body2" color="black" paddingBottom={"10px"}>
         {userData.role}
        </Typography>
        <Typography variant="body2" color="black" paddingBottom={"10px"}>
         {userData.salary} DT
        </Typography>
      </CardContent>
      <CardActions className='btn'  >
        <button  onClick={() =>navigate("/jobDetails",{state:userData})} size="small" style={{fontSize:"medium",backgroundColor:"#5b7d84",color:"white",marginLeft:"90px",borderRadius:"20px",padding:8}}>Show Details</button>
      </CardActions>
      </Card>
            ) })}
    </div>
    </React.Fragment>
  );
};

