const userActionType = {

    ADD:'ADD',
    USER_DELETE_BY_ID:'USER_DELETE_BY_ID'
};

const userAction = {

    ADD:(item)=>({type:userActionType.ADD,payload:item}),
    USER_DELETE_BY_ID:(id)=>({type:userActionType.USER_DELETE_BY_ID,payload: id})

};

const initial = () =>[];

const myUserReducer = (state,action)=>{

    switch (action.type) {

        case userActionType.ADD:
            return [...state,{...action.payload,id:state.length+=1}]

        case userActionType.USER_DELETE_BY_ID:
            const index = state.findIndex(value => value.id === action.payload);
            state.splice(index,1);
            return [...state];
    }

}

export {userAction,myUserReducer,initial}