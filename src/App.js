
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container'
import SelectedBeast from './SelectedBeast';
import allBeasts from './data.json'


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       show: false,
       allBeasts: allBeasts,
       selectedBeast: {},

      }
    }
  
    showSelectedBeast = (title) => {
      
      const selectedBeast = allBeasts.find(hornedBeast => hornedBeast.title === title)
      this.setState({show: true, selectedBeast: selectedBeast});
    }
    onHide = () => {
      this.setState({show: false});
    }
    
    render() {
    console.log(this.state)
    return (
      <Container className="App">
        <Header />
        <Main allBeasts={this.state.allBeasts} showSelectedBeast={this.showSelectedBeast}/>
        <HornedBeast />
        <Footer />
        <SelectedBeast selectedBeast={this.state.selectedBeast}showSelectedBeast={this.state.show} handleClose={this.onHide}/>
      </Container>
    );
  }
}

export default App;
