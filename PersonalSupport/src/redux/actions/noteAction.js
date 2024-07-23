import {createAsyncThunk} from '@reduxjs/toolkit';

const api_note = 'http://10.0.2.2:3000/api';

// Fetch notes by userId
export const fetchNotesByUser = createAsyncThunk(
  'note/fetchNotesByUser',
  async (userId, {rejectWithValue}) => {
    try {
      const response = await fetch(`${api_note}/get-notes-by-user/${userId}`);
      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message || 'Failed to fetch notes');
      }
      const data = await response.json();
      return data.notes;
    } catch (error) {
      return rejectWithValue(error.message || 'Network error');
    }
  },
);

// Add a note
export const addNote = createAsyncThunk(
  'notes/addNote',
  async (note, {rejectWithValue}) => {
    try {
      const response = await fetch(`${api_note}/add-note`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      });
      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message || 'Failed to add note');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Network error');
    }
  },
);

// Update a note
export const updateNote = createAsyncThunk(
  'notes/updateNote',
  async (note, {rejectWithValue}) => {
    try {
      const response = await fetch(`${api_note}/update-note/${note.date}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      });
      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message || 'Failed to update note');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Network error');
    }
  },
);
