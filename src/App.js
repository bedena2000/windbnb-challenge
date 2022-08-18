import axios from 'axios';
import React, { Component } from 'react';
// Components
import Header from './components/Header/Header';
import Main from './components/Main/Main';
// Context
import MyContext from './context/context';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfRooms: [],
    };
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
      <div>
        <MyContext.Provider
          value={{
            rooms: this.state.arrayOfRooms,
          }}>
          <Header />
          <Main />
        </MyContext.Provider>
      </div>
    );
  }
}

export default App;
