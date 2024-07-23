import styled from "@emotion/styled";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InfoSection = styled.section`
  width: 100%;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;

export const CenterHeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  row-gap: 1rem;
  padding: 0rem 2rem;
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

  border-radius: 24px;

  letter-spacing: 0.1rem;

  /* font-family: "PoppinsRegular"; */
  border: none;
  font-weight: 600;
  line-height: 100%;
  white-space: nowrap;
  cursor: pointer;
  transition: transform 0.2s ease;

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
  /* font-family: "PoppinsRegular"; */
  font-size: red;
`;
