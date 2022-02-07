import React from 'react';
import '../main/App.module.css';
import c from './result.module.css'

type ResultPropsType = {
    counter: number
    maxValue:number
    error: boolean | string
    //showErrorMessage: ()=>void
}

export const Result = ({counter,maxValue,error,...props}: ResultPropsType) => {

    const resultStyle = counter === maxValue ? `${c.error}` : `${c.result}`

    return (
        <div className={resultStyle}>

            {error ? <span className={c.errorResult}> Incorrect value!</span> : counter }
        </div>
    );
};