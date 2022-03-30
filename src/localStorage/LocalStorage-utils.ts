import {AppRootStateType} from "../redux/store";

export const loadState = () => {
    try {
        debugger
        const serializedState = localStorage.getItem('counter-values')
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}

export const saveState = (state: AppRootStateType) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('counter-values', serializedState)
    } catch {

    }
}
