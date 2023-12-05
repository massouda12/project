import React ,{Component} from 'react';
import "./Adduser.css"
class Addusers extends Component {
  render() {
    return (
        <div className='Title' >
        <h3 style={{textAlign:"center"}}>Creating Users </h3>
        <div className="auth-wrapper">
            <div className="auth-inner">
            <p>Name </p>  
             <input placeholder="Name" className="form-control" /> <br />
             <p>Email </p>  
             <input placeholder="Email" className="form-control" /> <br />
             <p>Password </p>  
             <input placeholder="Password" className="form-control" /> <br />
             <div>
            <label  className="label">Select Role :
            <select name="Role"  className="select">
            <option value="admin">admin</option>
            <option value="user">user</option>
            <option value="superadmin">superadmin</option>
          </select>
          </label>
            </div>          
             <button  >Submit</button>
            </div>
        </div>

    </div>
    );
  }
}

export default Addusers;
