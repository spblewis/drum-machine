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
          id={this.props.id}>
        </audio>
      </button>
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
              onClick={this.handleClick}
            />
            ))}

          
        </div>
      </div>
    )
  }
} 