import styled from "styled-components";

export const Container = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

export const Marker = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: #fff;
  border: 0.2rem solid #ccc;
  border-radius: 0.3rem;

  svg {
    opacity: 0;
    fill: #fff;
  }
`;

export const Label = styled.span`
  display: inline-block;
  margin-left: 1rem;
`;

export const Input = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;

  &:checked {
    + ${Marker} {
      background-color: #6cafda;
      border-color: #6cafda;

      svg {
        opacity: 1;
      }
    }
  }
`;
