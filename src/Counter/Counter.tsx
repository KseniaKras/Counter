import React, {useState} from 'react';
import {Result} from "./result";
import {Button} from "../Button/Button";
import c from './../Button/Button.module.css'

type CounterPropsType = {
    minValue: number
    maxValue: number
    error: boolean | string
}

export const Counter = ({minValue,maxValue,error,...restProps}: CounterPropsType) => {

    const [min, setMin] = useState(minValue)
    const [disabled, setDisabled] = useState(false)

    const onClickIncMinHandler = () => {
        min < maxValue && setMin(min + 1)
        setDisabled(false)
    }
    const onClickResetHandler = () => {
        setMin(minValue)
        //setDisabled(true)
    }
    return (
        <div>

            <Result
                counter={min}
                maxValue={maxValue}
                error={error}
                //showErrorMessage={showErrorMessage}
            />

            <div className={c.allBtn}>

                <Button
                    name={'inc'}
                    callBack={onClickIncMinHandler}
                    disabled={min === maxValue}
                />

                <Button
                    name={'reset'}
                    callBack={onClickResetHandler}
                    disabled={disabled}
                />

            </div>
        </div>
    );
};