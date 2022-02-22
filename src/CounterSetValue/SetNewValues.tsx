import React, {useState} from 'react';
import c from './SetNewValues.module.css';
import {Button} from "../Button/Button";
import {SetValuesFromInput} from "./setValuesFromInput";


type SetNewValuesPropsType = {
    minValue: number
    maxValue: number
    onClickSetValues: (min: number, max: number) => void
    errorCallback: (value: boolean) => void
    error: boolean
    showSetNewValuesSettings: (value: boolean) => void
}

export const SetNewValues = ({
                                 minValue,
                                 maxValue,
                                 onClickSetValues,
                                 errorCallback,
                                 error,
                                 showSetNewValuesSettings,
                             }: SetNewValuesPropsType) => {

        const [min, setMin] = useState(minValue)
        const [max, setMax] = useState(maxValue)
        const [disabled, setDisabled] = useState(false)

        const onChangeMaxHandler = (newValue: number) => {
            setDisabled(false)
            setMax(newValue)
            if (newValue > min) {
                errorCallback(false)
                showSetNewValuesSettings(true)
            } else {
                errorCallback(true)
                showSetNewValuesSettings(false)
            }
        }

        const onChangeMinHandler = (newValue: number) => {
            setDisabled(false)
            setMin(newValue)
            if (newValue >= max) {
                errorCallback(true)
                showSetNewValuesSettings(false)
            } else {
                errorCallback(false)
                showSetNewValuesSettings(true)
            }
        }

        const onClickSetCounterHandler = () => {
            onClickSetValues(min, max)
            setDisabled(true)
            showSetNewValuesSettings(false)
            if (error) {
                errorCallback(true)
            }
        }

        return (
            <div>
                <div className={c.setNewValues}>
                    <SetValuesFromInput
                        title={'max value:'}
                        value={max}
                        onChangeMaxHandler={onChangeMaxHandler}
                        error={error}
                    />
                    <SetValuesFromInput
                        title={'min value:'}
                        value={min}
                        onChangeMaxHandler={onChangeMinHandler}
                        error={error}
                    />
                </div>
                <div className={c.buttonsBlock}>
                    <Button name={'set'} callBack={onClickSetCounterHandler} disabled={disabled}/>
                </div>
            </div>
        );
    }
;