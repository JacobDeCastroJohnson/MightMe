import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Header from './components/Header.jsx';
import Welcome from './components/Welcome.jsx';
import List from './components/List.jsx';
import ATEAM from './components/ATeam.jsx';
import MemoryLane from './components/MemoryLane.jsx';
import LatestNews from './components/LatestNews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (
    <div>
      <Header />
      <Welcome />
      {/* <List items={this.state.items}/> */}
      <ATEAM />
      <MemoryLane />
      <LatestNews />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));