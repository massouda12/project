import React ,{Component} from 'react';
import {Link} from 'react-router-dom'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Box, Inline, Stack, Text, xcss } from '@atlaskit/primitives';
import Avatar from '@atlaskit/avatar';
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

function createData(Fullname, email, Role, Add ) {
  return { Fullname, email, Role, Add };
}
const rows = [
  createData('Saif ben Massouda', 'Saifmassouda@gamil.com', "admin"  ),
  createData('Ice cream sandwich', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
];
class Usersuperadmin extends Component {
  state = {
    creating: false,
    events: []
  };
  modalCancelHandler = () => {
    this.setState({ creating: false });
  };
  startCreateEventHandler = () => {
    this.setState({ creating: true });
  };
  render() {
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
            <TableCell align="left"><Link  to="/main/addusers">
            <button className='btn'><PersonAddIcon className='icon' /></button>
            </Link>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Fullname}
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.Role}</TableCell>
              <TableCell align="left"><button style={{backgroundColor:"#857b7b",color:"white",borderRadius:"5px"}}><EditIcon fontSize='small'/></button>
              <button style={{backgroundColor:"#857b7b",color:"white",borderRadius:"5px"}}><DeleteIcon fontSize='small'/></button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </React.Fragment>
    );
  }
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

const boxStyles = xcss({
  display: 'flex-box',
  justifyContent: 'start',
  flexDirection:"row",
  color: 'color.text',
  borderColor: 'color.border.disabled',
  borderStyle: 'solid',
  borderRadius: 'border.radius.200',
  width:"20%",
  height:"150px",
  textAlign:"center"
});
export default Usersuperadmin;
