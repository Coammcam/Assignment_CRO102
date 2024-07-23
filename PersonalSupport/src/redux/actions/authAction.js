import {createAsyncThunk} from '@reduxjs/toolkit';

const api_auth = 'http://10.0.2.2:3000/api';

export const login = createAsyncThunk(
  'auth/login',
  async ({email, password}, {rejectWithValue}) => {
    try {
      const res = await fetch(`${api_auth}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
      });

      const data = await res.json();

      if (res.ok) {
        return data.data;
      } else {
        return rejectWithValue(data.message || 'Login failed');
      }
    } catch (error) {
      return rejectWithValue({message: 'Network error'});
    }
  },
);

export const register = createAsyncThunk(
  'auth/register',
  async ({email, password, name, avatar}, {rejectWithValue}) => {
    try {
      const res = await fetch(`${api_auth}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password, name, avatar}),
      });

      const data = await res.json();
      if (res.ok) {
        return data;
      } else {
        return rejectWithValue(data);
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue({message: 'Network error'});
    }
  },
);
