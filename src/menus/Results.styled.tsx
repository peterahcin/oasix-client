import styled from "@emotion/styled";


export const DatesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  // width: 100%;
  align-items: center;
  padding: 16px 32px !important;
  background-color: #5e81f2;
  border-radius: 8px;
  letter-spacing: 0.1rem;
  box-shadow: 0px 2px 6px #282828;
  border: none;
  font-size: 16px;
  font-weight: 600;
  line-height: 100%;
  white-space: nowrap;
  // width: 152px;
  height: 40px;
  cursor: pointer;
  transition: transform 0.2s ease;

  :hover {
    box-shadow: 0px 4px 16px #282828;
    background-color: #14b8a6;
  }

  :active {
    transform: translateY(1px);
  }

  :disabled {
    cursor: auto;
  }
`;

export const RedErrorMessageContainer = styled.div`
  color: red;
  display: flex;
  justify-content: flex-end;
  font-size: red;
`;
