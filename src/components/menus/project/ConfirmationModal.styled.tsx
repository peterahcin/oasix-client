import styled from "@emotion/styled";
import { ReactComponent as CrossSimpleIconIcons } from "../../../icons/cross-simple.svg";
import { Colors } from "../../../styles/colors";
import { FontSize } from "../../../styles/fontSize";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1rem;
`;

export const CrossSimpleIcon = styled(CrossSimpleIconIcons)`
  fill: ${Colors.black};
  width: 16px;
  height: 16px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  line-height: 20px;
`;

export const Modal = styled.div`
  padding: 32px 32px;
  position: relative;
  height: 100%;
  background: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;

  :focus-visible {
    outline: none;
  }
`;

export const ModalButtonWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  display: block;
  max-width: 480px;
  width: 100%;
`;

export const Text = styled.p`
  font-size: 20px; //intentionally breaking from 8 point standard
  font-weight: 600;
  margin: 24px 0px;
  color: ${Colors.black};
  font-family: "Inter";
  letter-spacing: 0.2px;
  text-align: center;
`;

export const Button = styled.button<{
  create?: boolean;
  cancel?: boolean;
  small?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px !important;
  background: ${({ create, cancel }) =>
    // create ? Gradient : cancel ? Colors.error : Colors.white};
    create ? Colors.primary : cancel ? Colors.error : Colors.white};
  border-radius: 24px;
  font-size: ${FontSize.xs};
  letter-spacing: 0.1rem;
  color: ${({ create, cancel }) =>
    create || cancel ? Colors.extraWhite : Colors.black};
  font-family: "Inter";
  box-shadow: 0px 2px 6px ${Colors.black};
  border: none;
  font-weight: 600;
  line-height: 100%;
  white-space: nowrap;
  min-width: ${({ small }) => (small ? "144px" : "168px")};

  cursor: pointer;
  transition: transform 0.2s ease;
  :hover {
    // color: ${({ cancel, create }) =>
      !cancel && !create && Colors.extraWhite};
    box-shadow: 0px 4px 16px ${Colors.black};
    // background: ${({ create }) => (!create ? Colors.black : Colors.primary)};
    transition: 0.2s;
  }

  :focus {
    color: ${({ cancel, create }) => !cancel && !create && Colors.extraWhite};
    box-shadow: 0px 4px 16px ${Colors.black};
    background: ${({ create }) => (!create ? Colors.black : Colors.primary)};
  }

  :active {
    transform: translateY(1px);
  }

  :disabled {
    cursor: auto;
  }
`;
