import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { retrieveState, persistState } from './persistence'


const storedState = retrieveState().favoriteCharacters;
const initialState: number[] = Array.isArray(storedState) ? storedState : [];

export const favoriteCharactersSlice = createSlice({

    name: 'favoriteCharacters',
    initialState,
    reducers: {
        addfavoriteCharacter: (state, { payload }: PayloadAction<number>) => {
            if (!state.includes(payload)) {
                state.push(payload);
            }
            persistState({ favoriteCharacters: state });
        },

        removefavoriteCharacter: (state, { payload }: PayloadAction<number>) => {
            const index = state.indexOf(payload);

            if (index !== -1) {
                state.splice(index, 1);
            }
            persistState({ favoriteCharacters: state });
        },

        toggleFavoriteCharacter: (state, { payload }: PayloadAction<number>) => {
            const index = state.indexOf(payload);

            if (index === -1) {
                state.push(payload)
            } else {
                state.splice(index, 1);
            }
            persistState({ favoriteCharacters: state });
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