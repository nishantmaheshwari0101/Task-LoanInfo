import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import loanService from "./loanService";


// const save = JSON.parse(localStorage.getItem("DATA"))

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    allLoans: [
        
    ],
    detail : [
        
    ]
    
}
    

const loanSlice = createSlice({
    name: "Loans",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getAllloans.pending, (state) => {
            state.isLoading = true
        })
            .addCase(getAllloans.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.allLoans = action.payload

            })
            .addCase(getAllloans.rejected, (state) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.allLoans = null
            })
            .addCase(createLoan.pending, (state) => {
                state.isLoading = true
            })
                .addCase(createLoan.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.allLoans = [action.payload , ...state.allLoans]
    
                })
                .addCase(createLoan.rejected, (state) => {
                    state.isLoading = false
                    state.isSuccess = false
                    state.isError = true
                    state.allLoans = null
                })
            .addCase(getDetails.pending, (state) => {
                state.isLoading = true
            })
                .addCase(getDetails.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.detail = action.payload
                    // localStorage.setItem("DATA",JSON.stringify(state.detail))
                })
                .addCase(getDetails.rejected, (state) => {
                    state.isLoading = false
                    state.isSuccess = false
                    state.isError = true
                    state.detail = null
                })
    },
})

export default loanSlice.reducer

export const getAllloans = createAsyncThunk("ALL_LOAN", async () => {
    try {
        return await loanService.getAllLons()
    } catch (error) {
        console.log(error);
    }
    
}) 

// export const createLoan = createAsyncThunk("CREATE_LOAN" , async(formData)=>{
//     // console.log(formData);
// // try {
// //     return await loanService.createLoanholder(formData)
// // } catch (error) {
// //     console.log(error);
// // }
// loanService.createLoanholder(formData)
// })

export const createLoan = createAsyncThunk("CREATE_LOAN", async(formData)=>{
    try {
        return await loanService.createLoanholder(formData)
    } catch (error) {
        console.log(error);
    }
//   await  loanService.createLoanholder(formData)
})

export const getDetails = createAsyncThunk("ALL_DETAIL" , async(id)=>{
    
  try {
    return await loanService.getDetail(id)
  } catch (error) {
    console.log(error);
  }
 
})

