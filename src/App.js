import React from 'react';
import './App.css';

const drumkeys = [
  {
    text: 'Q'
  },
  {
    text: 'W'
  },
  {
    text: 'E'
  },
  {
    text: 'A'
  },
  {
    text: 'S'
  },
  {
    text: 'D'
  },
  {
    text: 'Z'
  },
  {
    text: 'X'
  },
  {
    text: 'C'
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
                  <div className="drum-pad">{x.text}</div>);

    return ( 

      <div id="drum-machine">

        <h1>This'll be a drum set...</h1>
        <div>{keys}</div>
      </div>
    )
  }
} 