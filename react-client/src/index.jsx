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
import ATeamModal from './components/ATeamModal.jsx';
import MemLaneModal from './components/MemLaneModal.jsx';
import NewsModal from './components/NewsModal.jsx';
import dummy from './components/dummyData.js';
// import GlobalFonts from './fonts/fonts.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seededData: [],
      show: false,
      memShow: false,
      newsShow: false,
      newsUrl: '',
      currentIndex: 0,
    }
    //THIS BINDING AREA
    this.getSeededData = this.getSeededData.bind(this);
    this.showModal = this.showModal.bind(this);
    this.showMemModal = this.showMemModal.bind(this);
    this.showNewsModal = this.showNewsModal.bind(this);
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

  // Show Modal
  showModal(event, index) {
    event.preventDefault();
    this.setState({
      // ...this.state,
      show: !this.state.show,
      currentIndex: index,
    });
  }

  showMemModal(event, index) {
    event.preventDefault();
    this.setState({
      // ...this.state,
      memShow: !this.state.memShow,
      currentIndex: index,
    });
  }

  showNewsModal(event, index, url) {
    event.preventDefault();
    this.setState({
      // ...this.state,
      newsShow: !this.state.newsShow,
      currentIndex: index,
      newsUrl: url,
    });
  }

  render () {
    return (
    <div>
      <Header />
      <Welcome />
      <ATEAM seededData={this.state.seededData} modal={this.showModal}/>
      <LatestNews seededData={this.state.seededData} modal={this.showNewsModal}/>
      <MemoryLane seededData={this.state.seededData} modal={this.showMemModal}/>
      {this.state.show &&
        <ATeamModal
          data={this.state.seededData}
          show={this.state.show}
          onClose={this.showModal}
          index={this.state.currentIndex}>
          </ATeamModal>}
      {this.state.newsShow &&
        <NewsModal
          data={this.state.seededData}
          show={this.state.newsShow}
          onClose={this.showNewsModal}
          index={this.state.currentIndex}
          url={this.state.newsUrl}>
          </NewsModal>}
      {this.state.memShow &&
        <MemLaneModal
          data={this.state.seededData}
          show={this.state.memShow}
          onClose={this.showMemModal}
          index={this.state.currentIndex}>
          </MemLaneModal>}
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));