import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fatchMovie, fetchMovieDetails, searchmovie } from "./filmeService";
import axios from "axios";

const filmeSlice = createSlice({
    name: "movies",
    initialState: {
        movie: [],
        filmDetail: [],
        searchfilm: [],
        darkMode : false,
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: ""
    },
    reducers: {
        toggleTheme: (state) => {
          state.darkMode = !state.darkMode;
        },
        setDarkMode: (state, action) => {
          state.darkMode = action.payload;
        },
      },


    extraReducers: (builder) => {
        builder.addCase(movieItems.pending, (state, action) => {
            state.isLoading = true
            state.isSuccess = false;
            state.isError = false;
        }).addCase(movieItems.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true;
            state.isError = false;
            state.movie = action.payload
        }).addCase(movieItems.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
        }).addCase(filmItem.pending, (state, action) => {
            state.isLoading = true
            state.isSuccess = false;
            state.isError = false;
        }).addCase(filmItem.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true;
            state.isError = false;
            state.filmDetail = action.payload
        }).addCase(filmItem.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
        }).addCase(search.pending, (state, action) => {
            state.isLoading = true
            state.isSuccess = false;
            state.isError = false;
        }).addCase(search.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true;
            state.isError = false;
            state.searchfilm = action.payload
        }).addCase(search.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
})

export const { toggleTheme, setDarkMode } = filmeSlice.actions
export default filmeSlice.reducer;


export const movieItems = createAsyncThunk("FETCH/MOVIE", async () => {
    try {
        return await fatchMovie()
    } catch (error) {
        console.log(error)
    }
})


export const filmItem = createAsyncThunk("FETCH/FILM", async (id) => {
    try {
        return await fetchMovieDetails(id)
    } catch (error) {
        console.log(error)
    }
})



export const search = createAsyncThunk("FETCH/SEARCH", async (query) => {
    try {
        return await searchmovie(query)
        // console.log(query)
        // const response = await axios.get(`https://freetestapi.com/api/v1/movies?search=${query}`)
        // console.log(response)
        // return response.data;
        // return await searchmovie(query)
        // const { movie } = getState().searchfilm;
        // const searchfilm = movie.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
        // return searchfilm
;
    } catch (error) {
        console.log(error)
    }
})

