import React, { Component } from 'react';

class StopWatch extends Component {

    state = {
        timer: null,
        counter: '00',
        miliseconds: '00',
        startDisabled: true,
        stopDisabled: false
    }

    constructor(props) {
        super(props);
        
        this.onPageLoad = this.onPageLoad.bind(this);
        this.onButtonStart = this.onButtonStart.bind(this);
        this.onButtonStop = this.onButtonStop.bind(this);
        this.onButtonReset = this.onButtonReset.bind(this);
        this.start = this.start.bind(this);
    }

    componentDidMount() {
        this.start();
    }


    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    start() {
        var self = this;
        let timer = setInterval(() => {
            var num = (Number(this.state.miliseconds) + 1).toString(),
                count = this.state.counter;

            if (Number(this.state.miliseconds) == 99) {
                count = (Number(this.state.counter) + 1).toString();
                num = '00';
            }

            self.setState({
                counter: count.length == 1 ? '0' + count : count,
                miliseconds: num.length == 1 ? '0' + num : num
            });
        }, 0);
        this.setState({ timer });
    }

    onPageLoad() {

        this.start();
        this.setState({ startDisabled: true, stopDisabled: false });
    }

    
    onButtonStart() {

        this.start();
        this.setState({ startDisabled: true, stopDisabled: false });
    }


    onButtonStop() {
        clearInterval(this.state.timer);
        this.setState({ startDisabled: false, stopDisabled: true });
    }


    onButtonReset() {
        this.setState({
            timer: null,
            counter: '00',
            miliseconds: '00'
        });
    }

    render() {
        return (
            <>
            <p>{this.state.counter ? this.state.counter : 'counter state is empty'}</p>
            <p>{this.state.miliseconds ? this.state.miliseconds : 'miliseconds state is empty'}</p>
            
            <button title="Start" disabled="disabled"></button>
            <button title="Stop" disabled="disabled"></button>
            <button title="Reset" disabled="disabled"></button>
            </>
        );
    }
}

export default StopWatch;