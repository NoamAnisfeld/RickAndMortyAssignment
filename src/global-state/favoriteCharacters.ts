import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState: number[] = [];

export const favoriteCharactersSlice = createSlice({

    name: 'favoriteCharacters',
    initialState,
    reducers: {
        addfavoriteCharacter: (state, { payload }: PayloadAction<number>) => {
            if (!state.includes(payload)) {
                state.push(payload);
            }
        },

        removefavoriteCharacter: (state, { payload }: PayloadAction<number>) => {
            const index = state.indexOf(payload);

            if (index !== -1) {
                state.splice(index, 1);
            }
        },

        toggleFavoriteCharacter: (state, { payload }: PayloadAction<number>) => {
            const index = state.indexOf(payload);

            if (index === -1) {
                state.push(payload)
            } else {
                state.splice(index, 1);
            }
        },
    },
})


export const {
    addfavoriteCharacter,
    removefavoriteCharacter,
    toggleFavoriteCharacter,
} = favoriteCharactersSlice.actions;

const favoriteCharactersReducer = favoriteCharactersSlice.reducer;
export default favoriteCharactersReducer;