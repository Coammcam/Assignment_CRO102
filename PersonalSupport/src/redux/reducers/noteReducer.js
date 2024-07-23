import {createSlice} from '@reduxjs/toolkit';
import {addNote, fetchNotesByUser, updateNote} from '../actions/noteAction';

const noteSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchNotesByUser.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchNotesByUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.notes = action.payload;
      })
      .addCase(fetchNotesByUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload?.message || 'An error occurred';
      })
      .addCase(addNote.pending, state => {
        state.status = 'loading';
      })
      .addCase(addNote.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.notes.push(action.payload);
      })
      .addCase(addNote.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload?.message || 'An error occurred';
      })
      .addCase(updateNote.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(updateNote.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.notes.findIndex(
          note => note.date === action.payload.date,
        );
        if (index !== -1) {
          state.notes[index] = action.payload;
        }
      })
      .addCase(updateNote.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload?.message || 'An error occurred';
      });
  },
});

export default noteSlice.reducer;
