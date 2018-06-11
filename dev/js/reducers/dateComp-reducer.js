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

        // state.day = action.payload;
        // state.dayShow = !state.dateShow;
        // return state
    }
    switch(action.type) {
        case "SHOW_DAY": // type of the action. 
        return [
            tate,
            action.payload
        ];
    }
    return state;
}