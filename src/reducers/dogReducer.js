const actionTypeDog ={
    ADD:'ADD',
    DELETE_BY_ID:'DELETE_BY_ID'
};


const actionDog = {
    ADD:(item)=>({type:actionTypeDog.ADD,payload:item}),
    DELETE_BY_ID:(id)=>({type:actionTypeDog.DELETE_BY_ID,payload:id})
};


const dogInitValue = () => [];


const dogReducer = (state,action)=>{

    switch (action.type) {

        case actionTypeDog.ADD:
            return [...state,{...action.payload,id:state.length + 1}];

        case actionTypeDog.DELETE_BY_ID:
            const index = state.findIndex(value => value.id === action.payload);
            state.splice(index,1);
            return [...state];

        default:
            return [...state];
    }
}

export {actionDog,dogInitValue,dogReducer};