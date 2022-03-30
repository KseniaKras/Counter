const INCREMENT_COUNTER_VALUE = 'INCREMENT-COUNTER-VALUE'
const RESET_COUNTER_VALUE = 'RESET-COUNTER-VALUE'
const SET_NEW_MIN_COUNTER_VALUE = 'SET-NEW-MIN-COUNTER-VALUE'
const SET_NEW_MAX_COUNTER_VALUE = 'SET-NEW-MAX-COUNTER-VALUE'
const SET_ERROR = 'SET-ERROR'
const SET_COUNTER_SETTINGS = 'SET-COUNTER-SETTINGS'

type ActionsType = ReturnType<typeof incCounterValue> | ReturnType<typeof resetCounterValue>
    | ReturnType<typeof setNewMinCounterValue> | ReturnType<typeof setNewMaxCounterValue>
    | ReturnType<typeof setError> | ReturnType<typeof setCounterSettings>

export type initialStateType = {
    minValue: number
    maxValue: number
    newValue: number
    error: boolean
    counterSettings: boolean
}

let initialState: initialStateType = {
    minValue: 2,
    maxValue: 5,
    newValue: 2,
    error: false,
    counterSettings: false,
}

export const counterReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case INCREMENT_COUNTER_VALUE:
            return {
                ...state,
                newValue: state.newValue + 1
            }
        case RESET_COUNTER_VALUE:
            return {
                ...state,
                newValue: state.minValue
            }
        case SET_NEW_MIN_COUNTER_VALUE:
            return {
                ...state,
                minValue: action.minValue,
                newValue: action.minValue
            }
        case SET_NEW_MAX_COUNTER_VALUE:
            return {
                ...state,
                maxValue: action.maxValue,
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.error
            }
        case SET_COUNTER_SETTINGS:
            return {
                ...state,
                counterSettings: action.counterSettings
            }

        default:
            return state
    }
}

export const incCounterValue = () => ({type: INCREMENT_COUNTER_VALUE} as const)
export const resetCounterValue = () => ({type: RESET_COUNTER_VALUE} as const)
export const setNewMinCounterValue = (minValue: number) =>
    ({type: SET_NEW_MIN_COUNTER_VALUE, minValue} as const)
export const setNewMaxCounterValue = (maxValue: number) =>
    ({type: SET_NEW_MAX_COUNTER_VALUE, maxValue} as const)
export const setError = (error: boolean) => ({type: SET_ERROR, error} as const)
export const setCounterSettings = (counterSettings: boolean) =>
    ({type: SET_COUNTER_SETTINGS, counterSettings} as const)

// export const getValuesFromLocalStorage = (minValue:number, maxValue:number) =>
//     ({type: GET_VALUE_FROM_LS, minValue, maxValue} as const)
