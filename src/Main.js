import React from 'react';
import HornedBeast from './HornedBeast'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'

class Main extends React.Component {

  render() {
    return (
      <>
        <Form >
          <Form.Group>
          <Form.Control onChange={(event)=>this.props.filteredBeasts(event)} as='select'>
            <option value='All'>All</option>
            <option value='One'>One</option>
            <option value='Two'>Two</option>
            <option value='Three'>Three</option>
            <option value='100'>100</option>
          </Form.Control>
          </Form.Group>
        </Form>

        < Row sm={8} md={3} lg={3} b={8}>
          {this.props.allBeasts.map((beast, idx) => (
            <HornedBeast
              show={this.props.showSelectedBeast}
              key={idx}
              title={beast.title}
              imageUrl={beast.image_url}
              description={beast.description}
              alt={beast.keyword}
            />

          ))}
        </Row >
      </>

    )
  }
}

export default Main;
