import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
class SelectedBeast extends React.Component {
  render (){
    return (
      <Modal 
      show={this.props.showSelectedBeast} 
      onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>A closer look at this beast...</Modal.Title>
          <Modal.Body>{this.props.selectedBeast.title}</Modal.Body>
        </Modal.Header>
        <Image src={this.props.selectedBeast.image_url} alt={this.props.selectedBeast.keyword}/>
        <Modal.Body>
        {this.props.selectedBeast.description}
        </Modal.Body>
        <Modal.Body>
           Aren't they just FABULOUS!
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}



export default SelectedBeast
