import { createSlice } from "@reduxjs/toolkit"

export const themeSlice = createSlice({
    name: "themeSlice",
    initialState: {
        theme: {
            PalleteColor1: "#36454f",
            PalleteColor2: "#61707b",
            PalleteColor3: "#61707b",
            PalleteColor4: "#36454f",
        }
    },
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload
        }
    }
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer