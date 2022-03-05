import React from 'react';
import HornedBeast from './HornedBeast';
// import faintinggoat from './assets/fainting_goat.jpeg'
// import screaminggoat from './assets/Screaming_Goat.jpeg'
import allBeasts from './data.json'
import Row from 'react-bootstrap/Row'

class Main extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     beastName: "Fainting Goat",
  //     beastNameTwo: "Screaming Goat",




  render() {
    return (
      < Row >
      {allBeasts.map((beast, idx) => (
          <HornedBeast
            key={idx}
            title={beast.title}
            imageUrl={beast.imageUrl}
            description={beast.descritption}
          />
        ))}
      </Row >
    )
  }
}
export default Main;
