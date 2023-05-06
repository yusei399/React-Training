import { createSlice } from "@reduxjs/toolkit";

initialState = {
	clips : [],
}

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		addClip: (state, action) => {
			const newClip = action.payload;
			state.clips.push(newClip);
		},
		deleteClip: (state, action) => {
			const deletingClip = action.payload;
			const currentClips = state.clips;
			const filteredClips = currentClips.filter(clip => clip.url !== deletingClip.url);
			state.clips = filteredClips;
		},
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
	},
});

export const { addClip, deleteClip, increment, decrement, incrementByAmount } = userSlice.actions;
export default userSlice.reducer;