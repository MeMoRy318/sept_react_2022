import React, {useReducer} from 'react';

const App = () => {

    const initValue = () => (

        {count:0}
    );

    const reducer = (state,action) => {

        switch (action.type) {
            case 'INC':
                return {...state,count: state.count += 1}
            case 'DEC':
                return {...state,count:state.count -= 1}
            case 'RES':
                return {...state,count:state.count = 0}
            default:
                return {...state}
        }

    };

     const [state,dispatch] = useReducer(reducer,null,initValue);

    return (
        <div>
            <div>{state.count}</div>
            <button onClick={()=>dispatch({type:'INC'})}>INCREMENT</button>
            <button onClick={()=>dispatch({type:'DEC'})}>DECREMENT</button>
            <button onClick={()=>dispatch({type:'RES'})}>RESET</button>
        </div>
    );
};

export default App;