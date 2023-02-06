const actionTypeUser = {
    LOGIN:'LOGIN',
    OUT:'OUT'
};


const actionUser = {
    LOGIN:(item)=>({type:actionTypeUser.LOGIN,payload:{item}}),
    OUT:() =>({type: actionTypeUser.OUT})
};


const loginInitValue = () => [];


const loginReducer = (state,action)=>{

    switch (action.type) {

        case actionTypeUser.LOGIN:
            return [...state,action.payload]

        case actionTypeUser.OUT:
            return [];

        default:
            return state;
    }

}

export {actionUser,loginReducer,loginInitValue};