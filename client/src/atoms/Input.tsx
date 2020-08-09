import * as React from 'react';
import styled from 'styled-components';

const { useState } = React;

const InputWrapper = styled.div`
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    position: relative;
    width: 100%;

`;
const Input = styled.input`
    border: none;
    color: rgba(255, 255, 255, 0.6);
    padding: 0.8rem 1.2rem;
    background: none;
    padding: 0;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    padding-left: 1.2rem;
    width: 100%;
    letter-spacing: 0.04rem;


    &:focus {
        border: none;
        outline: none;
    }
`;

const InputLabel = styled.div`
    position: absolute;
    top: 1rem;
    left: 1.2rem;
    color: black;
    color: rgba(255,255,255,0.6);
    letter-spacing: 0.04rem;
    opacity: ${({ isFocused }) => isFocused ? '0' : '1'};
    transition: opacity 0.25s ease-in-out;
`;

const CustomInput = (props) => {
    const [isFocused, setIsFocused] = useState(false);

    return <InputWrapper>
        <InputLabel isFocused={isFocused}>
            {props.label}
        </InputLabel>
        <Input {...props} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>
            {props.children}
        </Input>
    </InputWrapper>
}

export {
    InputWrapper,
    Input,
    CustomInput
}