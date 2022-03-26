import React, {memo, useCallback} from 'react';
import '../main/App.module.css';
import c from './result.module.css'

type ResultPropsType = {
    counter: number
    maxValue: number
    error: boolean
    resultSettings: boolean
}

export const Result = memo(({counter, maxValue, error, resultSettings}: ResultPropsType) => {

    const resultStyle = counter === maxValue ? `${c.error}` : `${c.result}`

    const showResult = () => {
        if (error) {
            return <span className={c.errorResult}> Incorrect value!</span>
        } else if (resultSettings) {
            return <span className={c.settingsResult}> Enter values and press 'set'!</span>
        } else return counter;
    }
    const result = showResult();

    return (
        <div className={resultStyle}>
            {result}
        </div>
    );
});
