import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
const axios = require('axios');
// import styled from 'styled-components';
import Header from './components/Header.jsx';
import Welcome from './components/Welcome.jsx';
import List from './components/List.jsx';
import ATEAM from './components/ATeam.jsx';
import MemoryLane from './components/MemoryLane.jsx';
import LatestNews from './components/LatestNews.jsx';
import dummy from './components/dummyData.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seededData: [],
    }
    //THIS BINDING AREA
    this.getSeededData = this.getSeededData.bind(this);
  }

  componentDidMount() {
    this.getSeededData();
  }

  // Axios GET request
  getSeededData() {
    axios.get('/api/MightyMe-Data')
      .then((results) => results.data)
      // .then(result => console.log(result))
      .then((result) => this.setState({
        seededData: result,
      }))
      .catch(console.log);
  }

  render () {
    return (
    <div>
      <Header />
      <Welcome />
      {/* <List items={this.state.items}/> */}
      <ATEAM seededData={this.state.seededData}/>
      <MemoryLane />
      <LatestNews />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));