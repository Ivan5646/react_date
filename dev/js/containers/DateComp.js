import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class DateComp extends Component {

    constructor(props) {
        super(props);

        var myDate = new Date();

        this.state = {
            date: +(new Date(myDate ))
        }
    }

    displayDate = () => {
        var date = new Date(this.state.date);
        return date.toString();
    }

    render() {
        return (
            <div className="date">
                <div className="date__buttons">
                    <button>Day</button>
                    <button>Month</button>
                    <button>Year</button>
                </div>
                <div className="date__show">{this.props.myDate.test[0].currentDate}</div>
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