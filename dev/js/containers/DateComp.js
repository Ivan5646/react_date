import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class DateComp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: this.props.myDate.test[0].currentDate,
            dateMode: "default"
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
        console.log(convertedDate + " " + this.state.dateMode);
        return convertedDate;
    }

    showMonth = () => {
        var date = new Date(this.state.date);
        var convertedDate = ("0" + (date.getMonth() + 1)).slice(-2);
        this.setState({dateMode: "month"});
        console.log(convertedDate + " " + this.state.dateMode);
        return convertedDate;
    }

    showYear = () => {
        var date = new Date(this.state.date);
        var convertedDate =  date.getFullYear();
        this.setState({dateMode: "year"});
        console.log(convertedDate + " " + this.state.dateMode);
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
                    {
                        this.state.dateMode
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