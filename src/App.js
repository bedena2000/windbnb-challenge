import axios from 'axios';
import React, { Component } from 'react';
// Components
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Background from './components/background/Background';
// Context
import MyContext from './context/context';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfRooms: [],
      menuIsVisible: false,
    };
    this.changeMenuVisibility = this.changeMenuVisibility.bind(this);
  }

  changeMenuVisibility() {
    this.setState({
      menuIsVisible: !this.state.menuIsVisible,
    });
  }

  // Data
  componentDidMount() {
    axios
      .get(
        `
        ./data.json
    `,
      )
      .then((data) => {
        const rooms = data.data;
        this.setState({
          arrayOfRooms: rooms,
        });
      });
  }

  render() {
    return (
      <div className="relative">
        <MyContext.Provider
          value={{
            rooms: this.state.arrayOfRooms,
            isMenuVisible: this.state.menuIsVisible,
            changeMenu: this.changeMenuVisibility,
          }}>
          {this.state.menuIsVisible ? <Background /> : null}
          {/* <Menu /> */}
          {this.state.menuIsVisible ? <Menu /> : null}
          <Header />
          <Main />
          <Footer />
        </MyContext.Provider>
      </div>
    );
  }
}

export default App;
