import React from 'react';
import c from "./SetNewValues.module.css";
import {Input} from "../Input/Input";

type SetValuesFromInputPropsType = {
    title: string
    value: number
    onChangeMaxHandler: (newValue: number) => void
    error: boolean
}

export const SetValuesFromInput = ({title, value, onChangeMaxHandler, error}:SetValuesFromInputPropsType) => {
    return (
        <div className={c.setValue}>
            <span>{title}</span>
            <Input
                value={value}
                onChangeCallBack={onChangeMaxHandler}
                error={error}
            />
        </div>
    );
};