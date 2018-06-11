import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setDay, setMonth, setYear, resetDate} from '../actions/index';

class DateComp extends Component {

    constructor(props) {
        super(props);
    }

    showDay = () => {
        var date = new Date(this.props.myDate.dateComp.date);
        var convertedDate = ("0" + date.getDate()).slice(-2);
        // have to change day, dayshow in store
        if (this.props.myDate.dateComp.day === null) {
            this.props.setDay1(convertedDate);
        } else {
            this.props.setDay1(null);
        }
    }

    showMonth = () => {
        var date = new Date(this.props.myDate.dateComp.date);
        var convertedDate = ("0" + (date.getMonth() + 1)).slice(-2);
        if (this.props.myDate.dateComp.month === null) {
            this.props.setMonth1(convertedDate);
        } else {
            this.props.setMonth1(null);
        }
    }

    showYear = () => {
        var date = new Date(this.props.myDate.dateComp.date);
        var convertedDate =  date.getFullYear();
        if (this.props.myDate.dateComp.year === null) {
            this.props.setYear1(convertedDate);
        } else {
            this.props.setYear1(null);
        }
    }

    reset = () => {
        this.props.resetDate1();
    } 

    render() {
        return (
            <div className="date">
                <div className="date__buttons">
                    <button className={this.props.myDate.dateComp.day ? "red" : ""} onClick={this.showDay}>Day</button>
                    <button className={this.props.myDate.dateComp.month ? "red" : ""} onClick={this.showMonth}>Month</button>
                    <button className={this.props.myDate.dateComp.year ? "red" : ""} onClick={this.showYear}>Year</button>
                </div>
                <div className="date__show">
                    <span>{this.props.myDate.dateComp.day ? this.props.myDate.dateComp.day + "." : ""}</span>
                    <span>{this.props.myDate.dateComp.month ? this.props.myDate.dateComp.month + "." : ""}</span>
                    <span>{this.props.myDate.dateComp.year ? this.props.myDate.dateComp.year : ""}</span>
                </div>
                <button className="date__reset" onClick={this.reset}>Clear</button>
            </div>
        )
    }
}

function mapStateToProps(state){ //takes a piece of state which is part of the Store and sends it to the Component as props  
    return {
       myDate: state
    };
}

function matchDispathToProps(dispatch){
    return bindActionCreators({setDay1: setDay, setMonth1: setMonth, setYear1: setYear, resetDate1: resetDate}, dispatch)
}

export default connect(mapStateToProps, matchDispathToProps)(DateComp); // this is now a contanier