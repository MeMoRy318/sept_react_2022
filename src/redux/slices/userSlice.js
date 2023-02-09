import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userServices} from "../../services";


const initialState = {
  users: [],
    user:null,
  isLoading:false,
  error:false
};


//==================================================================createAsyncThunk(getUsers)=====================================================================================================
const getUsers = createAsyncThunk(


  'userSlice/getUsers',
  async (_, thunkAPI) =>   {


  try {
      const {data} = await userServices.getAllUsers();
      return data;
  }catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
  }}
);
//==================================================================createAsyncThunk(getUsers)=============================================================================================================
const getUser = createAsyncThunk(


    'userSlice/getUser',
    async ({id},thunkAPI)=>{


        try {
            const {data} = await userServices.detUserById(id);
            return data;
        }catch (e) {
        return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);
//==================================================================================================================================================================================================


const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{},
    extraReducers:builder =>
        builder
            .addCase(getUsers.fulfilled,(state, action) => {
                state.isLoading = false;
                state.users = action.payload.map(user => ({
                    id:user?.id,
                    name:user?.name,
                    username:user?.username,
                    email:user?.email,
                    street:user?.address?.street,
                    city:user?.address?.city,
                    address_home:user?.address?.['suite'],
                    phone:user?.phone,
                    website:user?.website,
                    company:user?.company?.name
                }))
            })
            .addCase(getUsers.pending,(state) => {
                state.isLoading = true;
            })
            .addCase(getUsers.rejected,(state,action) => {
                state.error = action.payload;
            })
            .addCase(getUser.fulfilled,(state, action) => {
                state.isLoading = false;
                state.error = false;
                state.user = action.payload;
            })
            .addCase(getUser.pending,(state) => {
                state.isLoading = true;

            })
            .addCase(getUser.rejected,(state) => {
                state.error = true;

            })
});

const {reducer:userReducer} = userSlice;


const userAction = {
    getUsers,
    getUser
};


export {userReducer,userAction};