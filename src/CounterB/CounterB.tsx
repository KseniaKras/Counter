import React, {useState} from 'react';
import {ResultB} from "./ResultB";
import {Button} from "../Button/Button";
import c from './../Button/Button.module.css'

type CounterPropsType = {
    incCallBack: () => void
    resetCallBack: () => void
    counter: number
}

export const CounterB = ({
                            incCallBack,
                            resetCallBack,
                            counter,
                            ...restProps
                        }: CounterPropsType) => {

    const [minVal, setMinVal] = useState()

    return (
        <div>
            {/*<ResultB counter={counter} maxValue={maxValue}/>*/}
            {/*<div className={c.allBtn}>*/}
            {/*    <Button name={'inc'} callBack={incCallBack} disabled={counter === maxValue}/>*/}
            {/*    <Button name={'reset'} callBack={resetCallBack} disabled={false}/>*/}
            {/*</div>*/}
        </div>
    );
};