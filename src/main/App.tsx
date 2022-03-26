import React, {useCallback} from 'react';
import './App.module.css';
import c from './App.module.css';
import {SetNewValues} from "../CounterSetValue/SetNewValues";
import {Counter} from "../Counter/Counter";
import {useDispatch, useSelector} from "react-redux";
import {setCounterSettings, setError} from "../redux/counter-reducer";
import {
    selectCounterSettings,
    selectError,
    selectMaxValue,
    selectMinValue,
    selectNewValue
} from "../redux/selectors/selectors";


function App() {

    const dispatch = useDispatch()
    const minValue = useSelector(selectMinValue)
    const maxValue = useSelector(selectMaxValue)
    const newValue = useSelector(selectNewValue)
    const error = useSelector(selectError)
    const counterSettings = useSelector(selectCounterSettings)

    const showErrorInSetNewValues = useCallback((value: boolean) => {
        dispatch(setError(value))
    }, [dispatch])

    const showSetNewValuesSettings = useCallback((value: boolean) => {
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
                    showSetNewValuesSettings={showSetNewValuesSettings}
                />
            </div>
            <div className={c.counter}>
                <Counter
                    newValue={newValue}
                    maxValue={maxValue}
                    error={error}
                    resultSettings={counterSettings}
                />
            </div>
        </div>
    );
}

export default App;