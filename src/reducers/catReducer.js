

const actionTypeCat = {

    ADD:'ADD',
    DELETE_BY_ID:'DELETE_BY_ID'
};
const actionCat = {
    ADD:(item)=> ({type:actionTypeCat.ADD,payload:item}),
    DELETE_BY_ID:(id)=>({type:actionTypeCat.DELETE_BY_ID,payload:id})
}

const catInitValue = () => [];

const catReducer = (state,action)=>{

    switch (action.type) {

        case actionTypeCat.ADD:
            return [...state,{...action.payload,id:state.length + 1}];

        case actionTypeCat.DELETE_BY_ID:
            const index = state.findIndex(value => value.id ===action.payload);
            state.splice(index,1);
            return [...state];

        default:
            return [...state]
    }
}
export {actionCat,catInitValue,catReducer}
