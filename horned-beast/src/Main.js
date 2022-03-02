import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    return (
      <>
        <HornedBeast src="https://i.pinimg.com/736x/00/6c/17/006c17412ff79646af8248cdb18677a3--fainting-goats-viral-videos.jpg" alt="passed out goat" title={'Tennessee Fainting Goat'} description={'Scares itself to death on the reg'} />
        <HornedBeast src="https://media.gettyimages.com/photos/steinbock-pilatus-mountain-range-lucerne-switzerland-picture-id1002118672?s=612x612" alt="loud goat" title={'Screaming Goat'} description={'Likes to scare the fainting goat'} />

      </>
    )
  }
}

export default Main;
