import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser.ts";

type UserSliceType = {
    users: IUser[];
};

const initialState: UserSliceType = {
    users: [],
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
        },
    },
});

export const { setUsers } = userSlice.actions;
export default userSlice.reducer;