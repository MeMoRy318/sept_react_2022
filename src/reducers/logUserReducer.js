const actionTypeUser = {

    LOGIN:'LOGIN',
    OUT:'OUT'
};

const actionUser = {

    LOGIN:()=>({type:actionTypeUser.LOGIN}),
    OUT:() =>({type: actionUser.LOGIN})
}

const loginInitValue = () => false;

const loginReducer = (state,action)=>{

    switch (state.type) {

        case actionTypeUser.LOGIN:
            return true

        case actionTypeUser.OUT:
            return false;

        default:
            return state;
    }

}
export {actionUser,loginReducer,loginInitValue};