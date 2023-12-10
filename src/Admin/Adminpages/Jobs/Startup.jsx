import React ,{Component,useEffect, useState,useRef} from 'react';
import './style.css'
import {Link} from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@atlaskit/avatar';
import Heading from '@atlaskit/heading';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Lozenge from '@atlaskit/lozenge';
import TrashIcon from '@atlaskit/icon/glyph/trash'
import EditFilledIcon from '@atlaskit/icon/glyph/edit-filled'
import { Box, Inline, Stack, Text, xcss } from '@atlaskit/primitives';
export default function Jobs() {
  const [userData, setUserData] = useState("");
  const [data, setData] = useState([]);
  const [limit,setLimit]=useState(5);
  const [pageCount,setPageCount]=useState(1);
  const currentPage=useRef();
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    currentPage.current=1;
    // getAllUser();
    getPaginatedUsers();
  }, []);
  const getAllUser = () => {
    fetch("http://localhost:5000/getAllJob", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "Job");
        setData(data.data);
      });
  };


  function getPaginatedUsers(){
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
        if (data.data.userType == "Admin") {
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
            <h3>Jobs Created
            <Link to="/admin/addjobs">
            <button className="btn" >
              Add Jobs 
              <AddIcon  color='action' className='icon' />
            </button>
            </Link>
            </h3>
        </div>
        {data.map((userData) => {
            return (
        <Stack xcss={containerStyles} space="space.100">
      <Box as="span">
        <Lozenge appearance="new">{userData.role}</Lozenge>
      </Box>
      <Text as="span" >
      {userData.title}
      </Text>
      <Box xcss={extraInfoStyles}>
        <Box xcss={inlineStyles}>
          <AttachMoneyIcon appearance="brand" size="small" label="" />
          <Heading level="h300">{userData.salary} DT</Heading>
        </Box>
        <Box xcss={inlineStyles2}>
          <AccessTimeIcon appearance="brand" size="small" label="" />
          <Heading level="h300">{userData.hours} Heures</Heading>
        </Box>
        <Inline space="space.100" alignBlock="center">
          <EditFilledIcon size='medium' />
          <TrashIcon size="medium" label="" />
          <Avatar size="small" />
        </Inline>
      </Box>
    </Stack>
            )})}
    </React.Fragment>
    );
  }

const Styles = {
  label: {
    display: 'block',
    textAlign: 'center',
    fontSize: '20px',
    margin:'0 0 2vh 0 ',
  },
  input : {
    display:'block',
    width:'100%',
    padding : '0.5 rem 0.8rem 0.5rem 0.8rem',
    margin:'0.9vw 0',
    border:'0',
    borderRadius:'5px',
    fontSize:'20px',
    textarea:'fixed'
  }
}
const containerStyles = xcss({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'elevation.surface.raised',
  padding: 'space.150',
  marginBottom:"10px",
  transition: '200ms',
  borderRadius: 'border.radius.100',
  boxShadow: 'elevation.shadow.raised',
  ':hover': {
    backgroundColor: 'elevation.surface.hovered',

  },
});

const inlineStyles = xcss({
  display: 'flex',
  alignItems: 'center',
});
const inlineStyles2 = xcss({
  display: 'flex',
  alignItems: 'center',
  paddingRight:'880px'
});
const extraInfoStyles = xcss({
  display: 'flex',
  justifyContent: 'space-between',
  paddingBlock: 'space.050',
});
