import React, { Component } from "react";


class Timer extends Component{
    constructor(props){
        super(props)
        this.state = {
            seconds: 0,
            selectedData: [],
            isFetching: fasle
        }
    }

    componentDidMount() {
//        this.fetchFeed()
        this.timer = setInterval(this.tick.bind(this), 1000)
    }

 

    tick() {
        this.setState({seconds: this.state.seconds +1})
    }

    render() {
        return <h4>    {this.state.seconds} sec have been run </h4>
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }
}



export default Timer;
