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
      location: 'Helsinki',
      guestsNumber: 0,
    };
    this.changeMenuVisibility = this.changeMenuVisibility.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
    this.changeGuest = this.changeGuest.bind(this);
  }

  changeMenuVisibility() {
    this.setState({
      menuIsVisible: !this.state.menuIsVisible,
    });
  }

  changeLocation(chosenLocation) {
    this.setState({
      location: chosenLocation,
    });
  }

  changeGuestsAmount(amountOfGuests) {
    this.setState({
      guests: amountOfGuests,
    });
  }

  changeGuest(amount) {
    this.setState({
      guestsNumber: amount,
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
    const filteredRooms = this.state.arrayOfRooms.filter((item) => {
      return item.city === this.state.location && item.maxGuests >= this.state.guestsNumber;
    });

    return (
      <div className="relative">
        <MyContext.Provider
          value={{
            rooms: filteredRooms,
            isMenuVisible: this.state.menuIsVisible,
            changeMenu: this.changeMenuVisibility,
            location: this.state.location,
            adults: this.state.adults,
            children: this.state.children,
            changeLocation: this.changeLocation,
            changeGuest: this.changeGuest,
          }}>
          {this.state.menuIsVisible ? <Background /> : null}
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
