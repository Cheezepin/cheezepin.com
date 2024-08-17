import React, { Component } from 'react';
import ononokiImg from './ononokiplush.png'
import './ononoki.css'

class Ononoki extends Component {
    constructor(props) {
      super(props);
      this.state = {
        rot: 0,
        velocity: 0,
      };
    }

    handleSpin() {
      
    }

    componentDidMount() {
      this.interval = setInterval(() => {
        var vel = this.state.velocity;
        if (vel > 0) vel -= 0.0994987437;
        else if (vel < -0.02) {vel += 0.01}
        else {vel = 0;}
        this.setState({ 
          velocity: vel,
          rot: this.state.rot+this.state.velocity,
        })
      }, 5);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    spinOnonoki(el) {
      el.setState({
        velocity: 20,
      })
    }

    render() {
      const styles = {
        containerStyle: {
          transform: `rotate(${this.state.rot}deg`,
          cursor: "pointer",
        }
      };
      const { containerStyle } = styles;

      return (
          <>
                <img style={containerStyle} id="ononoki" class="ononoki" src={ononokiImg} onClick={() => this.spinOnonoki(this)}></img>
          </>
      );
    }
};

export default Ononoki;