import styled from "@emotion/styled";

export const Info = styled.div`
  font-size: 16px;
  color: #282828;
  /* font-family: "PoppinsRegular"; */
  letter-spacing: 0.2px;
  width: 100%;
  background-color: #ffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const InputLabelText = styled.p`
  font-size: 16px;
  color: #282828;
  font-weight: 600;
  /* font-family: "PoppinsRegular"; */
  letter-spacing: 0.2px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Input = styled.input`
  border: 2px solid #282828;
  border-radius: 4px;
  padding: 8px;
`;

export const Select = styled.select`
  border: 2px solid #282828;
  border-radius: 4px;
  padding: 8px;
`;