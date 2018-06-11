var myDate = new Date();
myDate = +(new Date(myDate ));

const inittialState = {
        date: myDate,
        day: null,
        month: null,
        year: null
}

export default function(state=inittialState, action) {
    switch(action.type) {
        case "SET_DAY": // type of the action. 
        // need just overwrite corespondent values
        return Object.assign({}, state, {
            day: action.payload
        })
    }
    switch(action.type) {
        case "SET_MONTH": 
        return Object.assign({}, state, {
            month: action.payload
        })
    }
    switch(action.type) {
        case "SET_YEAR": 
        return Object.assign({}, state, {
            year: action.payload
        })
    }
    switch(action.type) {
        case "RESET_DATE": 
        return Object.assign({}, state, {
            day: null,
            month: null,
            year: null
        })
    }
    return state;
}