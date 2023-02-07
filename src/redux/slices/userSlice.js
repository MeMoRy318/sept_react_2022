import {createAsyncThunk, createSlice,current} from "@reduxjs/toolkit";
import {usersServices} from "../../services";


const initialState = {
    users:[],
    error:null,
    isLoading:null
};


const reducers = {
    getAll:(state, action)=> {
        state.users = action.payload
    }
};


const getAllusers = createAsyncThunk(
    'userSlice/getAll',
    async (_,{rejectWithValue,dispatch,getState})=>{

        try {
           const {data} = await usersServices.getAllUsers();
           return data;

        }catch (e) {
         return   rejectWithValue(e.response.data);
        }
    }
);


const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers,
    extraReducers:builder =>
        builder
            .addCase(getAllusers.fulfilled,(state, action)=>{
                console.log(current(state))
                state.users = action.payload
            })
            .addCase(getAllusers.pending,(state, action)=>{
                state.isLoading = true
            })
            .addCase(getAllusers.rejected,(state, action)=>{
                state.error = action.payload
            })
});


const {reducer:userReducer,actions:{getAll}} = userSlice;


const userAction = {
    getAll,
    getAllusers
};


export {userReducer,userAction};