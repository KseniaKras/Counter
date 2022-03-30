import {combineReducers, createStore} from "redux";
import {counterReducer} from "./reducers/counter-reducer";
import {loadState, saveState} from "../localStorage/LocalStorage-utils";
import {settingsReducer} from "./reducers/settings-reducer";


const rootReducer = combineReducers({
    counter: counterReducer,
    settings: settingsReducer
})

const persistedState = loadState()

export const store = createStore(rootReducer, persistedState)


store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})


export type AppRootStateType = ReturnType<typeof rootReducer>

export type CounterReducerStateType = ReturnType<typeof counterReducer> // ????????

