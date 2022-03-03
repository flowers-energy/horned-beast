import React from 'react';
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
      <Card className="mainCard" style={{ width: '18rem' }}>

        <Card.Title>{this.props.name} </Card.Title>

        <Card.Img variant="top" src={this.props.imgUrl} alt={this.props.name} onClick={this.voteClick} />
        <Card.Body>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>❤️ Loves = {this.state.beastVotes}</Card.Text>
          </Card.Body>
        </Card>



    )
  }
}

export default HornedBeast;


