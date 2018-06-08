import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Date extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="date">
                <div className="date__buttons">
                    <button>Day</button>
                    <button>Month</button>
                    <button>Year</button>
                </div>
                <div className="date__show"></div>
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

export default connect(mapStateToProps)(Date); // this is now a contanier