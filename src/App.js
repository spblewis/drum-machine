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



class DrumPad extends React.Component {
  render() {
    return(
      <div className="drum-pad" id={this.props.id}>
        <p>{this.props.text}</p>
        <audio 
          className="clip" 
          src={this.props.url} 
          id={this.props.id}>
        </audio>
      </div>
    )
  }
}



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drumset: drumkeys
    };
  }

  render() {


    return ( 

      <div id="drum-machine">
        <div id="display">
          <h1>This'll be a drum set...</h1>
          {drumkeys.map(d => (
            <DrumPad
              id={d.id}
              text={d.text}
              url={d.url}
            />
            ))}

          
        </div>
      </div>
    )
  }
} 