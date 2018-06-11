var myDate = new Date();
myDate = +(new Date(myDate ));

const inittialState = {
        date: myDate,
        day: "",
        month: "",
        year: "",
        dayShow: false,
        monthShow: false,
        yearShow: false
}

export default function(state=inittialState, action) {
    switch(action.type) {
        case "SET_DAY": // type of the action. 
        // need just overwrite corespondent values
        return Object.assign({}, state, {
            day: action.payload,
            dayShow: !state.dayShow
        })
    }
    switch(action.type) {
        case "SET_MONTH": 
        return Object.assign({}, state, {
            month: action.payload,
            monthShow: !state.monthShow
        })
    }
    switch(action.type) {
        case "SET_YEAR": 
        return Object.assign({}, state, {
            year: action.payload,
            yearShow: !state.yearShow
        })
    }
    switch(action.type) {
        case "RESET_DATE": 
        return Object.assign({}, state, {
            day: "",
            month: "",
            year: "",
            dayShow: false,
            monthShow: false,
            yearShow: false
        })
    }
    return state;
}