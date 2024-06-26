import React, {Component} from "react";

export default class Discussion extends Component {
    constructor () {
        super();

        this.state = {
            pageTitle: "Discussion",
            currentTime: String(new Date())
        };
    }

    componentDidMount () {
        this.liveTime = setInterval (() => {
            this.setState({currentTime : String(new Date())})
        }, 1000); 
    }
    
    componentWillUnmount () {
        clearInterval(this.liveTime);
    }

    render () {
        const {pageTitle, currentTime} = this.state //Esto nos permite acceder a los estados sin tener que poner la declaración 'this.state' cada vez
        return (
            <div>
                <h1>{pageTitle}</h1>

                <div>{currentTime}</div>
            </div>
        );
    };
};