import React, { Component } from 'react';
import Moment from 'moment';

export default class Clock extends Component {
  constructor(props){
    super(props);

    this.state = {
      current_time: '',
    };
  }

  componentDidMount(){
    setInterval(() => this.setState({ current_time: Moment().format('LTS') }), 100);
  }
  render() {
    return (
      <div className="clock">
        <span>{this.state.current_time}</span>
      </div>
    );
  }
}
