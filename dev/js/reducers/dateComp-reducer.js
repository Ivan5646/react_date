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
        state.day = action.payload;
        return state
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