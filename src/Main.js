import React from 'react';
import HornedBeast from './HornedBeast'
import Row from 'react-bootstrap/Row'

class Main extends React.Component {




  render() {
    return (
      < Row sm={1} md={2} lg={4} className="g-4"> 
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
    )
  }
}
export default Main;
