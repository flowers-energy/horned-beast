import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class SelectedBeast extends React.Component {
  render (){
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Favorite Horned Beast</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}



export default SelectedBeast
