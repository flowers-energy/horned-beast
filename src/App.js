
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import HornedBeast from './HornedBeast';
import SelectedBeast from './SelectedBeast';


class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <HornedBeast />
        <Footer />
        <SelectedBeast />
      </div>
    );
  }
}

export default App;
