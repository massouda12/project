import React ,{Component} from 'react';
import "./Addjob.css"
class Addjobs extends Component {
  render() {
    return (
        <div className='Title' >
        <h3 style={{textAlign:"center"}}>Creating Jobs </h3>
        <div className="auth-wrapper">
            <div className="auth-inner">
            <p>Job Title</p>  
             <input placeholder="Title" className="form-control" /> <br />
             <p>Job Role</p>  
             <input placeholder="Role" className="form-control" /> <br />
             <p>Job Salary </p>  
             <input placeholder="Salary" className="form-control"  type='number' min="0" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"/> <br />
             <p>Working Hours</p>  
             <input placeholder="Hours" className="form-control" /> <br />  
             <p>Description</p>  
             <label htmlFor="description"></label>
                <textarea
                  id="description"
                  rows="3"
                  
                  ref={this.descriptionElRef}
                  placeholder='Description'
                />       
               <button>Submit</button>
            </div>
        </div>

    </div>
    );
  }
}

export default Addjobs;
