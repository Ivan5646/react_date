var myDate = new Date();
myDate = +(new Date(myDate ));

const inittialState = [
    {
        currentDate: myDate
    }
];

export default function(state=inittialState, action) {
    switch(action.type) {
        case "ADD_ITEM": // type of the action. 
        return [
            tate,
            action.payload
        ];
    }
    return state;
}