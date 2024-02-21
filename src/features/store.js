import { configureStore } from "@reduxjs/toolkit";
import loanReducer from "./loan/loanSlice"

const store = configureStore({
    reducer : {
     loan : loanReducer
    }
})

export default store