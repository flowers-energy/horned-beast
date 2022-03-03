import React from 'react';
import HornedBeast from './HornedBeast';
import faintinggoat from './assets/fainting_goat.jpeg'
import screaminggoat from './assets/Screaming_Goat.jpeg'


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beastName: "Fainting Goat",
      beastNameTwo: "Screaming Goat",

    }
  }

  render() {
    return (
      <>
        <HornedBeast name={this.state.beastName} imgUrl={faintinggoat} description={'scares itself to death on the reg'}/> 
        <HornedBeast name={this.state.beastNameTwo} imgUrl={screaminggoat} description={'likes to scare the fainting one'}/>
      </>
    );
  }
}
export default Main;
