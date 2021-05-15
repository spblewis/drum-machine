import React from 'react';
import './App.css';

const drumkeys = [
  {
    text: 'Q',
    id: 'snare',
    url: '/sounds/snare.wav' 
  },
  {
    text: 'W',
    id: '',
    url: ''
  },
  {
    text: 'E',
    id: '',
    url: ''
  },
  {
    text: 'A',
    id: '',
    url: ''
  },
  {
    text: 'S',
    id: '',
    url: ''
  },
  {
    text: 'D',
    id: '',
    url: ''
  },
  {
    text: 'Z',
    id: '',
    url: ''
  },
  {
    text: 'X',
    id: '',
    url: ''
  },
  {
    text: 'C',
    id: '',
    url: ''
  }
]



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drumset: drumkeys
    };
  }

  render() {
    const keys = this.state.drumset.map(x => 
                  <div className="drum-pad" id={x.id}>
                    <p>{x.text}</p>
                    <audio className="clip" src={x.url} id={x.text}></audio>
                  </div>);

    return ( 

      <div id="drum-machine">
        <div id="display">
          <h1>This'll be a drum set...</h1>
          <div>{keys}</div>
        </div>
      </div>
    )
  }
} 