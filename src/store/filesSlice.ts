import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { scanFilesFromAPI } from './../services/filesService';

export interface FileState {
  id: string;
  name: string;
  active: boolean;
}

export interface FilesState {
  files: FileState[];
  error: string | null;
}

const initialState: FilesState = {
  files: [],
  error: null,
};

export const scanFiles = createAsyncThunk<FileState[], void, { rejectValue: string }>(
  'files/scanFiles',
  async (_, { rejectWithValue }) => {
    try {
      return await scanFilesFromAPI();
    } catch (error) {
      return rejectWithValue('Failed to scan files');
    }
  }
);

const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(scanFiles.fulfilled, (state, action) => {
        state.files = action.payload;
        state.error = null;
      })
      .addCase(scanFiles.rejected, (state, action) => {
        state.error = action.payload || 'Unknown error';
      });
  },
});

export default filesSlice.reducer;
