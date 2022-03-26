import React, {ChangeEvent} from 'react';
import '../main/App.module.css';
import c from "./Input.module.css";

type InputPropsType = {
    value: number
    onChangeCallBack: (newValue: number) => void
    error: boolean
}

export const Input = ({value, onChangeCallBack, error}: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = +e.currentTarget.value
        onChangeCallBack(newValue)
    }

    const inputClassName = error ? `${c.error} ${c.input}` : c.input

    return (
        <input
            type={'number'}
            value={value}
            onChange={onChangeHandler}
            className={inputClassName}
        />
    );
};
