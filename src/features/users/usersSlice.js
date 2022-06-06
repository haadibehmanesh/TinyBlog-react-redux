import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '0', name: 'Hadi Behmanesh' },
    { id: '1', name: 'Reza Dashti' },
    { id: '2', name: 'Ali Rezaei' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export default usersSlice.reducer