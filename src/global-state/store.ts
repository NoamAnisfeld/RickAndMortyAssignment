import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import favoriteCharactersReducer from './favoriteCharacters'

const rootReducer = combineReducers({
  favoriteCharacters: favoriteCharactersReducer,
})

function setupStore() {
  return configureStore({
    reducer: rootReducer,
  })
}

export default setupStore
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
