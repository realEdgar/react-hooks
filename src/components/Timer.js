import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }
    tick() {
        this.setState( state => {
            if(this.state) {
                this.state = {
                    hours: state.hours,
                    minutes: state.minutes, 
                    seconds: state.seconds + 1
                };
            }
            if(this.state.seconds === 60) {
                this.state = {
                    hours: state.hours,
                    minutes: state.minutes + 1, 
                    seconds: state.seconds = 0
                };
            }
            if(this.state.minutes === 60) {
                this.state = {
                    hours: state.hours + 1,
                    minutes: state.minutes = 0, 
                    seconds: state.seconds = 0
                };
            }
            return this.state;
        });
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);        
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        return (
            <h1 > 
                <span>Timer:</span> 
                <p className="timer">
                    { this.state.hours } 
                    : { this.state.minutes } 
                    : { this.state.seconds }
                </p>
            </h1>
        ); 
    }
}

export default Timer;
