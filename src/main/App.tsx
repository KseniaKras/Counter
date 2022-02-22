import React, {useState} from 'react';
import './App.module.css';
import c from './App.module.css';
import {SetNewValues} from "../CounterSetValue/SetNewValues";
import {Counter} from "../Counter/Counter";


function App() {

    const [minValue, setMinValue] = useState<number>(2)
    const [maxValue, setMaxValue] = useState<number>(4)
    const [error, setError] = useState<boolean>(false)
    const [counterSettings, setCounterSettings] = useState<boolean>(false)
    const [newCounterValue, setNewCounterValue] = useState(minValue)

    const onClickSetNewValues = (min: number, max: number) => {
        setMinValue(min)
        setMaxValue(max)
        setNewCounterValue(min)
    }

    const showErrorInSetNewValues = (value: boolean) => {
        setError(value)
    }

    const showSetNewValuesSettings = (value: boolean) => {
        setCounterSettings(value)
    }

    return (
        <div className={c.App}>

            <div className={c.counterSetValue}>
                <SetNewValues
                    minValue={minValue}
                    maxValue={maxValue}
                    onClickSetValues={onClickSetNewValues}
                    error={error}
                    errorCallback={showErrorInSetNewValues}
                    showSetNewValuesSettings={showSetNewValuesSettings}
                />
            </div>

            <div className={c.counter}>
                <Counter
                    minValue={minValue}
                    maxValue={maxValue}
                    newCounterValue={newCounterValue}
                    error={error}
                    resultSettings={counterSettings}
                    setNewCounterValue={setNewCounterValue}
                />
            </div>

        </div>
    );
}

export default App;