import React, {useState} from 'react';
import {Result} from "./result";
import {Button} from "../Button/Button";
import c from './../Button/Button.module.css'

type CounterPropsType = {
    minValue: number
    maxValue: number
    error: boolean
    resultSettings: boolean
    newCounterValue: number
    setNewCounterValue: (value: number) => void
}

export const Counter = ({
                            minValue,
                            maxValue,
                            error,
                            resultSettings,
                            newCounterValue,
                            setNewCounterValue
                        }: CounterPropsType) => {

    const [incDisabled, setIncDisabled] = useState(false)
    const [resetDisabled, setResetDisabled] = useState(false)

    const onClickIncMinHandler = () => {
        if (newCounterValue < maxValue) {
            setNewCounterValue(newCounterValue + 1)
            setResetDisabled(false)
            setIncDisabled(false)
        } else {
            setIncDisabled(true)
        }
    }

    const onClickResetHandler = () => {
        debugger
        setNewCounterValue(minValue)
        setResetDisabled(true)
        setIncDisabled(false)
    }
    return (
        <div>
            <Result
                counter={newCounterValue}
                maxValue={maxValue}
                error={error}
                resultSettings={resultSettings}
            />

            <div className={c.buttonsBlock}>
                <Button
                    name={'inc'}
                    callBack={onClickIncMinHandler}
                    disabled={incDisabled}
                />
                <Button
                    name={'reset'}
                    callBack={onClickResetHandler}
                    disabled={resetDisabled}
                />
            </div>
        </div>
    );
};