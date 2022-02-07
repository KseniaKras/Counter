import React from 'react';
import '../main/App.module.css';
import c from './Button.module.css'

type ButtonPropsType = {
    name: string
    callBack: ()=>void
    disabled?: boolean
}

export const Button = ({name, callBack, disabled,...props}:ButtonPropsType) => {

    const onClickHandler = () => {
        callBack()
    }
    return (

        <button className={c.button} disabled={disabled} onClick={onClickHandler}>{name}</button>
    );
};
