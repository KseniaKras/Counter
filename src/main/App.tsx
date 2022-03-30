import React, {useCallback} from 'react';
import './App.module.css';
import c from './App.module.css';
import {SetNewValues} from "../CounterSetValue/SetNewValues";
import {Counter} from "../Counter/Counter";
import {useDispatch, useSelector} from "react-redux";
import {
    selectCounterSettings,
    selectError,
    selectMaxValue,
    selectMinValue,
    selectNewValue
} from "../redux/selectors/selectors";
import {setCounterSettings, setError} from "../redux/reducers/settings-reducer";
import {AppRootStateType} from "../redux/store";


function App() {

    const dispatch = useDispatch()
    const { minValue, maxValue, newValue } = useSelector((state: AppRootStateType) => state.counter)
    const error = useSelector(selectError)
    const counterSettings = useSelector(selectCounterSettings)

    const showErrorInSetNewValues = useCallback((value: boolean) => {
        dispatch(setError(value))
    }, [dispatch])

    const showValuesSettings = useCallback((value: boolean) => {
        dispatch(setCounterSettings(value))
    }, [dispatch])


    return (
        <div className={c.App}>
            <div className={c.counterSetValue}>
                <SetNewValues
                    minValue={minValue}
                    maxValue={maxValue}
                    error={error}
                    errorCallback={showErrorInSetNewValues}
                    showSetNewValuesSettings={showValuesSettings}
                />
            </div>
            <div className={c.counter}>
                <Counter
                    newValue={newValue}
                    maxValue={maxValue}
                    error={error}
                    counterSettings={counterSettings}
                />
            </div>
        </div>
    );
}

export default App;