import React ,{Component} from 'react';
import Backdrop from '../../../components/Backdrop/Backdrop';
import Modal from '../../../components/Modal/Modal';
import './style.css'
import {Link} from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@atlaskit/avatar';
import Heading from '@atlaskit/heading';
import { AtlassianIcon } from '@atlaskit/logo';
import Lozenge from '@atlaskit/lozenge';
import TrashIcon from '@atlaskit/icon/glyph/trash'
import EditFilledIcon from '@atlaskit/icon/glyph/edit-filled'
import { Box, Inline, Stack, Text, xcss } from '@atlaskit/primitives';
class Jobs extends Component {
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
            onConfirm={this.modalConfirmHandler}
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
            <h3>Jobs Created
            <Link to="/admin/addjobs">
            <button className="btn" >
              Add Jobs 
              <AddIcon  color='action' className='icon' />
            </button>
            </Link>
            </h3>
        </div>
        <Stack xcss={containerStyles} space="space.100">
      <Box as="span">
        <Lozenge appearance="new">Ingéniuere Génie Logicielle</Lozenge>
      </Box>
      <Text as="span" >
        Sofracom
      </Text>
      <Box xcss={extraInfoStyles}>
        <Box xcss={inlineStyles}>
          <AtlassianIcon appearance="brand" size="small" label="" />
          <Heading level="h300">Salaire : 2000DT</Heading>
        </Box>
        <Inline space="space.100" alignBlock="center">
          <EditFilledIcon size='medium' />
          <TrashIcon size="medium" label="" />
          <Avatar size="small" />
        </Inline>
      </Box>
    </Stack>
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

const extraInfoStyles = xcss({
  display: 'flex',
  justifyContent: 'space-between',
  paddingBlock: 'space.050',
});
export default Jobs;
