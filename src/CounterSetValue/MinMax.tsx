import React, {ChangeEvent, useState} from 'react';
import c from './minmax.module.css'
import {Button} from "../Button/Button";


type MinMaxPropsType = {
    startValue: number
    maxValue: number
    onClickSetValues: (min: number, max: number)=>void
    //onClickSetValuesMax: (value: number)=>void
}

export const MinMax = ({startValue, maxValue, ...props}: MinMaxPropsType) => {

    const [min, setMin] = useState(startValue)
    const [max, setMax] = useState(maxValue)
    //const [disabled, setDisabled] = useState(false)


    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let maxValueFromInput =  e.currentTarget.valueAsNumber
        if (min < max) setMax(maxValueFromInput)
    }

    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let minValueFromInput =  e.currentTarget.valueAsNumber
        if (min < max) setMin(minValueFromInput)
    }

    const onClickSetCountHandler = () => {
        props.onClickSetValues(min, max)
    }

    return (
        <div>
            <div className={c.minmax}>
                <div className={c.setValue}>
                    <span>max value:</span>
                    <input type={"number"} min={0} max={20}
                           value={max}
                           onChange={onChangeMaxHandler} disabled={false}/>
                </div>
                <div>
                    <span className={c.setValue}>start value:</span>
                    <input type={"number"} min={0} max={20}
                           value={min}
                           onChange={onChangeMinHandler} disabled={false}/>
                </div>
            </div>
            <div className={c.allBtn}>
                <Button name={'set'} callBack={onClickSetCountHandler}/>
            </div>
        </div>
    );
};