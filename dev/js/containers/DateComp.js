import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setDay, setMonth, setYear} from '../actions/index';

class DateComp extends Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     date: this.props.myDate.dateComp[0].currentDate,
        //     day: "",
        //     month: "",
        //     year: "",
        //     dayShow: false,
        //     monthShow: false,
        //     yearShow: false
        // }
    }

    showDay = () => {
        var date = new Date(this.props.myDate.dateComp.date);
        var convertedDate = ("0" + date.getDate()).slice(-2);
        // have to change day, dayshow in store
        this.props.setDay1(convertedDate);
        console.log(this.props.myDate.dateComp.day, this.props.myDate.dateComp.dayShow);
    }

    showMonth = () => {
        var date = new Date(this.props.myDate.dateComp.date);
        var convertedDate = ("0" + (date.getMonth() + 1)).slice(-2);
        this.props.setMonth1(convertedDate);
        console.log(this.props.myDate.dateComp.month, this.props.myDate.dateComp.monthShow);
    }

    showYear = () => {
        var date = new Date(this.props.myDate.dateComp.date);
        var convertedDate =  date.getFullYear();
        this.props.setYear1(convertedDate);
        console.log(this.props.myDate.dateComp.month, this.props.myDate.dateComp.monthShow);
    }

    reset = () => {
        this.setState({
            dayShow: "",
            monthShow: "",
            yearShow: "",
        })
    } 

    render() {
        return (
            <div className="date">
                <div className="date__buttons">
                    <button className={this.props.myDate.dateComp.dayShow ? "red" : ""} onClick={this.showDay}>Day</button>
                    <button className={this.props.myDate.dateComp.monthShow ? "red" : ""} onClick={this.showMonth}>Month</button>
                    <button className={this.props.myDate.dateComp.yearShow ? "red" : ""} onClick={this.showYear}>Year</button>
                </div>
                <div className="date__show">
                    <span>{this.props.myDate.dateComp.dayShow ? this.props.myDate.dateComp.day + "." : ""}</span>
                    <span>{this.props.myDate.dateComp.monthShow ? this.props.myDate.dateComp.month + "." : ""}</span>
                    <span>{this.props.myDate.dateComp.yearShow ? this.props.myDate.dateComp.year : ""}</span>
                </div>
                <button onClick={this.reset}>Clear</button>
            </div>
        )
        debugger;
    }
}

function mapStateToProps(state){ //takes a piece of state which is part of the Store and sends it to the Component as props  state = {test: Array(1)}
    //debugger;
    return {
       myDate: state
    };
}

function matchDispathToProps(dispatch){
    return bindActionCreators({setDay1: setDay, setMonth1: setMonth, setYear1: setYear}, dispatch)
}

export default connect(mapStateToProps, matchDispathToProps)(DateComp); // this is now a contanier