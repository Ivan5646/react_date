import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class DateComp extends Component {

    constructor(props) {
        super(props);

        this.test = this.test.bind(this);
        //this.getDate = this.getDate.bind(this);

        this.state = {
            date: (new Date()).toLocaleString()
        }
    }

    // getDate = () => {
    //     var myDate = new Date();
    //     +(new Date(myDate ));
    // }

    test() {
        // var myDate = new Date();
        // myDate = myDate.toLocaleString();
        // return myDate;
    }

    render() {
        var testD = new Date();
        return (
            <div className="date">
                <div className="date__buttons">
                    <button>Day</button>
                    <button>Month</button>
                    <button>Year</button>
                </div>
                <div className="date__show">{this.state.date.toString()}</div>
                <button>Clear</button>
            </div>
        )
    }

}

function mapStateToProps(state){ //takes a piece of state which is part of the Store and sends it to the Component as props
    return {
       testState: state
    };
}

// function matchDispathToProps(dispatch){
//     return bindActionCreators({onAddItem1: onAddItem}, dispatch)
// }

export default connect(mapStateToProps)(DateComp); // this is now a contanier