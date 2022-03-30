import {CounterReducerStateType} from "../redux/store";

const LOCAL_STORAGE_COUNTER_KEY = 'counter-values'

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(LOCAL_STORAGE_COUNTER_KEY)
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}

export const saveState = (state: {counter: CounterReducerStateType}) => {  //????????????
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem(LOCAL_STORAGE_COUNTER_KEY, serializedState)
    } catch {

    }
}
