import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carServices} from "../../services";


const initialState = {
    cars:[],
    valueForm:false,
    isLoading:false,
    error:false
};


//===============================================createAsyncThunk(getCars)===============================================================================================================
const getCars = createAsyncThunk(


    'carSlice/getCars',
    async (_,thunkAPI)=>{


        try {
            const {data} = await carServices.getAllCars();
            return data;
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);
//===============================================createAsyncThunk(carCreate)============================================================================================================
const carCreate = createAsyncThunk(
    'carSlice/carCreate',
    async ({data}, thunkAPI)=>{
        try {
          const {data:data_} = await carServices.createCar(data)
            return data_;
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);
//===========================================================================================================================================================
const upCar = createAsyncThunk(
    'carSlice/upCar',
    async ({data,id},thunkAPI)=>{
        try {
            const {data:data_} = await carServices.updateCar(id,data);
            return data_;
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);


const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{
        setUpCar:(state, action)=>{
            state.valueForm = action.payload;

        }
    },
    extraReducers:builder =>
        builder
            .addCase(getCars.fulfilled,(state, action) => {
                state.error = false;
                state.isLoading = false;
                state.cars = action.payload;
            })
            .addCase(getCars.pending,(state) => {
                state.isLoading = true;
            })
            .addCase(getCars.rejected,(state, action) => {
                state.error = true;
            })
            .addCase(carCreate.fulfilled,(state, action) => {
                state.cars.push(action.payload);

            })
            .addCase(upCar.fulfilled,(state, action) => {
                state.valueForm = false;
                const index = state.cars.findIndex(value => value.id === action.payload.id)
                state.cars.splice(index,1,action.payload);
            })

});


const {reducer:carReducer,actions:{setUpCar}} = carSlice;


const carActions = {
    getCars,
    carCreate,
    upCar,
    setUpCar
};


export {carReducer,carActions}