import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carServices} from "../../services";


const initialState = {
    cars:[],
    isLoading:false,
    error:false
};


const getCars = createAsyncThunk(
    'getCars',
    async (_,thunkAPI)=>{
        try {
            const {data} = await carServices.getAllCars();
            return data;
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);


const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{},
    extraReducers:builder =>
        builder
            .addCase(getCars.fulfilled,(state, action) => {
                state.cars = action.payload;
            })
            .addDefaultCase((state, action) => {

            })
});


const {reducer:carReducer} = carSlice;


const carAction ={
getCars
};

export {carReducer,carAction};