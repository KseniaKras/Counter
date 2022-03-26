import React, {memo, useCallback} from 'react';
import '../main/App.module.css';
import c from './Button.module.css'

type ButtonPropsType = {
    name: string
    callBack: () => void
    disabled?: boolean
}

export const Button = memo(({name, callBack, disabled}: ButtonPropsType) => {

    const onClickHandler = useCallback(() => callBack(), [])

    return (
        <button className={c.button} disabled={disabled} onClick={onClickHandler}>
            {name}
        </button>
    );
});
