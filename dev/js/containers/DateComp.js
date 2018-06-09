import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class DateComp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: this.props.myDate.test[0].currentDate,
            day: "default",
            month: "default",
            year: "default",
            dayShow: false,
            monthShow: false,
            yearShow: false
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
        this.setState({day: convertedDate});
        this.setState(prevState => ({
          dayShow: !prevState.dayShow
        }));
        console.log(this.state.dayShow);
        return convertedDate;
    }

    showMonth = () => {
        var date = new Date(this.state.date);
        var convertedDate = ("0" + (date.getMonth() + 1)).slice(-2);
        this.setState({month: convertedDate});
        this.setState(prevState => ({
          monthShow: !prevState.monthShow
        }));
        console.log(this.state.monthShow);
        return convertedDate;
    }

    showYear = () => {
        var date = new Date(this.state.date);
        var convertedDate =  date.getFullYear();
        this.setState({year: convertedDate});
        this.setState(prevState => ({
          yearShow: !prevState.yearShow
        }));
        console.log(this.state.yearShow);
        return convertedDate;
    }

    render() {
        return (
            <div className="date">
                <div className="date__buttons">
                    <button className={this.state.dayShow ? "red" : ""} onClick={this.showDay}>Day</button>
                    <button className={this.state.monthShow ? "red" : ""} onClick={this.showMonth}>Month</button>
                    <button className={this.state.yearShow ? "red" : ""} onClick={this.showYear}>Year</button>
                </div>
                <div className="date__show">
                    <span>{this.state.dayShow ? this.state.day + "." : ""}</span>
                    <span>{this.state.monthShow ? this.state.month + "." : ""}</span>
                    <span>{this.state.yearShow ? this.state.year : ""}</span>
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