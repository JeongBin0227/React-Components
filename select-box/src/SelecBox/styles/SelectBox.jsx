import styled, { css } from "styled-components";

const SelectBox = styled.button`
  display: flex;
  justify-content: center;
  font-weight: 700;
  border-radius: 10px;

  ${({ variant }) => variantStyles[variant]};
  ${({ size }) => sizeDesktopStyles[size]}

  ${({ isLoading }) => isLoading && loadingStyle};
  ${({ isFull }) => isFull && fullWidthStyle};

  @media only screen and (max-width: 768px) {
    ${({ size }) => sizeMobileStyles[size]}
  }
`;

export default SelectBox;
