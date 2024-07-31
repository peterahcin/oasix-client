import styled from "@emotion/styled";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const InfoSection = styled.section`
  width: 100%;
  gap: 8px;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

export const CenterHeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GridContainer = styled.div<{ smallScreen: boolean }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  row-gap: 1rem;
  padding: ${({ smallScreen }) => (smallScreen ? "0rem" : "0rem 2rem")};
`;

export const InfoItem = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
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
  width: 152px;
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
