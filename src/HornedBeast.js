import React from 'react';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beastVotes: 0

    }
  }

  voteClick = () => {
    this.setState({
      beastVotes: this.state.beastVotes + 1
    })
  }

  render() {
    return (
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Title>{this.props.name} </Card.Title>

          <Card.Img src={this.props.imgUrl} alt={this.props.name} title={this.props.description} onClick={this.voteClick} />
          <Card.Body>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>❤️ Loves = {this.state.beastVotes}</Card.Text>
          </Card.Body>
        </Card>
      </Col>



    )
  }
}

export default HornedBeast;


