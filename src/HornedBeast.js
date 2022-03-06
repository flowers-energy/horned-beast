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
    this.setState({beastVotes: this.state.beastVotes + 1});
    this.props.show(this.props.title);
  }



  render() {
    return (
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Title>{this.props.title} </Card.Title>
          <Card.Img 
          src={this.props.imageUrl} 
          alt={this.props.keyword} 
          title={this.props.title} 
          onClick={this.voteClick}/>
          <Card.Body>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>❤️ Loves: {this.state.beastVotes}</Card.Text>
          </Card.Body>
        </Card>
      </Col>



    )
  }
}

export default HornedBeast;


