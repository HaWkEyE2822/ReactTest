import * as React from "react";
import styled, { css } from "styled-components";

const Button = styled.div`
  padding: 0;
  font-weight: 400;
  ${({ isDisabled }) =>
    !isDisabled
      ? css`
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.4);
        `
      : css`
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.4);
          transition: background 0.25s ease-in;

          &:hover {
            border: 1px solid rgba(255, 255, 255, 0);
            background: #fff;
            color: pink;
            cursor: pointer;
          }

          &:focus {
            border: 1px solid rgba(255, 255, 255, 0);
            background: #fff;
            color: pink;
            cursor: pointer;
          }
        `};
  letter-spacing: 0.04rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const CustomButton = ({ isDisabled = true, ...props }) => {
  return <Button isDisabled={isDisabled}>{props.children}</Button>;
};

export { CustomButton, Button };
