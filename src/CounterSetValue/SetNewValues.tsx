import React, {useState} from 'react';
import c from './SetNewValues.module.css';
import {Button} from "../Button/Button";
import {Input} from "../Input/InputNumberType";


type SetNewValuesPropsType = {
    minValue: number
    maxValue: number
    onClickSetValues: (min: number, max: number) => void
    errorCallback: (value: boolean) => void
    error:boolean | string
}

export const SetNewValues = ({minValue, maxValue,error, ...props}: SetNewValuesPropsType) => {

        const [min, setMin] = useState(minValue)
        const [max, setMax] = useState(maxValue)
        const [disabled, setDisabled] = useState(false)

        const onChangeMaxHandler = (newValue: number) => {
            if (max > min) {
                setMax(newValue)
                props.errorCallback(false)
            } else {
                props.errorCallback(true)
            }
        }

        const onChangeMinHandler = (newValue: number) => {
            if (min >= 0 && min < max) {
                setMin(newValue)
                props.errorCallback(false)
            } else {
                props.errorCallback(true)
            }
        }

        const onClickSetCounterHandler = () => {
            props.onClickSetValues(min, max)
            setDisabled(true)
            if (error) {
                props.errorCallback(true)
                // setError(true)
                setDisabled(true)
            }
        }

        return (
            <div>
                <div className={c.setNewValues}>
                    <div className={c.setValue}>
                        <span>max value:</span>

                        <Input
                            value={max}
                            onChangeCallBack={onChangeMaxHandler}
                            error={error}
                            errorCallback={() => {}}
                        />

                    </div>
                    <div>
                        <span className={c.setValue}>min value:</span>

                        <Input
                            value={min}
                            onChangeCallBack={onChangeMinHandler}
                            error={error}
                            errorCallback={() =>{}}
                        />

                    </div>
                </div>
                <div className={c.allBtn}>
                    <Button name={'set'} callBack={onClickSetCounterHandler} disabled={disabled}/>
                </div>
            </div>
        );
    }
;