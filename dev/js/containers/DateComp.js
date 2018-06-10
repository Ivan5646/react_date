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
        //var myObj = this.props.myDate;
        console.log(convertedDate);
        // this.setState({day: convertedDate});
        // this.setState(prevState => ({
        //     dayShow: !prevState.dayShow
        // }));

        // have to change day, dayshow in store
        this.props.setDay1(convertedDate, this.props.dayShow);

        // var date = new Date(this.state.date);
        // var convertedDate = ("0" + date.getDate()).slice(-2);
        // this.setState({day: convertedDate});
        // this.setState(prevState => ({
        //   dayShow: !prevState.dayShow
        // }));
        // return convertedDate;
    }

    showMonth = () => {
        var date = new Date(this.state.date);
        var convertedDate = ("0" + (date.getMonth() + 1)).slice(-2);
        this.setState({month: convertedDate});
        this.setState(prevState => ({
          monthShow: !prevState.monthShow
        }));        return convertedDate;
    }

    showYear = () => {
        var date = new Date(this.state.date);
        var convertedDate =  date.getFullYear();
        this.setState({year: convertedDate});
        this.setState(prevState => ({
          yearShow: !prevState.yearShow
        }));
        return convertedDate;
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
                    <button className={this.props.dayShow ? "red" : ""} onClick={this.showDay}>Day</button>
                    <button className={this.props.monthShow ? "red" : ""} onClick={this.showMonth}>Month</button>
                    <button className={this.props.yearShow ? "red" : ""} onClick={this.showYear}>Year</button>
                </div>
                <div className="date__show">
                    <span>{this.props.dayShow ? this.props.day + "." : ""}</span>
                    <span>{this.props.monthShow ? this.props.month + "." : ""}</span>
                    <span>{this.props.yearShow ? this.props.year : ""}</span>
                </div>
                <button onClick={this.reset}>Clear</button>
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

function matchDispathToProps(dispatch){
    return bindActionCreators({setDay1: setDay, setMonth1: setMonth, setYear1: setYear}, dispatch)
}

export default connect(mapStateToProps, matchDispathToProps)(DateComp); // this is now a contanier