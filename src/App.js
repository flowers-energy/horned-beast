
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

  handleChange = (event) => {
    const selection = event.target.value;
    let filteredBeasts;

    if (selection === 'Two') {
      filteredBeasts = allBeasts.filter(hornedBeast => hornedBeast.horns === 2);
    } else if (selection === 'One') {
      filteredBeasts = allBeasts.filter(hornedBeast => hornedBeast.horns === 1);
    } else if (selection === 'Three') {
      filteredBeasts = allBeasts.filter(hornedBeast => hornedBeast.horns === 3);
    } else if (selection === '100') {
      filteredBeasts = allBeasts.filter(hornedBeast => hornedBeast.horns === 100);
    } else if (selection === 'All') {
      filteredBeasts = allBeasts;
    }
this.setState({allBeasts: filteredBeasts})
  }
  

showSelectedBeast = (title) => {

  const selectedBeast = allBeasts.find(hornedBeast => hornedBeast.title === title)
  this.setState({ show: true, selectedBeast: selectedBeast });
}
onHide = () => {
  this.setState({ show: false });
}


render() {
  return (
  <Container className="App">
    <Header />
    <Main allBeasts={this.state.allBeasts} showSelectedBeast={this.showSelectedBeast} filteredBeasts={this.handleChange}/>
    <Footer />
    <SelectedBeast selectedBeast={this.state.selectedBeast} showSelectedBeast={this.state.show} handleClose={this.onHide} />
  </Container>
)};

}
export default App;

