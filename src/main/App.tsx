import React, {ChangeEvent, useState} from 'react';
import './App.module.css';
import {Counter} from "../Counter/Counter";
import c from './App.module.css';
import {MinMax} from "../CounterSetValue/MinMax";
import {Button} from "../Button/Button";

function App() {
    // let minValue = 1
    // let maxValue = 5
    const [newMinValue, setNewMinValue] = useState(0)
    const [newMaxValue, setNewMaxValue] = useState(5)
    // const [error,setError] = useState(maxValue);

    const incCallBack = () => {
        newMinValue < newMaxValue && setNewMinValue(newMinValue + 1)
    }

    const resetCallBack = () => {
        return setNewMinValue(newMinValue)
    }

    const changeMaxValue = (value: number) => {
        if (newMinValue < newMaxValue) setNewMaxValue(value)
    }

    const changeMinValue = (value: number) => {
        if (newMinValue < newMaxValue) setNewMinValue(value)
    }

    const addNewValues = () => {

    }

    return (
        <div className={c.App}>

            <div className={c.counterSetValue}>

                <MinMax startValue={newMinValue}
                        maxValue={newMaxValue}
                        changeMinValue={changeMinValue}
                        changeMaxValue={changeMaxValue}

                />
                <div className={c.allBtn}>
                    <Button name={'set'} callBack={addNewValues} />
                </div>


                {/*<CounterSetValue*/}
                {/*    minValue={newMinValue}*/}
                {/*    maxValue={newMaxValue}*/}
                {/*    changeMaxValue={changeMaxValue}*/}
                {/*    changeMaxValue={changeMaxValue}*/}
                {/*/>*/}
            </div>

            <div className={c.counter}>
                <Counter incCallBack={incCallBack}
                         resetCallBack={resetCallBack}
                         counter={newMinValue}
                         maxValue={newMaxValue}
                         minValue={newMinValue}
                />
            </div>

        </div>
    );
}

export default App;


{/*<input value={value} type={"number"} onKeyPress={onKeyPressChangeValue} onChange={onChangeValue}/>*/
}
{/*{error && <Result totalResult={totalResult} />   }*/
}
{/*<Result totalResult={totalResult}/>*/
}