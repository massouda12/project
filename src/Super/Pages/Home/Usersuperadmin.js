import React ,{useEffect, useState,useRef} from 'react';
import {Link} from 'react-router-dom'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './style.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";



export default function Usersuperadmin() {
 
  const [userData, setUserData] = useState("");
  const [data, setData] = useState([]);
  const [limit,setLimit]=useState(5);
  const [pageCount,setPageCount]=useState(1);
  const currentPage=useRef();
  const [admin, setAdmin] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    currentPage.current=1;
    // getAllUser();
    getPaginatedUsers();
  }, []);


  //fetching all user
  const getAllUser = () => {
    fetch("http://localhost:5000/getAllUser", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setData(data.data);
      });
  };



 


  //deleting user
  const deleteUser = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}`)) {
      fetch("http://localhost:5000/deleteUser", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          getAllUser();
        });
    } else {
    }
  };

  
  function getPaginatedUsers(){
    fetch(`http://localhost:5000/paginatedUsers?page=${currentPage.current}&limit=${limit}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setPageCount(data.pageCount);
        setData(data.result)
      });
    
  }
  useEffect(() => {
    fetch("http://localhost:5000/userData", {
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
        console.log(data, "userData");
        if (data.data.userType == "SuperAdmin") {
          setAdmin(true);
          setUserData(data.data);

        } else {
          setAdmin(false);
          setUserData(data.data)
        }
        if (data.data == "token expired") {
          alert("Token expired login again");
          window.localStorage.clear();
          window.location.href = "./";
        }
      });
  }, []);

    return (
      <React.Fragment>
          <div className='Title'>
            <h4>Creating Users
            </h4>
            </div>
      <TableContainer sx={{width:"75%",marginLeft:"70px"}} className="table"component={Paper}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Role</TableCell>
            <TableCell align="left">
            <button className='btn' onClick={() =>navigate("/main/addusers")}><PersonAddIcon className='icon' /></button>
            
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((userData) => {
            return (
            <TableRow
              key={userData.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {userData.name}
              </TableCell>
              <TableCell align="left">{userData.email}</TableCell>
              <TableCell align="left">{userData.userType}</TableCell>
              <TableCell align="left"><button style={{backgroundColor:"#857b7b",color:"white",borderRadius:"5px"}} onClick={() =>navigate("/updateUSer",{state:userData})}><EditIcon fontSize='small'/></button>
              <button onClick={() => deleteUser(userData._id, userData.name)} style={{backgroundColor:"#857b7b",color:"white",borderRadius:"5px"}}><DeleteIcon fontSize='small'/></button></TableCell>
            </TableRow>
            );
            })}
        </TableBody>
        
      </Table>
    </TableContainer>
      </React.Fragment>
    );
  }


