import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: 0,
            minutes: 15,
            seconds: 0
        }
    }
    tick() {
        this.setState( state => {
            if(this.state) {
                this.state = {
                    hours: state.hours,
                    minutes: state.minutes, 
                    seconds: state.seconds - 1
                };
            }
            if(this.state.seconds === -1) {
                this.state = {
                    hours: state.hours,
                    minutes: state.minutes - 1, 
                    seconds: state.seconds = 59
                };
            }
            if(this.state.minutes === -1) {
                this.state = {
                    hours: state.hours = 0,
                    minutes: state.minutes = 0, 
                    seconds: state.seconds = 0
                };
            }
            return this.state;
        });
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 10);        
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return <h1> Timer: { this.state.hours } : { this.state.minutes } : { this.state.seconds } </h1>
    }
}

export default Timer;