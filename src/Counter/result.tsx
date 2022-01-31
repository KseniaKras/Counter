import React from 'react';
import '../main/App.module.css';
import c from './result.module.css'

type ResultPropsType = {
    counter: number
    maxValue:number
}

export const Result = ({counter,maxValue,...restProps}: ResultPropsType) => {
    return (
        <div className={counter === maxValue ? `${c.error}` : `${c.result}`}>{counter}</div>
    );
};