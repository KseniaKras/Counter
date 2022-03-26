import React, {memo} from 'react';
import c from "./SetNewValues.module.css";
import {Input} from "../Input/Input";

type SetValuesFromInputPropsType = {
    title: string
    value: number
    onChangeHandler: (newValue: number) => void
    error: boolean
}

export const SetValuesFromInput = memo(({title, value, onChangeHandler, error}: SetValuesFromInputPropsType) => {
    return (
        <div className={c.setValue}>
            <span>{title}</span>
            <Input
                value={value}
                onChangeCallBack={onChangeHandler}
                error={error}
            />
        </div>
    );
});