import { createSlice } from "@reduxjs/toolkit"

export const themeSlice = createSlice({
    name: "themeSlice",
    initialState: {
        theme: null
    },
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload
        }
    }
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer