import React from 'react';
import {Result} from "./result";
import {Button} from "../Button/Button";
import c from './../Button/Button.module.css'

type CounterPropsType = {
    incCallBack: () => void
    resetCallBack: () => void
    counter: number
    maxValue: number
    minValue: number
}

export const Counter = ({
                            incCallBack,
                            resetCallBack,
                            counter,
                            maxValue,
                            minValue,
                            ...restProps
                        }: CounterPropsType) => {
    return (



        <div>
            <Result counter={counter} maxValue={maxValue}/>
            <div className={c.allBtn}>
                <Button name={'inc'} callBack={incCallBack} disabled={counter === maxValue}/>
                <Button name={'reset'} callBack={resetCallBack} disabled={false}/>
            </div>
        </div>
    );
};