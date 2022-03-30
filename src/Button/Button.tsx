import React, {memo} from 'react';
import '../main/App.module.css';
import c from './Button.module.css'

type ButtonPropsType = {
    name: string
    callBack: () => void
    disabled?: boolean
}

export const Button = memo(({name, callBack, disabled}: ButtonPropsType) => {

    return (
        <button className={c.button} disabled={disabled} onClick={callBack}>
            {name}
        </button>
    );
});
