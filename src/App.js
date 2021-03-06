import React from 'react';
import reactDom from 'react-dom';
import './App.css';

const drumkeys = [
  {
    keyCode: 81,
    text: 'Q',
    id: 'Snare',
    url: '/sounds/snare.wav' 
  },
  {
    keyCode: 87,
    text: 'W',
    id: 'Tom-high',
    url: '/sounds/tom-high.wav'
  },
  {
    keyCode: 69,
    text: 'E',
    id: 'Tom-low',
    url: '/sounds/tom-low.mp3'
  },
  {
    keyCode: 65,
    text: 'A',
    id: 'Rimshot',
    url: '/sounds/rimshot.wav'
  },
  {
    keyCode: 83,
    text: 'S',
    id: 'Ride',
    url: '/sounds/ride.mp3'
  },
  {
    keyCode: 68,
    text: 'D',
    id: 'Crash',
    url: 'sounds/crash.mp3'
  },
  {
    keyCode: 90,
    text: 'Z',
    id: 'Shaker',
    url: '/sounds/shaker.wav'
  },
  {
    keyCode: 88,
    text: 'X',
    id: 'bass',
    url: '/sounds/bass.wav'
  },
  {
    keyCode: 67,
    text: 'C',
    id: 'Cowbell',
    url: '/sounds/cowbell.wav'
  }
]

const walkenMode = [
  {
    keyCode: 81,
    text: 'Q',
    id: 'cowbell1',
    url: '/sounds/cowbell.wav'
  },
  {
    keyCode: 87,
    text: 'W',
    id: 'cowbell2',
    url: '/sounds/cowbell.wav'
  },
  {
    keyCode: 69,
    text: 'E',
    id: 'cowbell3',
    url: '/sounds/cowbell.wav'
  },
  {
    keyCode: 65,
    text: 'A',
    id: 'cowbell4',
    url: '/sounds/cowbell.wav'
  },
  {
    keyCode: 83,
    text: 'S',
    id: 'cowbell5',
    url: '/sounds/cowbell.wav'
  },
  {
    keyCode: 68,
    text: 'D',
    id: 'cowbell6',
    url: '/sounds/cowbell.wav'
  },
  {
    keyCode: 90,
    text: 'Z',
    id: 'cowbell7',
    url: '/sounds/cowbell.wav'
  },
  {
    keyCode: 88,
    text: 'X',
    id: 'cowbell8',
    url: '/sounds/cowbell.wav'
  },
  {
    keyCode: 67,
    text: 'C',
    id: 'cowbell9',
    url: '/sounds/cowbell.wav'
  }
]

const activeStyle = {
  backgroundColor: '#bc5100',
};


class DrumPad extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {},
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playSound = this.playSound.bind(this);
    this.activatePad = this.activatePad.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }


  playSound = () => {
    this.audio.play();
    this.audio.currentTime = 0;
  }

  activatePad = () => {
    this.playSound();
    this.props.changeDisplay(this.props.id);
    this.setState({
      style: activeStyle,
    })
    setTimeout(() => this.setState({style: {}}), 100);
  }

  handleClick = () => {
    this.activatePad();
  }

  handleKeyPress = (event) => {
    if (event.keyCode === this.props.keyCode) {
      this.activatePad();
    }
  }

  render() {
    return(
      <button 
        className="drum-pad" 
        id={this.props.id}
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
        style={this.state.style}
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
      moreCowbell: false,
      display: "Drum Machine"
    };
    this.changeDisplay = this.changeDisplay.bind(this);
    this.needMoreCowBell = this.needMoreCowBell.bind(this);
  }

  changeDisplay(text) {
    this.setState({
      display: text
    });
  }

  needMoreCowBell = () => {
    if (this.state.moreCowbell) {
      this.setState({
        moreCowbell: !this.state.moreCowbell,
        drumset: drumkeys
      })
    }
    else {
      this.setState({
        moreCowbell: !this.state.moreCowbell,
        drumset: walkenMode
      })
    }
  }

  render() {

    return ( 

      <div id="drum-machine">

        <div id="pad-grid">

          {this.state.drumset.map(d => (
            <DrumPad
              key={d.id}
              id={d.id}
              text={d.text}
              url={d.url}
              keyCode={d.keyCode}              
              onClick={this.handleClick}
              changeDisplay={this.changeDisplay}
            />
            ))}

        </div>

        <div id="control-panel">
          <div id="display-container">
            <h2 id="display">{this.state.display}</h2>
          </div>
          <button 
            id="cowbell"
            onClick={this.needMoreCowBell}
          >
            {this.state.moreCowbell?'Less ':'More '}Cowbell!
          </button>
        </div>
          
      </div>
    )
  }
} 