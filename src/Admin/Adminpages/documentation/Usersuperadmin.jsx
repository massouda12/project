import React ,{Component} from 'react';
import Backdrop from '../../../components/Backdrop/Backdrop';
import Modal from '../../../components/Modal/Modal';
import './style.css'
import {Link} from 'react-router-dom'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
class Users extends Component {
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
      {this.state.creating && <Backdrop />}
        {this.state.creating && (
          <Modal
            title="Add Event"
            canCancel
            canConfirm
            onCancel={this.modalCancelHandler}
            position ="absolute"
          >
            <form >
              <div className="form-control">
                <label htmlFor="title" style={Styles.label}>Title</label>
                <input type="text" id="title" style={Styles.input} ref={this.titleElRef} placeholder='Title'/>
              </div>
              <div className="form-control">
                <label htmlFor="price" style={Styles.label}> Price</label>
                <input type="number" id="price" style={Styles.input} ref={this.priceElRef} placeholder='Price' />
              </div>
              <div className="form-control">
                <label htmlFor="date"style={Styles.label}>Date</label>
                <input type="datetime-local" style={Styles.input} id="date" ref={this.dateElRef} />
              </div>
              <div className="form-control">
                <label htmlFor="description"style={Styles.label}>Description</label>
                <textarea
                  id="description"
                  rows="4"
                  ref={this.descriptionElRef}
                  style={Styles.input}
                  placeholder='Description'
                />
              </div>
            </form>
          </Modal>
          )}
          <div className='Title'>
            <h3>Creating Users
              
            </h3>
        </div>
 
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
export default Users;
