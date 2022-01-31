import React, {ChangeEvent} from 'react';
import c from './minmax.module.css'


type MinMaxPropsType = {
    startValue: number
    maxValue: number
    changeMaxValue: (value: number) => void
    changeMinValue: (value: number) => void

}

export const MinMax = ({startValue, maxValue, ...props}: MinMaxPropsType) => {

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMaxValue(e.currentTarget.valueAsNumber)
    }
    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMinValue(e.currentTarget.valueAsNumber)
    }


    return (
        <div className={c.minmax}>
            <div className={c.setValue}>
                <span>max value:</span>
                <input type={"number"} min={0} max={20}
                       value={maxValue}
                       onChange={onChangeMaxHandler} disabled={false}/>
            </div>
            <div>
                <span className={c.setValue}>start value:</span>
                <input type={"number"} min={0} max={20}
                       value={startValue}
                       onChange={onChangeMinHandler} disabled={false}/>
            </div>
        </div>
    );
};