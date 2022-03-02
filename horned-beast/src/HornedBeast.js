import React from 'react';

class HornedBeast extends React.Component {
  render() {
    return (
      <>
        <div>
          <h2>{this.props.title}</h2>
          <img src={this.props.src} alt={this.props.alt0}/>
          <p>{this.props.description}</p>
        </div>
      </>

    )
  }
}

export default HornedBeast;
