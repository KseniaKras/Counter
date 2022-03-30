import React, {memo, useCallback, useState} from 'react';
import {Result} from "./result";
import {Button} from "../Button/Button";
import c from './../Button/Button.module.css'
import {useDispatch} from "react-redux";
import {incCounterValue, resetCounterValue} from "../redux/reducers/counter-reducer";

type CounterPropsType = {
    newValue: number
    maxValue: number
    error: boolean
    counterSettings: boolean
}

export const Counter = memo(({
                                 newValue,
                                 maxValue,
                                 error,
                                 counterSettings,
                             }: CounterPropsType) => {

    const [incDisabled, setIncDisabled] = useState<boolean>(false)
    const [resetDisabled, setResetDisabled] = useState<boolean>(false)

    const dispatch = useDispatch()

    const onClickIncMinHandler = () => {
        if (newValue < maxValue) {
            dispatch(incCounterValue())
            setResetDisabled(false)
            setIncDisabled(false)
        } else {
            setIncDisabled(true)
        }
    }

    const onClickResetHandler = useCallback(() => {
        dispatch(resetCounterValue())
        setResetDisabled(true)
        setIncDisabled(false)
    }, [])

    return (
        <div>
            <Result
                counter={newValue}
                maxValue={maxValue}
                error={error}
                counterSettings={counterSettings}
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
});