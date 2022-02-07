import React, {useState} from 'react';
import './App.module.css';
import {Counter} from "../Counter/Counter";
import c from './App.module.css';
import {SetNewValues} from "../CounterSetValue/SetNewValues";


function App() {
    const [minValue, setMinValue] = useState<number>(2)
    const [maxValue, setMaxValue] = useState<number>(4)
    const [error, setError] = useState<boolean | string>(false)

    //const showErrorMessage = () => {}

    const onClickSetNewValues = (min: number, max: number) => {
        //debugger;
        setMinValue(min)
        setMaxValue(max)
    }

    const showErrorInSetNewValues = (value: boolean) => {
        setError(value)
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
                    //showErrorInCounter={showErrorInCounter}
                    //error={error}
                    // onClickSetValuesMax={onClickSetValues}
                />

            </div>
            <div className={c.counter}>

                <Counter
                    minValue={minValue}
                    maxValue={maxValue}
                    error={error}
                    //showErrorMessage={showErrorMessage}
                />

            </div>

        </div>
    );
}

export default App;