import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class DateComp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: this.props.myDate.test[0].currentDate,
            dateMode: "default",
            dateRender: "default",
            day: "default",
            month: "default",
            year: "default"

        }
    }

    displayDate = () => {
        var date = new Date(this.state.date);
        var convertedDate = ("0" + date.getDate()).slice(-2) + "." + ("0" + (date.getMonth() + 1)).slice(-2) + "." + date.getFullYear();
        return convertedDate;
    }

    showDay = () => {
        var date = new Date(this.state.date);
        var convertedDate = ("0" + date.getDate()).slice(-2);
        this.setState({dateMode: "day"});
        this.setState({day: convertedDate});
        return convertedDate;
    }

    showMonth = () => {
        var date = new Date(this.state.date);
        var convertedDate = ("0" + (date.getMonth() + 1)).slice(-2);
        this.setState({dateMode: "month"});
        this.setState({month: convertedDate});
        return convertedDate;
    }

    showYear = () => {
        var date = new Date(this.state.date);
        var convertedDate =  date.getFullYear();
        this.setState({dateMode: "year"});
        this.setState({year: convertedDate});
        return convertedDate;
    }

    render() {
        return (
            <div className="date">
                <div className="date__buttons">
                    <button onClick={this.showDay}>Day</button>
                    <button onClick={this.showMonth}>Month</button>
                    <button onClick={this.showYear}>Year</button>
                </div>
                <div className="date__show">
                    <span>{this.state.day}.</span>
                    <span>{this.state.month}.</span>
                    <span>{this.state.year}</span>
                    {
                        /*this.state.dateRender*/
                    }
                </div>
                <button>Clear</button>
            </div>
        )
    }
}

function mapStateToProps(state){ //takes a piece of state which is part of the Store and sends it to the Component as props  state = {test: Array(1)}
    //debugger;
    return {
       myDate: state
    };
}

// function matchDispathToProps(dispatch){
//     return bindActionCreators({onAddItem1: onAddItem}, dispatch)
// }

export default connect(mapStateToProps)(DateComp); // this is now a contanier