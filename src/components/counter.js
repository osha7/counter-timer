import React from 'react';

export default class Counter extends React.Component {

    state = {
        count: 0
    }

    // onChange = () => {
    //     // e.preventDefault()
    //     console.log("onChange", this.state)
    //     const newState = this.state.count + 1
    //     // debugger
    //     this.setState({
    //         count: newState
    //     })
    // }

    onChange = () => {
        console.log("onChange", this.state)
        this.setState( prevState => ({
            count: prevState.count + 1
        }))
    }

    render () {
        return (
            <div>
                <h2>Counter</h2>
                {this.state.count} 
                <br /><br />
                <input name="submit" type="submit" value="Add 1" onClick={this.onChange} />
            </div>
        )
    }
}