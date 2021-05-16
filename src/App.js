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
    id: 'tom-low',
    url: '/sounds/tom-high.wav'
  },
  {
    text: 'E',
    id: 'tom-low',
    url: '/sounds/tom-low.mp3'
  },
  {
    text: 'A',
    id: 'rimshot',
    url: '/sounds/rimshot.wav'
  },
  {
    text: 'S',
    id: 'ride',
    url: '/sounds/ride.mp3'
  },
  {
    text: 'D',
    id: 'crash',
    url: 'sounds/crash.mp3'
  },
  {
    text: 'Z',
    id: 'shaker',
    url: '/sounds/shaker.wav'
  },
  {
    text: 'X',
    id: 'bass',
    url: '/sounds/bass.wav'
  },
  {
    text: 'C',
    id: 'cowbell',
    url: '/sounds/cowbell.wav'
  }
]
const walkenMode = [
  {
    text: 'Q',
    id: 'cowbell1',
    url: '/sounds/cowbell.wav'
  },
  {
    text: 'W',
    id: 'cowbell2',
    url: '/sounds/cowbell.wav'
  },
  {
    text: 'E',
    id: 'cowbell3',
    url: '/sounds/cowbell.wav'
  },
  {
    text: 'A',
    id: 'cowbell4',
    url: '/sounds/cowbell.wav'
  },
  {
    text: 'S',
    id: 'cowbell5',
    url: '/sounds/cowbell.wav'
  },
  {
    text: 'D',
    id: 'cowbell6',
    url: '/sounds/cowbell.wav'
  },
  {
    text: 'Z',
    id: 'cowbell7',
    url: '/sounds/cowbell.wav'
  },
  {
    text: 'X',
    id: 'cowbell8',
    url: '/sounds/cowbell.wav'
  },
  {
    text: 'C',
    id: 'cowbell9',
    url: '/sounds/cowbell.wav'
  }
]

class DrumPad extends React.Component {

  handleClick = () => {
    this.audio.play();
    this.audio.currentTime = 0;
  }

  render() {
    return(
      <button 
        className="drum-pad" 
        id={this.props.id}
        onClick={this.handleClick}
      >
        <p>{this.props.text}</p>
        <audio 
          ref={ref => this.audio = ref}
          className="clip" 
          src={this.props.url} 
          id={this.props.text}>
        </audio>
      </button>
    )
  }
}



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drumset: drumkeys,
      moreCowbell: false
    };
  }

  render() {


    return ( 

      <div id="drum-machine">
        <div id="display">
          <h1>This'll be a drum set...</h1>
          {this.state.drumset.map(d => (
            <DrumPad
              id={d.id}
              text={d.text}
              url={d.url}
              onClick={this.handleClick}
            />
            ))}

          
        </div>
      </div>
    )
  }
} 