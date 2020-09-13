import React from 'react';

export default class Timer extends React.Component {

    state = {
        timer: 0,
        increment: false
    }

    handleOnClick = () => {
        if (this.state.increment === false) {
            // console.log("click", this.state)
            this.interval = setInterval(this.timerIncrement, 1000)
            this.setState({
                increment: true
            })
        } else {
            this.stopTimer()
            this.setState({
                increment: false
            })
        }
    }

    timerIncrement = () => {
        this.setState(prevState => ({
            timer: prevState.timer + 1
        }))
    }

    stopTimer = () => {
        clearInterval(this.interval);
    }
    
    render() {
        return (
            <div>
                <h2>TIMER</h2>
                {this.state.timer}
                <br /><br />
                <button type="submit" onClick={this.handleOnClick}>Timer</button>
            </div>
        )
    }
}