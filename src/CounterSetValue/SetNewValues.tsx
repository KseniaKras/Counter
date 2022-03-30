import React, {memo, useCallback, useState} from 'react';
import c from './SetNewValues.module.css';
import {Button} from "../Button/Button";
import {SetValuesFromInput} from "./setValuesFromInput";
import {useDispatch} from "react-redux";
import {setNewMaxCounterValue, setNewMinCounterValue} from "../redux/reducers/counter-reducer";


type SetNewValuesPropsType = {
    minValue: number
    maxValue: number
    error: boolean
    errorCallback: (value: boolean) => void
    showSetNewValuesSettings: (value: boolean) => void
}

export const SetNewValues = memo(({
                                      minValue,
                                      maxValue,
                                      errorCallback,
                                      error,
                                      showSetNewValuesSettings,
                                  }: SetNewValuesPropsType) => {

        const dispatch = useDispatch()
        const [disabled, setDisabled] = useState(false)

        const onChangeMaxHandler = (newValue: number) => {
            setDisabled(false)
            dispatch(setNewMaxCounterValue(newValue))
            errorCallback(!(newValue > minValue))
            showSetNewValuesSettings(true)
        }

        const onChangeMinHandler = (newValue: number) => {
            setDisabled(false)
            dispatch(setNewMinCounterValue(newValue))
            errorCallback(!(newValue < maxValue))
            showSetNewValuesSettings(true)
        }

        const onClickSetCounterHandler = useCallback(() => {
            setDisabled(true)
            showSetNewValuesSettings(false)
            if (error) {
                errorCallback(true)
            }
        }, [])

        return (
            <div>
                <div className={c.setNewValues}>
                    <SetValuesFromInput
                        title={'max value:'}
                        value={maxValue}
                        onChangeHandler={onChangeMaxHandler}
                        error={error}
                    />
                    <SetValuesFromInput
                        title={'min value:'}
                        value={minValue}
                        onChangeHandler={onChangeMinHandler}
                        error={error}
                    />
                </div>
                <div className={c.buttonsBlock}>
                    <Button name={'set'} callBack={onClickSetCounterHandler} disabled={disabled}/>
                </div>
            </div>
        );
    })
;