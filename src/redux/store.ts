import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../localStorage/LocalStorage-utils";


const rootReducer = combineReducers({
    counter: counterReducer
})

const persistedState = loadState()

export const store = createStore(rootReducer, persistedState)


store.subscribe(()=>{
   saveState({
       counter: store.getState().counter
   })
})


export type AppRootStateType = ReturnType<typeof rootReducer>

