import {AppRootStateType} from "../store";

    export const selectMinValue = (store: AppRootStateType): number => store.counter.minValue
    export const selectMaxValue = (store: AppRootStateType): number => store.counter.maxValue
    export const selectNewValue = (store: AppRootStateType): number => store.counter.newValue
    export const selectError = (store: AppRootStateType): boolean =>  store.settings.error
    export const selectCounterSettings = (store: AppRootStateType): boolean =>  store.settings.counterSettings


