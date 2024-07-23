import styled from "@emotion/styled";

export const Info = styled.div`
  font-size: 16px;
  color: #282828;
  letter-spacing: 0.2px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const InputLabelText = styled.p`
  font-size: 16px;
  color: #282828;
  font-weight: 600;
  letter-spacing: 0.2px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 8px;
`;

export const Input = styled.input`
    align-items: center;
    cursor: default;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    min-height: 40px;
    outline: 0 !important;
    position: relative;
    -webkit-transition: all 100ms;
    transition: all 100ms;
    background-color: white;
    border-color: hsl(0, 0%, 80%);
    border-radius: 8px;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
    height: 40px;
`;

export const Select = styled.select`
  border: 2px solid #282828;
  border-radius: 4px;
  padding: 8px;
`;