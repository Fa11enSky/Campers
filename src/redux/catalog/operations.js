import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL =
  "https://65fa44ea3909a9a65b1a17dd.mockapi.io/api/v1/";

export const getAllCampers = createAsyncThunk(
  "campers/all",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("campers");
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const getOneCamper = createAsyncThunk(
  "campers/one",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.get(`campers/${credentials}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
