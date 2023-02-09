import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carServices} from "../../services";


const initialState = {
    cars:[],
    carValue:false,
    isLoading:false,
    error:false
};


const getCars = createAsyncThunk(
    'carSlice/getCars',
    async (_,thunkAPI)=>{
        try {
            const {data} = await carServices.getAllCars();
            return data;
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);


const carCreate = createAsyncThunk(
    'carSlice/carCreate',
    async ({data},thunkAPI)=>{
        try {
            await carServices.createCars(data)
            thunkAPI.dispatch(getCars())
        }catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
);


const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, thunkAPI)=>{
        try {
            await carServices.deleteCar(id);
            thunkAPI.dispatch(getCars())
        }catch (e) {
         return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);


const upCar = createAsyncThunk(
    'carSlice/upCar',
    async ({id,data}, thunkAPI)=>{
        try {
            await carServices.updateCar(id,data);
            thunkAPI.dispatch(getCars());
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);


const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{
        setCarValue:(state, action)=>{
            state.carValue = action.payload;
        }
    },
    extraReducers:builder =>
        builder
            .addCase(getCars.fulfilled,(state, action) => {
                state.error = false;
                state.isLoading = false;
                state.cars = action.payload;
            })
            .addCase(upCar.fulfilled,(state)=>{
                state.carValue = false;
            })
            .addDefaultCase((state, action) => {
                const type = action.type.split('/').splice(-1)[0];
                state.isLoading = type === 'pending';
                state.error = type === 'rejected';
            })
});


const {reducer:carReducer,actions:{setCarValue}} = carSlice;


const carAction ={
    getCars,
    carCreate,
    deleteCar,
    upCar,
    setCarValue
};

export {carReducer,carAction};