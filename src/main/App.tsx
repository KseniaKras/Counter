import React, {ChangeEvent, useState} from 'react';
import './App.module.css';
import {Counter} from "../Counter/Counter";
import c from './App.module.css';
import {MinMax} from "../CounterSetValue/MinMax";


function App() {
    let minValue = 0
    let maxValue = 5
    const [newMinValue, setNewMinValue] = useState(minValue)
    const [newMaxValue, setNewMaxValue] = useState(maxValue)
    // const [error,setError] = useState(maxValue);

    const incCallBack = () => {
        newMinValue < newMaxValue && setNewMinValue(newMinValue + 1)
    }

    const resetCallBack = () => {
        debugger;
        return setNewMinValue(minValue)
    }

    // const changeMaxValue = (value: number) => {
    //     if (newMinValue < newMaxValue) setNewMaxValue(value)
    // }

    // const changeMinValue = (value: number) => {
    //     if (newMinValue < newMaxValue) setNewMinValue(value)
    // }

    const onClickSetValues = (min: number, max: number) => {
        setNewMinValue(min)
        setNewMaxValue(max)
    }

    return (
        <div className={c.App}>
            <div className={c.counterSetValue}>
                <MinMax startValue={newMinValue}
                        maxValue={newMaxValue}
                        onClickSetValues={onClickSetValues}
                       // onClickSetValuesMax={onClickSetValues}
                />
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


{/*<CounterB*/
}
{/*    incCallBack={incCallBack}*/
}
{/*    resetCallBack={resetCallBack}*/
}
{/*    counter={minValue}*/
}
{/*   />*/
}
{/*</div>*/
}
{/*<CounterSetValue*/
}
{/*    minValue={newMinValue}*/
}
{/*    maxValue={newMaxValue}*/
}
{/*    changeMaxValue={changeMaxValue}*/
}
{/*    changeMaxValue={changeMaxValue}*/
}
{/*/>*/
}