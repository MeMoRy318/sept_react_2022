import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carServices} from "../../services";


const initialState = {
    cars:[],
    isLoading:false,
    error:false,
    setValueCars:false,
    pagesCount:1,
    currentPage:1
};


const getCars = createAsyncThunk(
    'carSlice/getCars',
    async ({page},thunkAPI)=>{
        try {
            const {data} = await carServices.getAllCars(page);
            return data;
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);


const carCreate = createAsyncThunk(
  'carSlice/carCreate',
  async ({data},thunkAPI)=>{
      try {
          const {data:data_} = await carServices.createCars(data);
          return data_;
      }catch (e) {
          return thunkAPI.rejectWithValue(e.response.data);
      }
  }
);


const carUpdate = createAsyncThunk(
    'carSlice/carUpdate',
    async ({id,data},thunkAPI)=>{
        try {
            const {data:data_} = await carServices.updateCars(id,data);
            return data_;
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);


const carDelete = createAsyncThunk(
    'carSlice/carDelete',
    async ({id},thunkAPI)=>{
        try {
            await carServices.deleteCars(id);
            return id;
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)


const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{
        setValueCar:(state, action)=>{
            state.setValueCars = action.payload;
        }
    },
    extraReducers:builder =>
        builder
            .addCase(getCars.fulfilled,(state, action)=>{
                const {items,total_pages,next:{page}} = action.payload;
                state.cars = items;
                state.pagesCount = total_pages;
                state.currentPage = +page -1;
            })
            .addCase(carCreate.fulfilled,(state, action)=>{
                state.cars.push(action.payload);
            })
            .addCase(carUpdate.fulfilled,(state, action)=>{
                state.setValueCar = false;
                const index = state.cars.findIndex(value => value.id === action.payload.id);
                state.cars.splice(index,1,action.payload);
                state.setValueCars = false;
            })
            .addCase(carDelete.fulfilled,(state, action)=>{
                const index = state.cars.findIndex(value => value.id === action.payload);
                state.cars.splice(index,1);
            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').splice(-1);
                state.isLoading = type === 'pending';
                state.error = type === 'rejected';
            })
});


const {reducer:carReducer,actions:{setValueCar}} = carSlice;
const carAction = {getCars,carCreate,carDelete,carUpdate,setValueCar};


export {carReducer,carAction};